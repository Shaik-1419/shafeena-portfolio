
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail, ArrowUpRight,
  Download, Code2, ChevronDown
} from "lucide-react";
import "./App.css";

const skills = [
  "Java",
  "Python",
  "Data Structures & Algorithms",
  "System Design",
  "Google Cloud & AI",
  "JavaScript",
  "React.js",
  "HTML5",
  "CSS3",
  "Node.js",
  "SQL",
  "MongoDB",
  "ServiceNow",
  "Git & GitHub"
];


const projects = [
  {
    title: "Airport Facility Maintenance Reporting System",
    category: "SERVICENOW",
    description:
      "Built a ServiceNow-based system to streamline airport maintenance issue reporting and tracking. Configured Incident Management, Service Catalog, Flow Designer, Assignment Rules, email notifications, reports and dashboards.",
    technologies: ["Incident Management", "Flow Designer", "Service Catalog"]
  },
  {
    title: "Enterprise IT Asset & Service Request Management System",
    category: "SERVICENOW",
    description:
      "Developed an enterprise IT asset and service request management system using ServiceNow. Configured CMDB, Service Catalog, automated approval workflows, Business Rules, Client Scripts, UI Policies, Notifications and interactive dashboards.",
      technologies: ["CMDB", "Business Rules", "Service Catalog"]
  },
  {
    title: "Advanced Quiz Management System",
    category: "JAVA DEVELOPMENT",
    description:
      "Engineered a Java-based quiz management application with separate Admin and User modules. Implemented category-based quiz creation, secure login, automated score evaluation, OOP, file handling, CSV data storage and exception handling.",
      technologies: ["Java", "OOP", "File Handling"],
      docsUrl: "https://github.com/Shaik-1419/Advanced-Quiz-Management-System#readme",
      images: [
    "/images/login.png",
    "/images/admin-dashboard.png",
    "/images/student-dashboard.png"
  ]
  },
  {
    title: "InsightIQ – Business Analytics Dashboard",
    category: "DATA ANALYTICS",
    description:
      "Built an interactive dashboard to analyze ATM maintenance tickets, monitor resolution status, track technician performance, and visualize ticket trends. Supports CSV and Excel uploads, category filters, and report exports.",
      technologies: ["React",
    "JavaScript",
    "Recharts",
    "PapaParse",
    "XLSX"],
    docsUrl: "https://github.com/Shaik-1419/insightiq-business-analytics",
    liveUrl: "https://insightiq-business-analytics.vercel.app",
    images: [
      "/images/insightiq-dashboard.png"
    ]
  }
];


function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">SB<span>.</span></a>

        <div className="nav-links">
          {["Home", "About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">
          <Mail size={17} /> Let's Talk
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">

          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="green-dot" />
            Available for Opportunities
          </motion.div>

          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Shaik Shafeena
            <span className="gradient-text"> Banu.</span>
          </motion.h1>

          <motion.h2
            className="role"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Aspiring Software Engineer <span>|</span> IT Graduate
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I build responsive, interactive and user-friendly
            digital experiences with a passion for clean design,
            creative development and real-world impact.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="primary-btn">
              Explore My Work <ArrowUpRight size={19} />
            </a>

            <a
              href="/ShaikShafeenabanu_resume.pdf"
              download="ShaikShafeenabanu_resume.pdf"
              className="outline-btn"
            >
            <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            
            
            <a href="mailto:skshafeenabanu@gmail.com" aria-label="Email">
              <Mail />
            </a>
            <a
              href="https://github.com/Shaik-1419"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Code2 />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shafeena-banu-shaik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span className="linkedin-mark">in</span>
            </a>
          </motion.div>
          
        </div>

        {/* AVATAR AREA */}
        <motion.div
          className="avatar-area"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="glow-orb" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <motion.img
  src="/hero-avatar.png"
  alt="3D avatar of Shafeena wearing a purple hijab"
  className="avatar"
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
/>

          <motion.div
            className="tech-float react-float"
            animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ⚛️
            <span>React</span>
          </motion.div>

          <motion.div
            className="tech-float js-float"
            animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            JS
            <span>JavaScript</span>
          </motion.div>

          <motion.div
            className="tech-float html-float"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            HTML5
          </motion.div>

          <motion.div
            className="tech-float css-float"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            CSS3
          </motion.div>

          <motion.div
            className="tech-float java-float"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ☕
            <span>Java</span>
          </motion.div>
          <motion.div
  className="tech-float python-float"
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 4.5, repeat: Infinity }}
>
  🐍
  <span>Python</span>
