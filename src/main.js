import { professionalHighlights, learningCertificates } from './data/achievements.js';

const skills = {
  'Automation': ['Robot Framework','Python','RPA','Selenium','SeleniumLibrary'],
  'API & Data': ['SQL','MySQL','Web scraping'],
  'Cloud / DevOps': ['AWS','Git','GitHub','CI/CD'],
  'Python Ecosystem': ['pandas','SQLAlchemy','PyPDF2','pdf2image','pytesseract','openpyxl']
};
const projects = [
  {title:'Healthcare Process Automation', status:'Professional', type:'professional', desc:'Generalized enterprise healthcare workflows automated with browser automation, Python and Robot Framework.', tags:['Robot Framework','Python','Selenium','MySQL','AWS'], details:'[Company] · [Project Duration] · [Business Impact] · [Specific Achievement]'},
  {title:'Eligibility Automation', status:'Professional', type:'professional', desc:'Healthcare eligibility-related workflow automation involving browser interaction, validation and data processing.', tags:['Robot Framework','Python','Selenium','SQL'], details:'Implementation details are intentionally generalized.'},
  {title:'Healthcare Document Automation', status:'Professional', type:'professional', desc:'Document workflows covering PDF processing, structured data extraction, OCR when required and validation.', tags:['Python','PyPDF2','pdf2image','pytesseract','pandas'], details:'[Implementation details]'},
  {title:'Referral Workflow Automation', status:'Professional', type:'professional', desc:'Automation for generalized referral download, processing and sending workflows.', tags:['Robot Framework','Python','Selenium','File Automation'], details:'No business metrics or confidential details are published.'},
  {title:'Automation Framework Development', status:'Professional', type:'professional', desc:'Reusable utilities, common keywords, logging, error handling and data/browser automation components.', tags:['Python','Robot Framework','Selenium','MySQL','AWS'], details:'A core professional engineering focus.'},
  {title:'Python + Playwright Automation Framework', status:'In Development', type:'development', desc:'A reusable layered framework separating automation actions, business flows, locators and test orchestration.', tags:['Python','Playwright','Pytest','Git','GitHub'], details:'Tests → Feature / Business Flow Layer → Page Locator Layer → Common Automation Layer → Playwright → Browser. [GitHub Repository] · [Screenshots] · [Demo]'}
];
const notes = ['Playwright Automation Framework','API Automation with Python'];
const journey = [
  ['Robot Framework / RPA','professional'],['Python','professional'],['Playwright','current'],['Pytest','current'],['API Automation','current'],['Generative AI','current'],['RAG','current'],['Vector Databases','current'],['LangChain / LangGraph','current'],['AI Agents','future'],['Agentic Automation','future'],['Docker / CI/CD','future'],['AWS','professional']
];
document.querySelector('#skills-grid').innerHTML = Object.entries(skills).map(([group, values]) => `<article class="skill-group"><h3>${group}</h3><div>${values.map(x => `<span>${x}</span>`).join('')}</div></article>`).join('');
function renderProjects(filter='all') { document.querySelector('#project-grid').innerHTML = projects.filter(p => filter === 'all' || p.type === filter).map((p,i) => `<article class="project-card ${p.type}"><div class="card-top"><span class="status ${p.type}"><i></i>${p.status}</span><span class="project-num">${String(i+1).padStart(2,'0')}</span></div><h3>${p.title}</h3><p>${p.desc}</p>${p.type === 'professional' ? '<p class="confidential-note">Confidential healthcare work — details generalized to protect patient, client, and employer information.</p>' : ''}<div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>${p.type === 'development' ? `<button class="text-link project-open" data-title="${p.title}">View project <span>→</span></button>` : ''}</article>`).join(''); }
renderProjects();
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => { document.querySelector('.filter.active').classList.remove('active'); btn.classList.add('active'); renderProjects(btn.dataset.filter); }));
document.querySelector('#notes').innerHTML = notes.map((n,i) => `<article class="note"><span>0${i+1} / Drafting</span><h3>${n}</h3><p>Technical note coming soon.</p><a href="#contact" aria-label="${n} coming soon">Read when published <b>→</b></a></article>`).join('');
document.querySelector('#professional-highlights').innerHTML = professionalHighlights.map((item, i) => `<article class="highlight-card"><span>0${i + 1} / ${item.category}</span><h3>${item.title}</h3><p>${item.description}</p></article>`).join('');
document.querySelector('#learning-certificates').innerHTML = learningCertificates.map(item => `<article class="certificate-card"><div><span class="cert-status">${item.status}</span><h3>${item.title}</h3></div><dl><div><dt>Provider</dt><dd>${item.provider}</dd></div><div><dt>Instructor / platform</dt><dd>${item.instructor}</dd></div><div><dt>Type</dt><dd>${item.type}</dd></div></dl>${item.credentialUrl ? `<a class="credential-link" href="${item.credentialUrl}" target="_blank" rel="noreferrer">View Certificate <span>↗</span></a>` : `<span class="credential-pending">Credential link pending</span>`}</article>`).join('');
document.querySelector('#journey-track').innerHTML = journey.map(([item,type],i)=>`<div class="journey-step ${type}"><span>${String(i+1).padStart(2,'0')}</span><i></i><strong>${item}</strong></div>`).join('');
const dialog = document.createElement('dialog');
dialog.id = 'project-dialog';
dialog.innerHTML = '<button class="close-dialog" aria-label="Close project details">×</button><div id="dialog-content"></div>';
document.body.append(dialog);
document.addEventListener('click', e => {
  const trigger = e.target.closest('.project-open');
  if (trigger) {
    const p = projects.find(x => x.title === trigger.dataset.title);
    document.querySelector('#dialog-content').innerHTML = `<p class="eyebrow">${p.status}</p><h2>${p.title}</h2><p class="dialog-desc">${p.desc}</p><div class="detail-grid"><div><h3>Technology stack</h3><p>${p.tags.join(' · ')}</p></div><div><h3>Architecture / implementation</h3><p>${p.details}</p></div><div><h3>What’s next</h3><p>Screenshots, demo and source links will be added as the project develops.</p></div></div>`;
    dialog.showModal();
  }
  if (e.target.closest('.close-dialog')) dialog.close();
});
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
const toggle = document.querySelector('.theme-toggle');
const setTheme = theme => {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark', isDark);
  toggle.setAttribute('aria-pressed', String(isDark));
  toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  toggle.querySelector('span').textContent = isDark ? '☀' : '◐';
  localStorage.setItem('theme', theme);
};
setTheme(localStorage.getItem('theme') || 'light');
toggle.addEventListener('click', () => setTheme(document.body.classList.contains('dark') ? 'light' : 'dark'));
const menu=document.querySelector('.menu-toggle'), links=document.querySelector('.nav-links'); menu.addEventListener('click',()=>{const on=menu.getAttribute('aria-expanded')==='true'; menu.setAttribute('aria-expanded',!on);links.classList.toggle('open',!on)}); links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');links.classList.remove('open')}));

