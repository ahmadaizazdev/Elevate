/* ================================================================
   STATE
   ================================================================ */
const State = {
    docType: null,
    template: 'classic',
    title: '',
    sections: [],
    activeSectionId: null,
    marginPreset: 'normal',
    spacingPreset: 'normal',
};

/* ================================================================
   SECTION DEFINITIONS
   ================================================================ */
const SECTION_DEFS = {
    cv: [
        { type: 'header', title: 'Personal Information', icon: 'user', removable: false, default: true,
            body: `<p contenteditable="true" class="cv-name">Your Name</p>
                 <p contenteditable="true" class="cv-role">Position / Title</p>
                 <div contenteditable="true" class="cv-contact">
                   <span>email@example.com</span> · <span>+1 (555) 123-4567</span> · <span>City, Country</span> · <span>linkedin.com/in/yourname</span>
                 </div>` },
        { type: 'summary', title: 'Research Summary', icon: 'file', removable: true,
            body: `<div contenteditable="true" class="sec-body"><p>Brief 3–5 line summary of your research focus, expertise, and academic interests.</p></div>` },
        { type: 'education', title: 'Education', icon: 'graduation', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>Ph.D. in Field of Study</strong> — University Name <span class="item-meta">(2018 – 2023)</span></p>
                   <p class="item-meta">Thesis: Title of dissertation. Advisor: Prof. Name.</p>
                   <p><strong>M.Sc. in Field of Study</strong> — University Name <span class="item-meta">(2016 – 2018)</span></p>
                 </div>` },
        { type: 'research', title: 'Research Experience', icon: 'flask', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>Senior Research Scientist</strong> — Institute / Lab <span class="item-meta">(2023 – Present)</span></p>
                   <ul>
                     <li>Lead a team of 5 researchers focused on X, Y, Z.</li>
                     <li>Published 8 peer-reviewed papers in top venues.</li>
                     <li>Secured $1.2M in grant funding.</li>
                   </ul>
                 </div>` },
        { type: 'publications', title: 'Publications', icon: 'book', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>Author, A.</strong> (2024). "Title of paper." <em>Journal Name</em>, 12(3), 100–115.</p>
                   <p><strong>Author, A.</strong>, & Co-Author, B. (2023). "Another paper." <em>Conference</em>, 45–60.</p>
                 </div>` },
        { type: 'grants', title: 'Grants & Fellowships', icon: 'award', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>NSF Graduate Research Fellowship</strong> — $138,000 <span class="item-meta">(2020 – 2023)</span></p>
                   <p><strong>XYZ Foundation Grant</strong> — $50,000 <span class="item-meta">(2022)</span></p>
                 </div>` },
        { type: 'teaching', title: 'Teaching Experience', icon: 'teach', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>Instructor</strong> — Course Title, University <span class="item-meta">(Spring 2023)</span></p>
                   <p><strong>Teaching Assistant</strong> — Course Title, University <span class="item-meta">(2020 – 2022)</span></p>
                 </div>` },
        { type: 'conferences', title: 'Conferences & Talks', icon: 'mic', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>Invited Speaker</strong> — Conference Name <span class="item-meta">(2024)</span></p>
                   <p>Title of talk. Location.</p>
                 </div>` },
        { type: 'memberships', title: 'Professional Memberships', icon: 'users', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p>Member, IEEE</p>
                   <p>Member, ACM</p>
                   <p>Reviewer, Journal of XYZ</p>
                 </div>` },
        { type: 'skills', title: 'Technical Skills', icon: 'tool', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>Methods:</strong> PCR, Western blot, microscopy, single-cell sequencing</p>
                   <p><strong>Software:</strong> R, Python, MATLAB, LaTeX</p>
                 </div>` },
        { type: 'languages', title: 'Languages', icon: 'globe', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p>English (Native), Spanish (Fluent), German (Conversational)</p>
                 </div>` },
        { type: 'references', title: 'References', icon: 'contact', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p>Available upon request.</p>
                 </div>` },
    ],
    resume: [
        { type: 'header', title: 'Personal Information', icon: 'user', removable: false, default: true,
            body: `<p contenteditable="true" class="cv-name">Your Name</p>
                 <p contenteditable="true" class="cv-role">Professional Title</p>
                 <div contenteditable="true" class="cv-contact">
                   <span>email@example.com</span> · <span>+1 (555) 123-4567</span> · <span>City, Country</span> · <span>linkedin.com/in/yourname</span>
                 </div>` },
        { type: 'summary', title: 'Professional Summary', icon: 'file', removable: true,
            body: `<div contenteditable="true" class="sec-body"><p>Results-driven professional with X years of experience delivering impactful solutions. Skilled in A, B, and C with a track record of measurable outcomes.</p></div>` },
        { type: 'experience', title: 'Work Experience', icon: 'briefcase', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>Senior Role</strong> — Company Name <span class="item-meta">(2022 – Present)</span></p>
                   <ul>
                     <li>Spearheaded initiative that increased metric by 35%.</li>
                     <li>Led cross-functional team of 6 across 3 time zones.</li>
                     <li>Delivered flagship project on time and under budget.</li>
                   </ul>
                   <p><strong>Previous Role</strong> — Company Name <span class="item-meta">(2019 – 2022)</span></p>
                   <ul>
                     <li>Owned core responsibility and shipped X deliverables.</li>
                   </ul>
                 </div>` },
        { type: 'education', title: 'Education', icon: 'graduation', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>B.Sc. in Field of Study</strong> — University Name <span class="item-meta">(2015 – 2019)</span></p>
                   <p class="item-meta">GPA: 3.9/4.0 · Honors: Cum Laude · Relevant Coursework: A, B, C</p>
                 </div>` },
        { type: 'skills', title: 'Skills', icon: 'tool', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>Technical:</strong> Python, SQL, AWS, Docker, React</p>
                   <p><strong>Soft:</strong> Leadership, Communication, Stakeholder Management</p>
                 </div>` },
        { type: 'projects', title: 'Projects', icon: 'rocket', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>Project Name</strong> — Brief one-liner <span class="item-meta">(2024)</span></p>
                   <ul><li>Built X using Y, resulting in Z improvement.</li></ul>
                 </div>` },
        { type: 'certifications', title: 'Certifications', icon: 'badge', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p>AWS Certified Solutions Architect <span class="item-meta">(2024)</span></p>
                   <p>Google Analytics Certified <span class="item-meta">(2023)</span></p>
                 </div>` },
        { type: 'awards', title: 'Awards & Achievements', icon: 'trophy', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p>Employee of the Year — Company <span class="item-meta">(2023)</span></p>
                   <p>1st Place, National Hackathon <span class="item-meta">(2022)</span></p>
                 </div>` },
        { type: 'volunteer', title: 'Volunteer Experience', icon: 'heart', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p><strong>Volunteer Role</strong> — Organization <span class="item-meta">(2021 – Present)</span></p>
                   <p>Contributed 100+ hours mentoring students in STEM.</p>
                 </div>` },
        { type: 'languages', title: 'Languages', icon: 'globe', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p>English (Native), Spanish (Fluent)</p>
                 </div>` },
        { type: 'interests', title: 'Interests', icon: 'star', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p>Open-source contribution, long-distance running, amateur photography.</p>
                 </div>` },
        { type: 'references', title: 'References', icon: 'contact', removable: true,
            body: `<div contenteditable="true" class="sec-body">
                   <p>Available upon request.</p>
                 </div>` },
    ],
};

const ALL_SECTIONS = {
    cv: [
        { type: 'header', title: 'Personal Information', icon: 'user', builtin: true },
        { type: 'summary', title: 'Research Summary', icon: 'file' },
        { type: 'education', title: 'Education', icon: 'graduation' },
        { type: 'research', title: 'Research Experience', icon: 'flask' },
        { type: 'publications', title: 'Publications', icon: 'book' },
        { type: 'grants', title: 'Grants & Fellowships', icon: 'award' },
        { type: 'teaching', title: 'Teaching Experience', icon: 'teach' },
        { type: 'conferences', title: 'Conferences & Talks', icon: 'mic' },
        { type: 'memberships', title: 'Professional Memberships', icon: 'users' },
        { type: 'skills', title: 'Technical Skills', icon: 'tool' },
        { type: 'languages', title: 'Languages', icon: 'globe' },
        { type: 'awards', title: 'Awards & Honors', icon: 'trophy' },
        { type: 'service', title: 'Academic Service', icon: 'flag' },
        { type: 'mentorship', title: 'Mentorship', icon: 'heart' },
        { type: 'patents', title: 'Patents', icon: 'lock' },
        { type: 'media', title: 'Media Coverage', icon: 'image' },
        { type: 'references', title: 'References', icon: 'contact' },
        { type: 'custom', title: 'Custom Section', icon: 'plus' },
    ],
    resume: [
        { type: 'header', title: 'Personal Information', icon: 'user', builtin: true },
        { type: 'summary', title: 'Professional Summary', icon: 'file' },
        { type: 'objective', title: 'Objective', icon: 'target' },
        { type: 'experience', title: 'Work Experience', icon: 'briefcase' },
        { type: 'education', title: 'Education', icon: 'graduation' },
        { type: 'skills', title: 'Skills', icon: 'tool' },
        { type: 'projects', title: 'Projects', icon: 'rocket' },
        { type: 'certifications', title: 'Certifications', icon: 'badge' },
        { type: 'awards', title: 'Awards & Achievements', icon: 'trophy' },
        { type: 'volunteer', title: 'Volunteer Experience', icon: 'heart' },
        { type: 'languages', title: 'Languages', icon: 'globe' },
        { type: 'interests', title: 'Interests', icon: 'star' },
        { type: 'publications', title: 'Publications', icon: 'book' },
        { type: 'speaking', title: 'Speaking Engagements', icon: 'mic' },
        { type: 'affiliations', title: 'Professional Affiliations', icon: 'users' },
        { type: 'references', title: 'References', icon: 'contact' },
        { type: 'custom', title: 'Custom Section', icon: 'plus' },
    ],
};

/* ================================================================
   ICONS
   ================================================================ */
const Icons = {
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    graduation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6L4 18a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V2"/><line x1="8" y1="2" x2="16" y2="2"/><line x1="7" y1="14" x2="17" y2="14"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    teach: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M21 10v6"/><path d="M7 9v5a5 5 0 0 0 10 0V9"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l-2 6 6-2"/><path d="M18 13c0 4-6 8-6 8s-6-4-6-8a6 6 0 0 1 12 0z"/><circle cx="12" cy="11" r="2"/><path d="M9 17h6"/></svg>',
    badge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    contact: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>',
    grip: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
};

/* ================================================================
   TEMPLATES — Only Classic, Minimal, Executive
   ================================================================ */
const TEMPLATES = [
    { id: 'classic', name: 'Classic', description: 'Traditional, centered, recruiter-proof.', accent: '#14131f',
        style: 'tpl-classic' },
    { id: 'minimal', name: 'Minimal', description: 'Airy, elegant, content-first.', accent: '#14131f',
        style: 'tpl-minimal' },
    { id: 'executive', name: 'Executive', description: 'Bold, vibrant, leadership-ready.', accent: '#6c4cf1',
        style: 'tpl-executive' },
];

/* ================================================================
   UTILITIES
   ================================================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const uid = () => 's_' + Math.random().toString(36).slice(2, 9);

function toast(msg, kind = 'success') {
    const stack = $('#toastStack');
    const el = document.createElement('div');
    el.className = `toast ${kind}`;
    const iconName = kind === 'success' ? 'check' : 'flag';
    el.innerHTML = `${Icons[iconName]}<span>${msg}</span>`;
    stack.appendChild(el);
    setTimeout(() => {
        el.style.transition = 'opacity 200ms, transform 200ms';
        el.style.opacity = '0';
        el.style.transform = 'translateX(40px)';
        setTimeout(() => el.remove(), 200);
    }, 2600);
}

function showView(name) {
    $$('.view').forEach(v => v.classList.remove('active'));
    const target = $('#view-' + name);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    $$('.nav-link').forEach(n => n.classList.toggle('active', n.dataset.nav === (name === 'landing' ? 'home' : name)));
}

/* ================================================================
   THEME TOGGLE
   ================================================================ */
const themeToggle = $('#themeToggle');
const savedTheme = localStorage.getItem('elevate-theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('elevate-theme', next);
});

/* ================================================================
   LANDING — Doc Type Selection
   ================================================================ */
$$('.doc-card').forEach(card => {
    card.addEventListener('click', () => {
        State.docType = card.dataset.type;
        showView('templates');
    });
});

/* ================================================================
   TEMPLATE PICKER
   ================================================================ */
function buildTemplatePreview(tpl) {
    const headerVariant = tpl.id === 'executive' ? 'color: #6c4cf1' : '';
    const main = `
        <div>
          <div class="mini-name" style="${headerVariant}">Your Name</div>
          <div class="mini-role">Professional Title</div>
          <div class="mini-line" style="${tpl.id === 'executive' ? 'background:#6c4cf1' : ''}"></div>
          <div class="mini-section-title">Experience</div>
          <div class="mini-row"><strong>Role</strong> — Company</div>
          <div class="mini-row">Short bullet about impact.</div>
          <div class="mini-section-title">Education</div>
          <div class="mini-row"><strong>Degree</strong> — University</div>
        </div>`;
    return `<div class="mini-doc">${main}</div>`;
}

function renderTemplatesGrid(target, opts = {}) {
    target.innerHTML = TEMPLATES.map(t => `
        <div class="template-card ${State.template === t.id ? 'selected' : ''}" data-tpl="${t.id}">
          <div class="template-preview ${t.style}">
            ${buildTemplatePreview(t)}
          </div>
          <div class="template-meta">
            <h3>${t.name}</h3>
            <p>${t.description}</p>
            <div class="meta-row">
              <span class="check-pill">${Icons.check} ATS Friendly</span>
            </div>
          </div>
        </div>
      `).join('');

    target.innerHTML += `
        <div class="template-card" style="opacity: 0.7; cursor: default; border-style: dashed; pointer-events: none;">
            <div class="template-preview" style="display: flex; align-items: center; justify-content: center; background: var(--bg-soft); color: var(--ink-mute); font-size: 18px; font-weight: 700; text-align: center;">
                <span>More<br>Templates<br>Coming Soon</span>
            </div>
            <div class="template-meta">
                <h3>Stay Tuned</h3>
                <p>We're working on more professional designs.</p>
                <div class="meta-row">
                    <span class="check-pill">🚀 New features</span>
                </div>
            </div>
        </div>
    `;

    target.querySelectorAll('.template-card[data-tpl]').forEach(card => {
        card.addEventListener('click', () => {
            if (opts.fromSwitcher) {
                State.template = card.dataset.tpl;
                renderTemplatesGrid(target, opts);
                renderCanvas();
                toast('Template switched to ' + (TEMPLATES.find(t => t.id === State.template).name));
                setTimeout(() => $('#tplSwitchModal').classList.remove('active'), 350);
            } else {
                $$('.template-card[data-tpl]', target).forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                State.template = card.dataset.tpl;
                $('#tplNext').disabled = false;
            }
        });
    });
}

renderTemplatesGrid($('#templatesGrid'));

$('#tplBack').addEventListener('click', () => showView('landing'));

$('#tplNext').addEventListener('click', () => {
    initDocument();
    showView('editor');
});

/* ================================================================
   DOCUMENT INIT
   ================================================================ */
function initDocument() {
    const defs = SECTION_DEFS[State.docType];
    State.sections = defs.map(d => ({
        id: uid(),
        type: d.type,
        title: d.title,
        icon: d.icon,
        removable: d.removable !== false,
        body: d.body,
    }));
    State.activeSectionId = State.sections[0]?.id || null;
    State.title = State.docType === 'cv' ? 'Curriculum Vitae' : 'My Resume';

    $('#docTypeChip').textContent = State.docType === 'cv' ? 'CV' : 'RESUME';
    $('#docTitle').value = State.title;

    renderSidebar();
    renderCanvas();
    bindToolbar();
    bindIndentControls();
    fitCanvasToPanel();
}

/* ================================================================
   INDENTATION CONTROLS
   ================================================================ */
function bindIndentControls() {
    const canvas = document.getElementById('docCanvas');

    document.querySelectorAll('.indent-btn[data-margin]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.indent-btn[data-margin]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            State.marginPreset = btn.dataset.margin;
            canvas.classList.remove('margin-narrow', 'margin-normal', 'margin-wide');
            canvas.classList.add('margin-' + State.marginPreset);
            toast('Margin: ' + btn.textContent);
        });
    });

    document.querySelectorAll('.indent-btn[data-spacing]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.indent-btn[data-spacing]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            State.spacingPreset = btn.dataset.spacing;
            canvas.classList.remove('spacing-compact', 'spacing-normal', 'spacing-relaxed');
            canvas.classList.add('spacing-' + State.spacingPreset);
            toast('Spacing: ' + btn.textContent);
        });
    });
}

/* ================================================================
   FIT CANVAS TO PANEL
   ================================================================ */
function fitCanvasToPanel() {
    const wrap = document.querySelector('.doc-canvas-wrap');
    const canvas = document.getElementById('docCanvas');
    if (!wrap || !canvas) return;

    const wrapWidth = wrap.clientWidth - 40;
    const wrapHeight = wrap.clientHeight - 40;

    const canvasWidth = 794;
    const canvasHeight = 1123;

    const scaleX = wrapWidth / canvasWidth;
    const scaleY = wrapHeight / canvasHeight;
    const scale = Math.min(scaleX, scaleY, 1);

    canvas.style.transform = `scale(${scale})`;
    canvas.style.transformOrigin = 'center center';
}

const resizeObserver = new ResizeObserver(() => fitCanvasToPanel());
window.addEventListener('resize', fitCanvasToPanel);

/* ================================================================
   SIDEBAR
   ================================================================ */
function renderSidebar() {
    const list = $('#sectionList');
    list.innerHTML = State.sections.map(s => `
        <button class="section-item ${State.activeSectionId === s.id ? 'active' : ''}" data-id="${s.id}">
          <span class="drag-handle" title="Drag to reorder">${Icons.grip}</span>
          <span class="section-icon">${Icons[s.icon] || Icons.file}</span>
          <span class="section-name">${escapeHtml(s.title)}</span>
          ${s.removable ? `<span class="section-remove" data-remove="${s.id}" title="Remove section">${Icons.trash}</span>` : ''}
        </button>
      `).join('');

    list.querySelectorAll('.section-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.closest('[data-remove]')) return;
            State.activeSectionId = item.dataset.id;
            renderSidebar();
            scrollToActiveSection();
        });
    });

    list.querySelectorAll('[data-remove]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.remove;
            if (State.sections.length <= 1) {
                toast('At least one section is required.', 'error');
                return;
            }
            State.sections = State.sections.filter(s => s.id !== id);
            if (State.activeSectionId === id) State.activeSectionId = State.sections[0]?.id;
            renderSidebar();
            renderCanvas();
            toast('Section removed.');
        });
    });

    if (window.Sortable) {
        Sortable.create(list, {
            handle: '.drag-handle',
            animation: 180,
            ghostClass: 'sortable-ghost',
            onEnd: (evt) => {
                const moved = State.sections.splice(evt.oldIndex, 1)[0];
                State.sections.splice(evt.newIndex, 0, moved);
                renderSidebar();
                renderCanvas();
            },
        });
    }
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;',
        "'": '&#39;' } [c]));
}

function scrollToActiveSection() {
    const el = document.querySelector(`.cv-section[data-id="${State.activeSectionId}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ================================================================
   CANVAS
   ================================================================ */
function renderCanvas() {
    const canvas = $('#docCanvas');
    const templateStyle = TEMPLATES.find(t => t.id === State.template)?.style || 'tpl-classic';
    canvas.className = 'doc-canvas ' + templateStyle;
    canvas.classList.add('margin-' + State.marginPreset);
    canvas.classList.add('spacing-' + State.spacingPreset);

    const headerSection = State.sections.find(s => s.type === 'header');
    const otherSections = State.sections.filter(s => s.type !== 'header');

    let html = '';
    if (headerSection) {
        html += `<div class="cv-header">${headerSection.body}</div>`;
    }

    html += otherSections.map(renderSection).join('');

    canvas.innerHTML = html;

    // --- Add Developer Credit Footer ---
    const footer = document.createElement('div');
    footer.className = 'cv-footer';
    footer.textContent = 'Developed by Ahmad Aizaz';
    canvas.appendChild(footer);

    canvas.querySelectorAll('.cv-section').forEach(sec => {
        const id = sec.dataset.id;
        sec.addEventListener('focusin', () => {
            State.activeSectionId = id;
            renderSidebar();
        });
        const titleEl = sec.querySelector('.sec-title .sec-title-text');
        if (titleEl) {
            titleEl.addEventListener('input', () => {
                const s = State.sections.find(x => x.id === id);
                if (s) s.title = titleEl.textContent;
                const sideItem = $(`.section-item[data-id="${id}"] .section-name`);
                if (sideItem) sideItem.textContent = titleEl.textContent;
            });
        }
        const bodyEl = sec.querySelector('.sec-body');
        if (bodyEl) {
            bodyEl.addEventListener('input', () => {
                const s = State.sections.find(x => x.id === id);
                if (s) s.body = sec.innerHTML;
            });
        }
    });

    setTimeout(fitCanvasToPanel, 50);
}

function renderSection(s) {
    const focused = State.activeSectionId === s.id ? 'focused' : '';
    return `
        <div class="cv-section ${focused}" data-id="${s.id}" data-type="${s.type}">
          <div class="sec-title">
            <span class="sec-title-text" contenteditable="true">${escapeHtml(s.title)}</span>
            <span style="display:inline-flex; opacity:0.4;">
              ${Icons[s.icon] || Icons.file}
            </span>
          </div>
          <div class="sec-body" contenteditable="true">${s.body.replace(/^<div contenteditable="true" class="sec-body">|<\/div>$/g, '')}</div>
        </div>
      `;
}

/* ================================================================
   TOOLBAR
   ================================================================ */
function bindToolbar() {
    $$('.tool-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            document.execCommand(btn.dataset.cmd, false, null);
            $('#docCanvas').focus();
        };
    });
    $('#styleSelect').onchange = (e) => {
        document.execCommand('formatBlock', false, e.target.value);
        $('#docCanvas').focus();
    };
}

/* ================================================================
   ADD SECTION MODAL
   ================================================================ */
const addSectionBtn = $('#addSectionBtn');
const addSectionModal = $('#addSectionModal');
const sectionPicker = $('#sectionPicker');

function renderSectionPicker() {
    const all = ALL_SECTIONS[State.docType];
    const present = new Set(State.sections.map(s => s.type));
    sectionPicker.innerHTML = all.map(s => `
        <button class="section-pick ${present.has(s.type) && s.builtin ? 'added' : ''}" data-pick="${s.type}">
          ${Icons[s.icon] || Icons.plus}
          <span>${s.title}</span>
        </button>
      `).join('');

    sectionPicker.querySelectorAll('.section-pick').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.pick;
            const def = SECTION_DEFS[State.docType].find(d => d.type === type);
            let body = '';
            let title = btn.querySelector('span').textContent;
            if (def) {
                body = def.body;
                title = def.title;
            } else {
                body =
                    `<div contenteditable="true" class="sec-body"><p>Click here to edit this section. Add any content you need.</p></div>`;
            }
            State.sections.push({
                id: uid(),
                type,
                title,
                icon: ALL_SECTIONS[State.docType].find(a => a.type === type)?.icon || 'file',
                removable: true,
                body,
            });
            addSectionModal.classList.remove('active');
            renderSidebar();
            renderCanvas();
            toast('Section added: ' + title);
        });
    });
}