</motion.div>
        </motion.div>

        <a href="#about" className="scroll-indicator">
          <span className="mouse-icon" />
          Scroll to explore
          <ChevronDown size={18} />
        </a>
      </section>

      {/* ABOUT */}
      
{/* ABOUT SECTION */}
<section className="section about" id="about">
  <div className="about-container">

    <motion.div
      className="about-content"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="section-tag">01 — ABOUT ME</p>

      <h2>
        More than just
        <br />
        <span className="gradient-text">a coder.</span>
      </h2>

      <p className="about-description">
        I'm Shaik Shafeena Banu, an Information Technology
        graduate and aspiring Software Engineer.

        I enjoy solving problems, building web applications,
        exploring Python, Java, Data Structures and Algorithms,
        and learning new technologies.

        I believe in continuous learning, creative thinking,
        and turning ideas into meaningful digital experiences.
      </p>

      <div className="about-tags">
        <span>💻 Software Engineering</span>
        <span>🐍 Python</span>
        <span>⚡ DSA</span>
        <span>🌐 Web Development</span>
      </div>

      <div className="about-highlight">
        <span className="highlight-dot"></span>
        Always learning. Always building.
      </div>
    </motion.div>

    <motion.div
      className="about-visual"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="avatar-glow"></div>

      <div className="avatar-frame">
        <img
          src="/about-avatar.png.png"
          alt="Shafeena coding avatar"
          className="about-avatar"
        />
      </div>

      <div className="floating-tech tech-one">⚛ React.js</div>
      <div className="floating-tech tech-two">☕ Java</div>
      <div className="floating-tech tech-three">🐍 Python</div>
      <div className="floating-tech tech-four">✦ ServiceNow</div>
      <div className="floating-tech tech-five">⚡ DSA</div>
      <div className="floating-tech tech-six">☁️ Google Cloud</div>
    </motion.div>

  </div>
