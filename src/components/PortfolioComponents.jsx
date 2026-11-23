import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Code2, Send } from 'lucide-react'
import { contactDetails } from '../data/portfolio'

export function SectionHeading({ eyebrow, number, title }) {
  return (
    <div className="section-heading">
      <div className="section-heading-label"><span>{number}</span><p>{eyebrow}</p></div>
      <h2>{title}</h2>
    </div>
  )
}

export function EducationCard({ item, index }) {
  const Icon = item.icon
  return (
    <motion.article
      className="timeline-card glass-card"
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div className="timeline-icon"><Icon size={21} /></div>
      <div className="timeline-content">
        <span className="timeline-status">{item.status}</span>
        <h3>{item.degree}</h3>
        <p>{item.institution}</p>
        <small>{item.detail}</small>
      </div>
      <ArrowUpRight className="timeline-arrow" size={18} />
    </motion.article>
  )
}

export function SkillCard({ group, index }) {
  const Icon = group.icon
  return (
    <motion.article
      className="skill-card glass-card"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
    >
      <div className="skill-card-heading"><span className="skill-icon"><Icon size={18} /></span><h3>{group.title}</h3></div>
      <div className="skill-tags">
        {group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
      </div>
    </motion.article>
  )
}

function ProjectArt({ project, Icon }) {
  return (
    <div className={`project-art art-${project.visual}`}>
      <div className="art-grid" />
      <div className="art-topline"><span>SHAMNA P.S / PROJECT</span><span>{project.visual.toUpperCase()}</span></div>
      <div className="art-visual">
        <div className="art-ring ring-one" />
        <div className="art-ring ring-two" />
        <div className="art-core"><Icon size={30} strokeWidth={1.4} /></div>
        <div className="art-bars"><i /><i /><i /><i /><i /></div>
        <div className="art-data-card"><span /><span /><span /></div>
      </div>
      <span className="art-index">PROJECT / 0{project.visual === 'hcpilot' ? '1' : project.visual === 'patient' ? '2' : project.visual === 'churn' ? '3' : project.visual === 'ecommerce' ? '4' : project.visual === 'dryfruits' ? '5' : '6'}</span>
      <span className="art-link-icon"><ArrowUpRight size={17} /></span>
    </div>
  )
}

export function ProjectCard({ project, index }) {
  const Icon = project.icon
  return (
    <motion.article
      className="project-card glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -5 }}
    >
      <a className="project-card-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
        <ProjectArt project={project} Icon={Icon} />
        <div className="project-details">
          <div className="project-title-row">
            <div><h3>{project.title}</h3><span>{project.subtitle}</span></div>
            <span className="project-github"><Code2 size={16} /></span>
          </div>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </a>
    </motion.article>
  )
}

export function ExperienceCard({ item, index }) {
  const Icon = item.icon
  return (
    <motion.article
      className="experience-card glass-card"
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div className="timeline-icon"><Icon size={21} /></div>
      <div className="timeline-content">
        <span className="timeline-status">INTERNSHIP</span>
        <h3>{item.role}</h3>
        <p>{item.organization}</p>
        <small>{item.description}</small>
      </div>
      <span className="experience-date">{item.dates}</span>
    </motion.article>
  )
}

export function CertificationCard({ item, index }) {
  const Icon = item.icon
  return (
    <motion.article
      className="certification-card glass-card"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <span className="certification-icon"><Icon size={20} /></span>
      <div><h3>{item.title}</h3><p>{item.provider}</p></div>
      <span className="certification-placeholder">DETAILS PENDING</span>
    </motion.article>
  )
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <form className="contact-form glass-card" onSubmit={handleSubmit}>
      <p className="form-heading">Send a message <Send size={16} /></p>
      <label htmlFor="contact-name">Your name</label>
      <input id="contact-name" name="name" type="text" placeholder="How should I address you?" required />
      <label htmlFor="contact-email">Email address</label>
      <input id="contact-email" name="email" type="email" placeholder="you@company.com" required />
      <label htmlFor="contact-message">Your message</label>
      <textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about the opportunity..." required />
      <button className="button button-primary form-submit" type="submit">
        {submitted ? 'Draft opened' : 'Create email draft'}
        {submitted ? <Check size={16} /> : <ArrowUpRight size={16} />}
      </button>
      <small className="form-note">Opens your email app with a draft addressed to {contactDetails.email}.</small>
    </form>
  )
}
