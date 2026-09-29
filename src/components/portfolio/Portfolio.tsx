import { useEffect, useState, type FormEvent } from "react";
import { ArrowDown, ArrowUpRight, Mail, Menu, X } from "lucide-react";
import weddingImage from "@/assets/wedding-invitation.jpg";
import nqueenImage from "@/assets/nqueen-visualizer.jpg";
import dastavezImage from "@/assets/dastavez-ai.jpg";
import { certifications, processSteps, projects, skillGroups } from "@/data/portfolio";

const navItems = ["Work", "About", "Experience", "Contact"];

function ArrowLink({ href, children, inverted = false }: { href: string; children: React.ReactNode; inverted?: boolean }) {
  return (
    <a className={inverted ? "button-link button-link-inverted" : "button-link"} href={href}>
      {children}<ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-intro reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Sakshi Deep, home">SAKSHI DEEP</a>
      <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
        {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s Talk <ArrowUpRight size={14} /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">MCA Student · Frontend Developer · UI Enthusiast</p>
        <h1>Frontend<br /><em>Developer</em></h1>
        <p className="hero-description">I build thoughtful, responsive digital experiences that turn ideas into polished interfaces.</p>
        <div className="hero-actions">
          <a className="button-link" href="#work">View My Work <ArrowDown size={16} /></a>
          <a className="text-link" href="#contact">Let&apos;s Connect <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="hero-visual" aria-label="A selection of Sakshi's interface work">
        <div className="preview preview-main"><img src={weddingImage} width={1600} height={1104} alt="Wedding invitation project preview" /></div>
        <div className="preview preview-top"><img src={nqueenImage} width={1408} height={1008} alt="N-Queen visualizer preview" /></div>
        <div className="preview preview-bottom"><img src={dastavezImage} width={1408} height={1008} alt="AI document interface preview" /></div>
      </div>
      <a className="scroll-note" href="#about">Scroll to explore <ArrowDown size={13} /></a>
    </section>
  );
}

function About() {
  const facts = [["Currently", "MCA Student"], ["Focus", "Frontend Development"], ["Building with", "React · JavaScript · HTML · CSS"], ["Exploring", "MERN Stack"]];
  return (
    <section className="section about" id="about">
      <SectionIntro eyebrow="About" title="A little about me" />
      <div className="about-grid reveal">
        <p className="editorial-statement">I enjoy turning ideas into interfaces <em>people enjoy using.</em></p>
        <div className="about-detail">
          <p>I&apos;m an MCA student and frontend developer focused on creating clean, responsive and visually polished web experiences. I care about the details that make an interface feel intuitive—from structure and typography to the final interaction.</p>
          <dl className="facts">{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-tinted">
      <SectionIntro eyebrow="Capabilities" title="Tools I work with" />
      <div className="skills-grid reveal">{skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><div className="chips">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section work" id="work">
      <SectionIntro eyebrow="Featured work" title="Selected Work" copy="A collection of interfaces, applications and digital experiences I've built." />
      <div className="project-list">{projects.map((project, index) => (
        <article className="project reveal" key={project.title}>
          <div className="project-image"><img src={project.image} width={project.imageWidth} height={project.imageHeight} loading={index === 0 ? "eager" : "lazy"} alt={project.alt} /></div>
          <div className="project-info">
            <div className="project-meta"><span>Project {project.number}</span><span>{project.category}</span></div>
            <h3>{project.title}</h3>
            {project.subtitle ? <p className="project-subtitle">{project.subtitle}</p> : null}
            <p>{project.description}</p>
            <div className="project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <div className="project-links"><a href="#contact">Live Preview <ArrowUpRight size={15} /></a><a href="#contact">View Code <ArrowUpRight size={15} /></a></div>
          </div>
        </article>
      ))}</div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-tinted" id="experience">
      <SectionIntro eyebrow="Where I've contributed" title="Experience" />
      <div className="timeline reveal">
        <div className="timeline-year">2026</div>
        <div><h3>Frontend Developer Intern</h3><p>Worked on responsive web interfaces and digital invitation templates, focusing on UI implementation, visual refinement and responsive behavior across devices.</p>
          <ul><li>Developed responsive UI sections</li><li>Refined layouts for mobile and desktop</li><li>Worked on reusable invitation templates</li><li>Improved typography, spacing and visual consistency</li><li>Implemented interactive frontend components</li></ul>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return <section className="section"><SectionIntro eyebrow="Approach" title="How I build" /><ol className="process-list reveal">{processSteps.map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol></section>;
}

function Credentials() {
  return (
    <section className="section credentials">
      <div className="education reveal"><p className="eyebrow">Education</p><h2>Master of Computer Applications</h2><p>Amity University</p></div>
      <div className="certifications reveal"><p className="eyebrow">Certifications</p>{certifications.map(([title, issuer]) => <div key={title}><h3>{title}</h3><p>{issuer}</p></div>)}</div>
    </section>
  );
}

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};
    if (!String(form.get("name") ?? "").trim()) nextErrors["name"] = "Please enter your name.";
    const email = String(form.get("email") ?? "");
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors["email"] = "Please enter a valid email address.";
    if (String(form.get("message") ?? "").trim().length < 10) nextErrors["message"] = "Please share a little more about your message.";
    setErrors(nextErrors);
    setNotice(Object.keys(nextErrors).length ? "" : "Your message is ready. Email delivery will be connected soon.");
  }
  return (
    <section className="contact" id="contact">
      <div className="contact-intro reveal"><p className="eyebrow">Start a conversation</p><h2>Let&apos;s build something <em>meaningful.</em></h2><p>Have an idea, opportunity or project in mind? I&apos;d love to hear about it.</p><a className="contact-email" href="mailto:">Email me <Mail size={18} /></a></div>
      <form className="contact-form reveal" onSubmit={submit} noValidate>
        <label>Name<input name="name" type="text" aria-invalid={Boolean(errors["name"])} aria-describedby="name-error" /><span id="name-error">{errors["name"]}</span></label>
        <label>Email<input name="email" type="email" aria-invalid={Boolean(errors["email"])} aria-describedby="email-error" /><span id="email-error">{errors["email"]}</span></label>
        <label>Message<textarea name="message" rows={4} aria-invalid={Boolean(errors["message"])} aria-describedby="message-error" /><span id="message-error">{errors["message"]}</span></label>
        <button type="submit">Send Message <ArrowUpRight size={16} /></button>
        {notice ? <p className="form-notice" role="status">{notice}</p> : null}
      </form>
    </section>
  );
}

function Footer() {
  return <footer><a className="wordmark" href="#top">SAKSHI DEEP</a><div className="footer-links"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:">Email</a></div><p>© 2026 Sakshi Deep<br />Designed &amp; developed by Sakshi.</p></footer>;
}

export function Portfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); }), { threshold: 0.1 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <><Header /><main><Hero /><About /><Skills /><Projects /><Experience /><Process /><Credentials /><Contact /></main><Footer /></>;
}