</section>


      {/* SKILLS */}
      <section className="section skills" id="skills">
        <p className="section-tag">02 — MY EXPERTISE</p>
        <h2>
          My tech universe<span className="gradient-text">.</span>
        </h2>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -7, scale: 1.04 }}
            >
              <Code2 size={20} />
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects" id="projects">
        <p className="section-tag">03 — SELECTED WORK</p>
        <h2>
          Things I've <span className="gradient-text">built.</span>
        </h2>

        {/*<div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -9 }}
            >
              <span className="project-number">
                0{index + 1}
              </span>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-arrow">
                <ArrowUpRight />
              </span>
            </motion.article>
          ))}
        </div>*/}
        <div className="project-grid">
  {projects.map((project, index) => (
    <motion.article
      className="project-card"
      key={project.title}
      onClick={() => {
  setCurrentImageIndex(0);
  setSelectedProject(project);
}}
      style={{ cursor: "pointer" }}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      whileHover={{ y: -9 }}
    >
      <span className="project-number">
        0{index + 1}
      </span>

      <p className="project-category">
        {project.category}
      </p>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tech">
        {(project.technologies || []).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <span className="project-arrow">
        <ArrowUpRight />
      </span>
    </motion.article>
  ))}
</div>
{selectedProject && (
  <div
    className="project-modal-overlay"
    onClick={() => setSelectedProject(null)}
  >
    <motion.div
      className="project-modal"
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="modal-close"
        onClick={() => setSelectedProject(null)}
      >
        ×
      </button>

      <p className="project-category">
        {selectedProject.category}
      </p>

      <h2>{selectedProject.title}</h2>

      <p>{selectedProject.description}</p>

      {selectedProject.images ? (
  <div
    className="project-carousel"
    style={{
      position: "relative",
      width: "100%",
      margin: "25px 0",
      borderRadius: "16px",
      overflow: "hidden",
      background: "#111827",
      padding: "15px"
    }}
  >
    <img
      src={selectedProject.images[currentImageIndex]}
      alt={`Project screenshot ${currentImageIndex + 1}`}
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "400px",
        objectFit: "contain",
        display: "block",
        borderRadius: "10px"
      }}
    />

    <button
      onClick={() =>
        setCurrentImageIndex((prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
        )
      }
      style={{
        position: "absolute",
        left: "22px",
        top: "50%",
        transform: "translateY(-50%)",
        border: "none",
        borderRadius: "50%",
        width: "38px",
        height: "38px",
        cursor: "pointer",
        fontSize: "22px",
        background: "rgba(255,255,255,0.9)",
        color: "#111"
      }}
    >
      ‹
    </button>

    <button
      onClick={() =>
        setCurrentImageIndex((prev) =>
          (prev + 1) % selectedProject.images.length
        )
      }
      style={{
        position: "absolute",
        right: "22px",
        top: "50%",
        transform: "translateY(-50%)",
        border: "none",
        borderRadius: "50%",
        width: "38px",
        height: "38px",
        cursor: "pointer",
        fontSize: "22px",
        background: "rgba(255,255,255,0.9)",
        color: "#111"
      }}
    >
      ›
    </button>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "15px"
      }}
    >
      {selectedProject.images.map((image, index) => (
        <button
          key={image}
          onClick={() => setCurrentImageIndex(index)}
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            border: "none",
            padding: 0,
            cursor: "pointer",
            background:
              currentImageIndex === index ? "#8b5cf6" : "#777"
          }}
        />
      ))}
    </div>

    <p style={{ textAlign: "center", marginTop: "8px" }}>
      {currentImageIndex + 1} / {selectedProject.images.length}
    </p>
  </div>
) : (
  <div className="modal-preview">
    <span>PROJECT PREVIEW</span>
    <h3>Application Interface</h3>
    <p>Project screenshots will appear here.</p>
  </div>
)}

      <div className="project-tech">
        {(selectedProject.technologies || []).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="modal-buttons">
        <a
          href={selectedProject.liveUrl || undefined}
          target="_blank"
          rel="noreferrer"
          className={`modal-btn ${!selectedProject.liveUrl ? "disabled" : ""}`}
          onClick={(e) => {
            if (!selectedProject.liveUrl) e.preventDefault();
          }}
        >
          Live Project ↗
        </a>

        <a
          href={selectedProject.docsUrl || undefined}
          target="_blank"
          rel="noreferrer"
          className={`modal-btn docs-btn ${!selectedProject.docsUrl ? "disabled" : ""}`}
          onClick={(e) => {
            if (!selectedProject.docsUrl) e.preventDefault();
          }}
        >
          Documentation ↗
        </a>
      </div>
    </motion.div>
  </div>
)}
      </section>

      {/* CERTIFICATIONS */}
      <section className="section certifications" id="certifications">
        <p className="section-tag">04 — ACHIEVEMENTS</p>
        <h2>
          Always learning.
          <span className="gradient-text"> Always growing.</span>
        </h2>

        <div className="cert-list">
          <div>✦ ServiceNow Certified System Administrator (CSA)</div>
          <div>✦ ServiceNow Certified Application Developer (CAD)</div>
          <div>✦ ServiceNow AI Associate</div>
          <div>✦ Google Cloud learning and Data Analytics certificates</div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <p className="section-tag">05 — GET IN TOUCH</p>
        <h2>
          Let's create something
          <br />
          <span className="gradient-text">amazing together.</span>
        </h2>
        <p>Have an opportunity or an interesting idea? Let's connect.</p>
        <a href="mailto:skshafeenabanu@gmail.com" className="primary-btn">
          Say Hello <Mail size={18} />
        </a>
      </section>

      <footer>
        <a href="#home" className="logo">SB<span>.</span></a>
        <p>Designed & built by Shaik Shafeena Banu · © 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
