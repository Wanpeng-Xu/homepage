(() => {
  const data = window.siteContent;
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text != null && text !== '') node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const safeURL = (value) => {
    if (!value) return false;
    try { return ['http:', 'https:', 'mailto:'].includes(new URL(value, location.href).protocol); }
    catch { return false; }
  };
  const link = (label, url, className) => {
    const a = el('a', label, className);
    a.href = url;
    if (/^https?:/.test(url) && new URL(url).origin !== location.origin) { a.target = '_blank'; a.rel = 'noopener'; }
    return a;
  };
  const linkRow = (links) => {
    const row = el('p', null, 'links');
    Object.entries(links || {}).forEach(([label, url]) => { if (safeURL(url)) row.append(link(label.toLowerCase(), url)); });
    return row.childElementCount ? row : null;
  };
  const hideSection = (id) => { $(`#${id}`)?.remove(); document.querySelectorAll(`.nav a[href="#${id}"]`).forEach(a => a.remove()); };
  const byYearDesc = (a, b) => Number(b.year) - Number(a.year);

  // ── Identity ────────────────────────────────────────────────────────────
  document.querySelectorAll('[data-name]').forEach(n => n.textContent = data.name);
  $('.portrait-initials').textContent = data.initials;
  $('#year').textContent = new Date().getFullYear();
  const [role, ...affiliation] = data.position || [];
  $('#position').append(role || '', affiliation.length ? ', ' : '', el('span', affiliation.join(', '), 'muted'));
  const email = $('#email');
  if (data.email) { email.href = `mailto:${data.email}`; email.textContent = data.email.replace('@', ' [at] ').replace(/\./g, ' [dot] '); } else email.remove();
  if (safeURL(data.photo)) {
    const img = el('img'); img.src = data.photo; img.alt = `Portrait of ${data.name}`;
    img.addEventListener('load', () => $('#portrait').replaceChildren(img));
  }
  for (const p of data.profiles || []) if (safeURL(p.url)) $('#profile-links').append(link(p.label, p.url));
  if (safeURL(data.cv)) $('#profile-links').append(link('CV', data.cv));
  for (const paragraph of data.bio || []) { const p = el('p'); p.innerHTML = paragraph; $('#bio').append(p); }

  // ── Education & experience ──────────────────────────────────────────────
  const credential = (main, sub, years, note) => {
    const item = el('div', null, 'credential');
    const head = el('p', null, 'credential-head');
    head.append(el('span', main, 'credential-main'), el('span', years || '', 'credential-years'));
    item.append(head);
    if (sub) { const detail = el('p', sub, 'credential-detail'); if (note) detail.append(` (${note})`); item.append(detail); }
    return item;
  };
  if (data.education?.length) for (const e of data.education) {
    const item = credential(e.institution, e.degree, e.years, e.note);
    if (safeURL(e.degreeUrl)) item.querySelector('.credential-detail').replaceChildren(link(e.degree, e.degreeUrl, 'quiet'));
    if (e.advisor?.name) {
      const line = el('p', 'Advisor: ', 'credential-detail');
      line.append(safeURL(e.advisor.url) ? link(e.advisor.name, e.advisor.url) : e.advisor.name);
      item.append(line);
    }
    $('#education-list').append(item);
  }
  else $('#education-block').remove();
  if (data.experiences?.length) for (const x of data.experiences) {
    const item = credential(x.organization ? `${x.title} @ ${x.organization}` : x.title, '', x.years);
    if (x.description) item.append(el('p', x.description, 'credential-detail'));
    $('#experience-list').append(item);
  } else $('#experience-block').remove();
  if (!$('#education-block') && !$('#experience-block')) $('.credentials').remove();
  else $('.credentials').classList.toggle('single', !($('#education-block') && $('#experience-block')));

  // ── Publications (indexed first so research themes can reference them) ──
  const pubs = [...(data.publications || [])].sort(byYearDesc);
  const pubById = Object.fromEntries(pubs.map(p => [p.id, p]));
  const authorLine = (authors, equal = []) => {
    const p = el('p', null, 'mono authors');
    (authors || []).forEach((name, i) => {
      if (i) p.append(', ');
      const label = equal.includes(name) ? `${name}*` : name;
      p.append(name === data.name ? el('span', label, 'me') : label);
    });
    if (equal.length) p.append(' (* equal contribution)');
    return p;
  };

  // ── Research ────────────────────────────────────────────────────────────
  if (data.research?.length) for (const theme of data.research) {
    const item = el('div', null, 'theme');
    const p = el('p'); p.append(el('strong', theme.title), ' ', theme.description);
    item.append(p);
    const refs = (theme.papers || []).map(id => pubById[id]).filter(Boolean);
    if (refs.length) {
      const row = el('p', null, 'links');
      refs.forEach(pub => { const a = el('a', (pub.short || String(pub.year)).split(' · ')[0]); a.href = `#pub-${pub.id}`; a.title = pub.title; row.append(a); });
      item.append(row);
    }
    $('#research-list').append(item);
  } else hideSection('research');

  // ── Publications ────────────────────────────────────────────────────────
  if (pubs.length) for (const pub of pubs) {
    const row = el('div', null, 'entry'); row.id = `pub-${pub.id || ''}`;
    const title = el('p', null, 'title');
    title.append(pub.title, ', ', el('span', pub.short || pub.venue, 'mono venue'));
    row.append(title, authorLine(pub.authors, pub.equal || []));
    if (pub.note) row.append(el('p', pub.note, 'note'));
    const links = linkRow(pub.links); if (links) row.append(links);
    $('#publication-list').append(row);
  } else hideSection('publications');

  // ── Teaching ────────────────────────────────────────────────────────────
  const statement = data.teachingStatement;
  if (statement?.text?.length) {
    if (statement.quote) $('#teaching-statement').append(el('p', `“${statement.quote}”`, 'statement-quote'));
    for (const paragraph of statement.text) { const p = el('p'); p.innerHTML = paragraph; $('#teaching-statement').append(p); }
  } else $('#teaching-statement').remove();
  if (data.courses?.length) for (const c of data.courses) {
    const row = el('div', null, 'entry');
    const title = el('p', null, 'title');
    title.append(el('span', c.number, 'mono course-number'), ' ', c.title);
    row.append(title);
    const meta = [c.term, c.role].filter(Boolean).join(', ');
    row.append(el('p', meta, 'mono'));
    if (c.description) row.append(el('p', c.description, 'desc'));
    $('#course-list').append(row);
  } else if (!statement?.text?.length) hideSection('teaching');

  // ── Talks ───────────────────────────────────────────────────────────────
  const monthName = (date) => {
    const [y, m] = String(date).split('-');
    return m ? `${new Date(Number(y), Number(m) - 1).toLocaleString('en', { month: 'long' })} ${y}` : y;
  };
  const talks = data.talks || [];   // list order is the display order
  if (talks.length) for (const t of talks) {
    const row = el('div', null, 'entry');
    row.append(el('p', t.title, 'title'));
    const meta = el('p', null, 'mono'); meta.append(t.event, ', ', el('em', monthName(t.date)));
    if (t.type) meta.append(` (${t.type.toLowerCase()})`);
    row.append(meta);
    if (t.description) row.append(el('p', t.description, 'desc'));
    const links = linkRow(t.links); if (links) row.append(links);
    $('#talk-list').append(row);
  } else hideSection('talks');

  // ── Awards ──────────────────────────────────────────────────────────────
  const awards = [...(data.awards || [])].sort(byYearDesc);
  if (awards.length) for (const a of awards) {
    const row = el('p', null, 'award');
    row.append(el('span', String(a.year), 'mono year'), ' ', safeURL(a.url) ? link(a.title, a.url) : a.title);
    if (a.organization) row.append(', ', el('span', a.organization, 'muted'));
    $('#award-list').append(row);
  } else hideSection('awards');

  // ── CV ──────────────────────────────────────────────────────────────────
  if (safeURL(data.cv)) $('#cv-action').append(link('Download CV (PDF)', data.cv));
  else hideSection('cv');

  // ── Structured data for search engines ──────────────────────────────────
  const ld = {
    '@context': 'https://schema.org', '@type': 'Person', name: data.name, email: data.email ? `mailto:${data.email}` : undefined,
    jobTitle: data.position?.[0], affiliation: data.position?.[1] ? { '@type': 'CollegeOrUniversity', name: data.position[1] } : undefined,
    sameAs: (data.profiles || []).map(p => p.url).filter(safeURL)
  };
  const script = el('script'); script.type = 'application/ld+json'; script.textContent = JSON.stringify(ld); document.head.append(script);

  // Content is rendered after the browser's initial hash scroll, so re-scroll to the requested section.
  if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
})();