addSectionBtn.addEventListener('click', () => {
    renderSectionPicker();
    addSectionModal.classList.add('active');
});

/* ================================================================
   TEMPLATE SWITCH
   ================================================================ */
$('#tplSwap').addEventListener('click', () => {
    renderTemplatesGrid($('#tplSwitchGrid'), { fromSwitcher: true });
    $('#tplSwitchModal').classList.add('active');
});

/* ================================================================
   MODAL CLOSE
   ================================================================ */
document.addEventListener('click', (e) => {
    if (e.target.matches('[data-close]') || e.target.classList.contains('modal-backdrop')) {
        e.target.closest('.modal-backdrop')?.classList.remove('active');
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        $$('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
    }
});

/* ================================================================
   BACK HOME & NAV
   ================================================================ */
$('#backHome').addEventListener('click', () => showView('landing'));
$('#brandHome').addEventListener('click', () => showView('landing'));
$$('[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const nav = link.dataset.nav;
        if (nav === 'home') showView('landing');
        else if (nav === 'templates') {
            if (!State.docType) { showView('landing'); return; }
            showView('templates');
        } else if (nav === 'features') {
            showView('landing');
            setTimeout(() => $('#features')?.scrollIntoView({ behavior: 'smooth' }), 200);
        }
    });
});