const scrollProgress = document.querySelector('.scroll-progress');
const updateScrollProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(100, Math.round((window.scrollY / scrollable) * 100)) : 0;
  scrollProgress.firstElementChild.style.transform = `scaleX(${progress / 100})`;
  scrollProgress.setAttribute('aria-valuenow', String(progress));
};
window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);
updateScrollProgress();

const resumePreviewToggle = document.querySelector('.resume-preview-toggle');
const resumePreview = document.querySelector('#resume-preview');
resumePreviewToggle.addEventListener('click', () => {
  const isOpen = resumePreviewToggle.getAttribute('aria-expanded') === 'true';
  resumePreviewToggle.setAttribute('aria-expanded', String(!isOpen));
  resumePreviewToggle.innerHTML = isOpen ? 'Preview resume <span aria-hidden="true">◉</span>' : 'Hide preview <span aria-hidden="true">×</span>';
  resumePreview.hidden = isOpen;
  if (!isOpen) resumePreview.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.querySelector('.resume-print').addEventListener('click', () => window.print());
document.querySelector('#contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const subject = `Portfolio enquiry from ${formData.get('name')}`;
  const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`;
  const params = `to=prakashmsd45477@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const emailApp = formData.get('emailApp');
  const webmailUrls = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&${params}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?${params}`,
    yahoo: `https://compose.mail.yahoo.com/?${params}`
  };
  if (emailApp === 'local') {
    window.location.href = `mailto:prakashmsd45477@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return;
  }
  window.open(webmailUrls[emailApp], '_blank', 'noopener,noreferrer');
});
