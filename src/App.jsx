import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react'
import {
  certifications,
  contactDetails,
  education,
  experience,
  projects,
  skillGroups,
} from './data/portfolio'
import {
  CertificationCard,
  ContactForm,
  EducationCard,
  ExperienceCard,
  ProjectCard,
  SectionHeading,
  SkillCard,
} from './components/PortfolioComponents'
import './App.css'

const currentYear = new Date().getFullYear()

const navItems = [
  ['About', '#about'],
  ['Education', '#education'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/codedbyshamna', icon: Code2 },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: BriefcaseBusiness },
]

const resumeText = `SHAMNA P.S
AI/ML Engineer | Data Science | Generative AI

PROFILE
MSc Applied Data Science graduate passionate about building intelligent applications, machine learning solutions and data-driven projects. Seeking AI/ML Engineer, Data Scientist and Data Analyst opportunities, particularly in the UAE.

EDUCATION
MSc Applied Data Science — SRM Institute of Science and Technology
Bachelor's degree — Details to be added

EXPERIENCE
Data Science Intern — Cognifyz Technologies
Dates and responsibilities to be added

SELECTED PROJECTS
HCPilot AI — AI-Powered HCP Interaction CRM
Patient No-Show Prediction — model comparison, fairness analysis and explainable AI
Customer Churn Prediction using Machine Learning
E-Commerce Purchasing Tendency Application
Dry Fruits Sales Dashboard
Cookware Sales Dashboard

SKILLS
Programming: Python, C++, SQL
Data Analysis: Pandas, NumPy, Matplotlib, Seaborn
Machine Learning: Scikit-learn, XGBoost, Machine Learning, Model Evaluation
AI: Generative AI, LLMs, LangGraph, RAG
Tools: Git, GitHub, VS Code, Google Colab
Data Visualization: Power BI

CONTACT
Email: ${contactDetails.email}
Phone: ${contactDetails.phone}
GitHub: https://github.com/codedbyshamna
LinkedIn: https://www.linkedin.com/
`

function downloadResume() {
  const file = new Blob([resumeText], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(file)
  const link = document.createElement('a')
  link.href = url
  link.download = 'Shamna-PS-Resume.txt'
  document.body.append(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function NetworkVisual() {
  const reduceMotion = useReducedMotion()
  const nodes = [
    { className: 'node-a', delay: 0 },
    { className: 'node-b', delay: 0.3 },
    { className: 'node-c', delay: 0.6 },
    { className: 'node-d', delay: 0.9 },
    { className: 'node-e', delay: 1.2 },
    { className: 'node-f', delay: 1.5 },
  ]

  return (
    <div className="network-visual" aria-label="Animated machine learning network illustration">
      <div className="visual-grid" />
      <div className="visual-glow" />
      <div className="network-orbit orbit-a" />
      <div className="network-orbit orbit-b" />
      <svg className="network-lines" viewBox="0 0 520 520" fill="none" aria-hidden="true">
        <path d="M92 159 210 119 332 177 416 113M92 159 155 281 274 320 416 113M210 119 274 320 394 363 416 113M155 281 394 363" />
        <path d="m92 159 182 161M210 119l184 244" />
      </svg>
      {nodes.map(({ className, delay }) => (
        <motion.span
          key={className}
          className={`network-node ${className}`}
          animate={reduceMotion ? undefined : { opacity: [0.55, 1, 0.55], scale: [0.9, 1.12, 0.9] }}
          transition={{ duration: 3.2, repeat: Infinity, delay, ease: 'easeInOut' }}
        />
      ))}
      <div className="visual-chip chip-input"><Database size={14} /> INPUT DATA</div>
      <div className="visual-chip chip-model"><BrainCircuit size={14} /> MODEL</div>
      <div className="visual-chip chip-output"><BarChart3 size={14} /> INSIGHT</div>
      <div className="visual-status"><span /> EXPLORING INTELLIGENT SYSTEMS</div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <header className="topbar flex items-center justify-between sticky top-0">
        <a className="wordmark" href="#home" aria-label="Shamna home" onClick={closeMenu}>
          <span className="wordmark-icon">S<span>.</span></span>
          <span className="wordmark-name">SHAMNA P.S</span>
        </a>
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s connect <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero-section section-wrap mx-auto" id="home">
        <div className="hero-copy">
          <motion.div
            className="availability-pill"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="availability-dot" />
            OPEN TO OPPORTUNITIES · UAE &amp; BEYOND
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Hi, I&apos;m <span className="gradient-text">Shamna P.S</span>
            <span className="hero-headline">AI/ML Engineer <span className="headline-separator">|</span><br />
              Data Science <span className="headline-separator">|</span> Generative AI</span>
          </motion.h1>
          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            MSc Applied Data Science graduate passionate about building intelligent applications,
            machine learning solutions and data-driven projects.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <a className="button button-primary" href="#projects">View Projects <ArrowDownRight size={17} /></a>
            <a className="button button-secondary" href="#contact">Contact Me <ArrowRight size={16} /></a>
            <button type="button" className="resume-button" onClick={downloadResume}>
              <ArrowDown size={15} /> Download Resume
            </button>
          </motion.div>
          <div className="hero-socials">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                <Icon size={16} /> {label} <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </div>
        <motion.div
          className="hero-visual-wrap"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <NetworkVisual />
          <div className="floating-label label-top"><Sparkles size={14} /> BUILDING WITH CURIOSITY</div>
          <div className="floating-label label-bottom"><Code2 size={14} /> DATA → DECISIONS</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="content-section section-wrap">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" number="01" title="Curious by nature. Practical by design." />
        <motion.div
          className="about-card glass-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <div className="about-icon"><BrainCircuit size={25} /></div>
          <div className="about-body">
            <p>
              I&apos;m an MSc Applied Data Science graduate building a foundation across machine learning,
              artificial intelligence and data analysis. I enjoy taking a practical question, exploring the
              data behind it and shaping a useful application or insight from what I learn.
            </p>
            <p>
              Through academic and personal projects, I&apos;ve explored predictive modeling, explainable AI,
              generative AI concepts and data visualization. I&apos;m at the beginning of my professional
              journey, keen to keep learning and contribute thoughtfully to a collaborative team.
            </p>
          </div>
          <div className="about-focus">
            <span>AREAS OF INTEREST</span>
            <p>Applied AI · Machine Learning · Data Insights</p>
          </div>
        </motion.div>
      </section>

      <section id="education" className="content-section section-wrap">
        <SectionHeading eyebrow="LEARNING JOURNEY" number="02" title="Education" />
        <div className="timeline-list">
          {education.map((item, index) => <EducationCard key={item.degree} item={item} index={index} />)}
        </div>
      </section>

      <section id="skills" className="content-section section-wrap">
        <SectionHeading eyebrow="TOOLS IN MY TOOLKIT" number="03" title="Skills & technologies" />
        <p className="section-lead">A growing toolkit developed through coursework and hands-on projects.</p>
        <div className="skills-grid">
          {skillGroups.map((group, index) => <SkillCard key={group.title} group={group} index={index} />)}
        </div>
      </section>

      <section id="projects" className="content-section section-wrap mx-auto">
        <SectionHeading eyebrow="SELECTED WORK" number="04" title="Projects that turn ideas into practice." />
        <p className="section-lead">A selection of data, machine learning and application projects.</p>
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </section>

      <section id="experience" className="content-section section-wrap">
        <SectionHeading eyebrow="CAREER SO FAR" number="05" title="Experience" />
        <div className="timeline-list">
          {experience.map((item, index) => <ExperienceCard key={item.role} item={item} index={index} />)}
        </div>
      </section>

      <section id="certifications" className="content-section section-wrap">
        <SectionHeading eyebrow="CONTINUOUS LEARNING" number="06" title="Certifications" />
        <p className="section-lead">Certification details will be added as they are shared.</p>
        <div className="certifications-grid">
          {certifications.map((item, index) => <CertificationCard key={`${item.title}-${index}`} item={item} index={index} />)}
        </div>
      </section>

      <section id="contact" className="contact-section section-wrap mx-auto">
        <SectionHeading eyebrow="GET IN TOUCH" number="07" title="Let’s build something meaningful." />
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="contact-lead">
              I&apos;m open to AI/ML Engineer, Data Scientist and Data Analyst opportunities, particularly in the UAE.
              If you&apos;re hiring or would like to connect, I&apos;d love to hear from you.
            </p>
            <div className="contact-methods">
              <a className="contact-method" href={`mailto:${contactDetails.email}`}>
                <Mail size={17} />
                <span><small>EMAIL</small><strong>{contactDetails.email}</strong></span>
              </a>
              <a className="contact-method" href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>
                <Phone size={17} />
                <span><small>PHONE</small><strong>{contactDetails.phone}</strong></span>
              </a>
            </div>
            <div className="contact-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  <Icon size={16} /> {label} <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home" aria-label="Back to top">
          <span className="wordmark-icon">S<span>.</span></span>
          <span className="wordmark-name">SHAMNA P.S</span>
        </a>
        <div className="footer-socials">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon size={15} />
            </a>
          ))}
        </div>
        <div>© {currentYear} Shamna P.S</div>
      </footer>
    </main>
  )
}

export default App
