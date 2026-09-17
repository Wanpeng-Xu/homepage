// ─────────────────────────────────────────────────────────────────────────────
// All site content lives in this one file. index.html is only the skeleton.
// Rules:
//   • Leave a value empty ('' or []) to hide it. Empty sections and their
//     navigation links are not rendered at all.
//   • Only http(s):// and mailto: links are rendered; anything else is ignored.
//   • Publications are sorted by year (newest first), then by list order.
//     Put the papers you want highlighted first within their year.
//   • Research themes reference publications by their `id`.
//   • `short` is the compact venue tag shown next to a publication title.
// ─────────────────────────────────────────────────────────────────────────────
window.siteContent = {
  name: 'Wanpeng Xu',
  initials: 'WX',
  tagline: 'Engineering Education',
  position: ['PhD Student', 'Arizona State University'],
  email: 'wanpeng.xu@asu.edu',
  photo: 'assets/portrait.jpg',
  cv: '',      // e.g. 'assets/cv.pdf'
  description: 'PhD student in Engineering Education Systems and Design at Arizona State University. Research on theory-grounded AI for education and on identity and inclusion in engineering.',

  profiles: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/wanpengxu' },
    { label: 'Podcast (in Chinese)', url: 'https://linktr.ee/huajilaile' },
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=olM52_cAAAAJ&hl=en&inst=1960582506653781529' },
    { label: 'ORCID', url: '' },
    { label: 'GitHub', url: '' }
  ],

  // Short paragraphs. <strong> and <a> tags are allowed here.
  bio: [
    'Hello! I am a PhD student in Engineering Education Systems and Design at Arizona State University, with expected graduation in Fall 2027.',
    'My research spans <strong>AI for education</strong> and <strong>identity & inclusion in engineering</strong>. I study theory-grounded AI systems that support teaching, learning, and instructional design, and I investigate the experiences of Asian, queer, neurodivergent, and other marginalized engineering students.',
    'Before my PhD, I worked as a research administrator at Arizona State University supporting faculty grant proposals, and as a project manager in New York and Shanghai.'
  ],

  education: [
    { institution: 'Arizona State University', degree: 'PhD in Engineering Education Systems and Design', years: 'Expected Fall 2027', note: 'in progress' },
    { institution: 'Fordham University', degree: 'MS in Business Analytics', years: '2023' },
    { institution: 'Wenzhou University', degree: 'BA in Advertising', years: '2016' }
  ],

  // { organization, title, years, description } — shown as "title @ organization"; organization may be empty
  experiences: [
    { organization: 'ASU', title: 'Research Administrator', years: '2024 – 2025',
      description: 'Supported 30+ principal investigators on 100+ research proposals to 10+ funding agencies and sponsors.' },
    { organization: 'New York & Shanghai', title: 'Project Manager', years: '2017 – 2022',
      description: 'Five years leading cross-functional programs and teams, from planning and budgeting to delivery and stakeholder communication.' }
  ],

  research: [
    {
      title: 'Theory-grounded AI for education',
      description: 'Multi-agent LLM systems that generate coherent, pedagogically aligned course materials, from syllabi and slides to lecture videos, while keeping teaching faculty in control of the design process.',
      papers: ['eacl26-agents', 'lern26-mooc']
    },
    {
      title: 'Identity & inclusion in engineering education',
      description: 'Qualitative studies of Asian, LGBTQIA+, and neurodivergent engineering students, and pedagogies that widen who gets to belong in engineering.',
      papers: ['asee25-mental-health', 'asee26-futures']
    }
  ],

  publications: [
    {
      id: 'eacl26-agents', short: "EACL '26 · Oral", year: 2026,
      title: 'Instructional Agents: Reducing Teaching Faculty Workload through Multi-Agent Instructional Design',
      authors: ['Huaiyuan Yao', 'Wanpeng Xu', 'Justin Turnau', 'Nadia Kellam', 'Hua Wei'],
      equal: ['Huaiyuan Yao', 'Wanpeng Xu'],   // marked with * and "(* equal contribution)"
      venue: 'EACL 2026 (Main Conference, Oral)',
      links: {
        Paper: 'https://aclanthology.org/2026.eacl-long.191/',
        arXiv: 'https://arxiv.org/abs/2508.19611',
        Code: 'https://github.com/DaRL-GenAI/instructional_agents',
        Project: 'https://darl-genai.github.io/instructional_agents_homepage/',
        Talk: 'https://underline.io/lecture/147149-instructional-agents-reducing-teaching-faculty-workload-through-multi-agent-instructional-design'
      }
    },
    {
      id: 'asee26-futures', short: "ASEE '26", year: 2026,
      title: 'Futures as Pedagogy: Africanfuturism, Ungrading, and Critical AI Literacy for Developing Entrepreneurial Mindset in Engineering Science',
      authors: ['Nadia N. Kellam', 'Wanpeng Xu', 'C. R. Palacio', 'M. Suleman', 'A. L. Castillo'],
      venue: '2026 ASEE Annual Conference & Exposition',
      links: {}
    },
    {
      id: 'emnlp26-rubrics', short: "EMNLP '26", year: 2026,
      title: 'From Rubrics to Reliable Scores: Evidence-Grounded Text Evaluation with LLM Judges',
      authors: ['Yihan Hong', 'Huaiyuan Yao', 'Bolin Shen', 'Wanpeng Xu', 'Hua Wei', 'Yushun Dong'],
      venue: 'EMNLP 2026 (Main Conference)',
      links: { arXiv: 'https://arxiv.org/abs/2601.08654' }
    },
    {
      id: 'acl26-tools', short: "ACL '26", year: 2026,
      title: 'Lost in Execution: On the Multilingual Robustness of Tool Calling in Large Language Models',
      authors: ['Zheng Luo', 'T. Pranav Kutralingam', 'Ogochukwu N. Okoani', 'Wanpeng Xu', 'Hua Wei', 'Xiyang Hu'],
      venue: 'ACL 2026 (Main Conference, Long Paper)',
      links: { Paper: 'https://aclanthology.org/2026.acl-long.2039/', arXiv: 'https://arxiv.org/abs/2601.05366' }
    },
    {
      id: 'lern26-mooc', short: "LERN '26", year: 2026,
      title: 'From Course Concept to Lecture Video: An AI-Powered System for Automated MOOC Development',
      authors: ['Jacob Igo', 'Huaiyuan Yao', 'Wanpeng Xu', 'Nadia Kellam', 'Hua Wei'],
      venue: 'Proceedings of the Learning Engineering Research Network Convening (LERN 2026)',
      links: { DOI: 'https://doi.org/10.59668/2551.25409', PDF: 'https://edtechbooks.s3.us-west-2.amazonaws.com/pdfs/2551/25409.pdf' }
    },
    {
      id: 'asee25-mental-health', short: "ASEE '25", year: 2025,
      title: 'WIP: Exploring the Mental Health Challenges of Asian LGBTQIA+ Students in Engineering',
      authors: ['Wanpeng Xu', 'Nadia N. Kellam'],
      venue: '2025 ASEE Annual Conference & Exposition',
      links: { Paper: 'https://peer.asee.org/wip-exploring-the-mental-health-challenges-of-asian-lgbtqia-students-in-engineering', DOI: 'https://doi.org/10.18260/1-2--57413' }
    }
  ],

  // Short teaching statement shown above the course list. <strong>/<em>/<a> allowed. Leave `text` empty to hide.
  teachingStatement: {
    quote: 'You All Belong Here.',
    text: [
      'This is the first slide I show on the first day of FSE 100. Whether that message is present shapes the atmosphere of a class, and I want first-year engineering students to begin their journey believing that engineering is built on kindness and support.',
      'Harshness and micromanagement are passed down. Many people never received enough kindness while learning or working; instead they kept hearing “your math is not good enough” or “you do not belong here,” and came to believe that harshness is simply part of engineering. As an instructor, I try to break that cycle by giving young engineers respect and support from the very beginning, so that as they grow they choose to pass kindness on.'
    ]
  },

  // { term, number, title, role, description }
  courses: [
    { term: 'Fall 2026', number: 'ASU 101-EGR', title: 'The ASU Experience', role: 'Instructor' },
    { term: 'Fall 2025', number: 'FSE 100', title: 'Introduction to Engineering', role: 'Instructor' }
  ],

  // date: 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'. `description` is optional.
  talks: [
    {
      date: '2026-06-24',
      title: 'Perspectives from Individuals with ADHD in Engineering: A Journey Across Student, Faculty & Industry',
      event: 'ASEE Annual Conference 2026, Charlotte, NC',
      type: 'Panel organizer',
      description: 'Students, faculty, and industry professionals share their experiences of living and working with ADHD in engineering: late diagnosis, challenges and strengths, and how to build more inclusive classrooms and workplaces.',
      links: {}
    },
    {
      date: '2026-03',
      title: 'Instructional Agents: Reducing Teaching Faculty Workload through Multi-Agent Instructional Design',
      event: 'EACL 2026, Rabat, Morocco',
      type: 'Oral presentation',
      links: { Recording: 'https://underline.io/lecture/147149-instructional-agents-reducing-teaching-faculty-workload-through-multi-agent-instructional-design' }
    },
    {
      date: '2025-06-24',
      title: 'Asian Queer Experiences in Engineering: Intersectionality, Inclusion, and Institutional Change',
      event: 'ASEE Annual Conference 2025, Montreal',
      type: 'Panel organizer',
      description: 'The first panel in engineering education to center the voices of Asian LGBTQIA+ individuals: lived experiences in engineering spaces, racial, cultural, and queer invisibility, the “model minority” stereotype, and visions for community and institutional change.',
      links: {}
    },
    {
      date: '2024',
      title: 'Bridging the Gap: Communicating with Individuals of Varied Data Proficiency',
      event: 'ASU Data Conference, ASU Enterprise Technology',
      type: 'Conference talk',
      links: { Video: 'https://www.youtube.com/watch?v=-umcX_BTFNI&list=PLXW4bzMu4rtFiSTLRlkNCO6cXiWjRb4dX&index=12' }
    }
  ],

  awards: [
    { year: 2026, title: 'Research Advancement Award', organization: 'Arizona State University' },
    { year: 2026, title: 'Graduate Student Government (GSG) Travel Grant', organization: 'Arizona State University' },
    { year: 2026, title: 'Fulton Schools Experiential Learning Grant', organization: 'Arizona State University' },
    { year: 2026, title: 'Graduate College Travel Award', organization: 'Arizona State University' },
    { year: 2026, title: 'TPS PhD Travel Grant', organization: 'Arizona State University' },
    { year: 2025, title: 'Graduate Student Government (GSG) Travel Grant', organization: 'Arizona State University' },
    { year: 2025, title: 'Fulton Schools Experiential Learning Grant', organization: 'Arizona State University' },
    { year: 2025, title: 'Graduate College Travel Award', organization: 'Arizona State University' },
    { year: 2023, title: 'DEI Innovative Leadership Award', organization: 'Fordham University' },
    { year: 2022, title: "Dean's Scholarship", organization: 'Fordham University' }
  ]
};