/* ================================================================
   EXPORT PDF — DIRECT INLINE STYLES (FIXED)
   ================================================================ */
const exportModal = $('#exportModal');
let lastPdfBlob = null;
let lastPdfName = '';

function getProgressEls() {
    return {
        fill: $('#progressFill'),
        text: $('#progressText'),
        percent: $('#progressPercent'),
    };
}

function setStage(stageName, state) {
    $$('.progress-stage').forEach(s => {
        const n = s.dataset.stage;
        s.classList.remove('active', 'done');
        if (state === 'active' && n === stageName) s.classList.add('active');
        if (state === 'done') s.classList.add('done');
    });
}

function setProgress(pct, text) {
    const { fill, percent, text: textEl } = getProgressEls();
    if (fill) fill.style.width = pct + '%';
    if (percent) percent.textContent = Math.round(pct) + '%';
    if (textEl && text) textEl.textContent = text;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

$('#exportBtn').addEventListener('click', async () => {
    exportModal.classList.add('active');
    $('#exportTitle').textContent = 'Exporting PDF';
    document.querySelector('#exportFooter').style.display = 'none';

    const body = $('#exportBody');
    body.innerHTML = `
        <div class="export-progress">
            <div class="progress-track">
                <div class="progress-fill" id="progressFill"></div>
            </div>
            <div class="progress-label">
                <span id="progressText">Preparing...</span>
                <span id="progressPercent">0%</span>
            </div>
            <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 10px;">
                <div class="progress-stage active" data-stage="prepare">
                    <span class="stage-dot"></span>
                    <span>Preparing document</span>
                </div>
                <div class="progress-stage" data-stage="render">
                    <span class="stage-dot"></span>
                    <span>Rendering pages</span>
                </div>
                <div class="progress-stage" data-stage="compile">
                    <span class="stage-dot"></span>
                    <span>Compiling PDF</span>
                </div>
                <div class="progress-stage" data-stage="finalize">
                    <span class="stage-dot"></span>
                    <span>Finalizing</span>
                </div>
            </div>
        </div>`;

    try {
        const canvasEl = document.getElementById('docCanvas');

        // Remove highlight
        const focusedEl = canvasEl.querySelector('.cv-section.focused');
        if (focusedEl) focusedEl.classList.remove('focused');

        // --- Apply margin and spacing as DIRECT INLINE STYLES ---
        const marginMap = { narrow: '0.3in', normal: '0.5in', wide: '0.8in' };
        const spacingMap = { compact: '14px', normal: '20px', relaxed: '28px' };
        const paraMap = { compact: '4px', normal: '6px', relaxed: '10px' };

        const marginVal = marginMap[State.marginPreset] || '0.5in';
        const spacingVal = spacingMap[State.spacingPreset] || '20px';
        const paraVal = paraMap[State.spacingPreset] || '6px';

        // Store original styles to restore later
        const origPadding = canvasEl.style.padding;
        const origTransform = canvasEl.style.transform;
        const origOverflow = canvasEl.style.overflow;
        const origHeight = canvasEl.style.height;
        const origBoxShadow = canvasEl.style.boxShadow;
        const origBorder = canvasEl.style.border;

        // 1. Apply padding to canvas
        canvasEl.style.padding = `${marginVal} ${marginVal} ${marginVal} ${marginVal}`;

        // 2. Apply section spacing as inline margin-bottom on each .cv-section
        const sections = canvasEl.querySelectorAll('.cv-section');
        const originalSectionMargins = [];
        sections.forEach((sec, i) => {
            originalSectionMargins[i] = sec.style.marginBottom;
            sec.style.marginBottom = spacingVal;
        });

        // 3. Apply paragraph spacing as inline margin-bottom on each p inside .sec-body
        const paragraphs = canvasEl.querySelectorAll('.sec-body p');
        const originalParaMargins = [];
        paragraphs.forEach((p, i) => {
            originalParaMargins[i] = p.style.marginBottom;
            p.style.marginBottom = paraVal;
        });

        // Also handle .sec-body p specifically for bullet lists
        const listItems = canvasEl.querySelectorAll('.sec-body li');
        const originalListMargins = [];
        listItems.forEach((li, i) => {
            originalListMargins[i] = li.style.marginBottom;
            li.style.marginBottom = paraVal;
        });

        // Remove border and shadow for clean export
        canvasEl.style.border = 'none';
        canvasEl.style.boxShadow = 'none';
        canvasEl.style.transform = 'none';
        canvasEl.style.overflow = 'visible';
        canvasEl.style.height = 'auto';

        // Force reflow
        canvasEl.offsetHeight;

        setProgress(15, 'Validating content...');
        setStage('prepare', 'done');
        setStage('render', 'active');
        await sleep(400);

        for (let p = 30; p <= 70; p += 5) {
            await sleep(60);
            setProgress(p, 'Rendering pages...');
        }
        setStage('render', 'done');
        setStage('compile', 'active');
        await sleep(300);
        setProgress(80, 'Compiling PDF...');
        await sleep(400);

        const filename = (State.title || 'document').replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '_') + '.pdf';

        const opt = {
            margin: [0.4, 0.4, 0.4, 0.4],
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                width: 794,
                height: canvasEl.scrollHeight,
                windowHeight: canvasEl.scrollHeight,
            },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        };

        setStage('compile', 'done');
        setStage('finalize', 'active');
        setProgress(90, 'Finalizing...');

        const pdfBlob = await html2pdf().set(opt).from(canvasEl).outputPdf('blob');

        // --- Restore all original styles ---
        canvasEl.style.padding = origPadding || '';
        canvasEl.style.border = origBorder || 'none';
        canvasEl.style.boxShadow = origBoxShadow || '0 8px 30px rgba(0,0,0,0.10)';
        canvasEl.style.transform = origTransform || '';
        canvasEl.style.overflow = origOverflow || '';
        canvasEl.style.height = origHeight || '1123px';

        // Restore section margins
        sections.forEach((sec, i) => {
            sec.style.marginBottom = originalSectionMargins[i] || '';
        });

        // Restore paragraph margins
        paragraphs.forEach((p, i) => {
            p.style.marginBottom = originalParaMargins[i] || '';
        });

        // Restore list item margins
        listItems.forEach((li, i) => {
            li.style.marginBottom = originalListMargins[i] || '';
        });

        if (focusedEl) focusedEl.classList.add('focused');

        setProgress(100, 'Done!');
        setStage('finalize', 'done');

        lastPdfBlob = pdfBlob;
        lastPdfName = filename;

        const url = URL.createObjectURL(lastPdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = lastPdfName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);

       $('#exportBody').innerHTML = `
    <div class="export-complete">
        <div class="success-icon">${Icons.check}</div>
        <h4>Export complete</h4>
        <p>Your ${State.docType === 'cv' ? 'CV' : 'Resume'} has been saved as <b>${escapeHtml(lastPdfName)}</b>.</p>
        <p style="margin-top: 16px; font-size: 13px; color: #999; border-top: 1px solid #eee; padding-top: 14px;">
            Developed by <strong>Ahmad Aizaz</strong>
        </p>
    </div>`;
    } catch (err) {
        console.error(err);
        // Restore styles on error
        const canvasEl = document.getElementById('docCanvas');
        if (canvasEl) {
            canvasEl.style.padding = '';
            canvasEl.style.border = 'none';
            canvasEl.style.boxShadow = '0 8px 30px rgba(0,0,0,0.10)';
            canvasEl.style.transform = '';
            canvasEl.style.overflow = '';
            canvasEl.style.height = '1123px';
            // Reset all inline margins
            canvasEl.querySelectorAll('.cv-section').forEach(el => el.style.marginBottom = '');
            canvasEl.querySelectorAll('.sec-body p').forEach(el => el.style.marginBottom = '');
            canvasEl.querySelectorAll('.sec-body li').forEach(el => el.style.marginBottom = '');
            const focusedEl = canvasEl.querySelector('.cv-section.focused');
            if (focusedEl) focusedEl.classList.add('focused');
        }
        $('#exportBody').innerHTML = `
            <div class="export-complete">
                <div class="success-icon" style="background: var(--accent);">${Icons.flag}</div>
                <h4>Export failed</h4>
                <p>${escapeHtml(err.message || 'Unknown error')}</p>
            </div>`;
        document.querySelector('#exportFooter').style.display = 'flex';
        toast('Export failed.', 'error');
    }
});

$('#exportClose').addEventListener('click', () => exportModal.classList.remove('active'));
$('#exportCloseBtn').addEventListener('click', () => exportModal.classList.remove('active'));
$('#exportDownload').addEventListener('click', () => {
    if (!lastPdfBlob) { toast('Please export again.', 'error'); return; }
    const url = URL.createObjectURL(lastPdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = lastPdfName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast('Download started.');
});

/* ================================================================
   TITLE
   ================================================================ */
$('#docTitle').addEventListener('input', (e) => {
    State.title = e.target.value;
});

/* ================================================================
   KEYBOARD SHORTCUTS
   ================================================================ */
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 's') {
            e.preventDefault();
            localStorage.setItem('elevate-doc', JSON.stringify({ ...State }));
            toast('Draft saved locally.');
        }
        if (e.key === 'e') {
            e.preventDefault();
            $('#exportBtn').click();
        }
    }
});

/* ================================================================
   INIT
   ================================================================ */
if (State.title) $('#docTitle').value = State.title;

window.addEventListener('load', () => {
    setTimeout(fitCanvasToPanel, 200);
});