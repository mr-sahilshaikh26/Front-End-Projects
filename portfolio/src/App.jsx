import { useState, useEffect } from "react";
import "./App.css";
import SahilImage from "./assets/me-0.png";
import ManaliImage from "./assets/manali.png";
import EImage from "./assets/e-commarce.png";
import UserImage from "./assets/user-form.png";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
  FaDownload,
  FaArrowUp,
  FaCheckCircle,
  FaCopy,
  FaEye,
  FaLaptopCode,
  FaPaperPlane,
} from "react-icons/fa";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [previewProject, setPreviewProject] = useState(null);
  const [deviceView, setDeviceView] = useState("desktop");
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const [toastMessage, setToastMessage] = useState("");

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success

  // Show toast notification
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3500);
  };

  // Scroll spy & back to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);

      const sections = ["home", "about", "skills", "project", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard escape handler for preview modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPreviewProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Copy email to clipboard
  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("sahilshaikh@gmail.com");
    showToast("Email address copied to clipboard!");
  };

  // Contact form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errors.message = "Please write a message";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("sending");

    // Simulate sending message
    setTimeout(() => {
      setFormStatus("success");
      showToast("Message sent successfully!");
    }, 1000);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    });
    setFormErrors({});
    setFormStatus("idle");
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Projects data
  const projects = [
    {
      id: "manali-travel",
      title: "Manali Tourism & Travel Hub",
      badge: "Travel Landing Page",
      desc: "An immersive travel destination portal with keyframe animations, curated travel itineraries, tourist spots, weather guides, and trip planning sections.",
      tags: ["HTML5", "CSS3 Animations", "Responsive Design", "Flexbox"],
      image: ManaliImage,
      liveUrl: "/projects/manali-travel/index.html",
      githubUrl: "https://github.com/mr-sahilshaikh26",
    },
    {
      id: "e-commerce",
      title: "ShopMarket E-Commerce Store",
      badge: "E-Commerce",
      desc: "Interactive online shopping storefront featuring product catalog cards, live Add-to-Cart toast notifications, reactive cart counter, and discounts.",
      tags: ["HTML5", "CSS3", "JavaScript DOM", "Interactive Cart"],
      image: EImage,
      liveUrl: "/projects/e-commerce/index.html",
      githubUrl: "https://github.com/mr-sahilshaikh26",
    },
    {
      id: "student-form",
      title: "User Profile & Identity Manager",
      badge: "CRUD Application",
      desc: "Dynamic profile dashboard allowing users to create, preview, edit, validate, and manage user identity cards with image previews and responsive grid.",
      tags: ["JavaScript ES6", "DOM Manipulation", "Form Validation", "CSS Grid"],
      image: UserImage,
      liveUrl: "/projects/student-form/index.html",
      githubUrl: "https://github.com/mr-sahilshaikh26",
    },
  ];

  // Skills data
  const skills = [
    {
      name: "HTML5",
      category: "frontend",
      level: "Advanced",
      percent: 95,
      icon: <FaHtml5 style={{ color: "#E34F26" }} />,
      desc: "Semantic elements, SEO optimization, responsive layout structure, and web accessibility.",
    },
    {
      name: "CSS3",
      category: "frontend",
      level: "Advanced",
      percent: 90,
      icon: <FaCss3Alt style={{ color: "#1572B6" }} />,
      desc: "Flexbox, CSS Grid, keyframe animations, custom variables, and cross-browser styling.",
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      level: "Proficient",
      percent: 88,
      icon: <FaJs style={{ color: "#F7DF1E" }} />,
      desc: "Async/await, DOM manipulation, closures, fetch API, event handling, and clean modular code.",
    },
    {
      name: "React.js",
      category: "frontend",
      level: "Proficient",
      percent: 85,
      icon: <FaReact style={{ color: "#61DAFB" }} />,
      desc: "Functional components, custom Hooks, state management, Framer Motion, and component architecture.",
    },
    {
      name: "Git",
      category: "tools",
      level: "Proficient",
      percent: 85,
      icon: <FaGitAlt style={{ color: "#F05032" }} />,
      desc: "Version control, commit history, branching strategies, conflict resolution, and workflows.",
    },
    {
      name: "GitHub",
      category: "tools",
      level: "Proficient",
      percent: 88,
      icon: <FaGithub style={{ color: "#24292e" }} />,
      desc: "Repository management, open-source collaboration, pull requests, and project hosting.",
    },
    {
      name: "Responsive Web Design",
      category: "frontend",
      level: "Advanced",
      percent: 92,
      icon: <FaLaptopCode style={{ color: "#723EC3" }} />,
      desc: "Mobile-first development, media queries, dynamic viewports, and touch-friendly user interfaces.",
    },
  ];

  const filteredSkills = skills.filter((skill) => {
    if (activeSkillCategory === "all") return true;
    return skill.category === activeSkillCategory;
  });

  return (
    <>
      <div id="home"></div>

      {/* ================= NAVBAR ================= */}
      <nav id="navbar">
        <div id="nav-name" onClick={() => scrollTo("home")}>
          <b>SAHIL</b> <span className="nav-dot">.</span>
        </div>

        <div id="nav">
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
          >
            🏠 Home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("about");
            }}
          >
            🙋🏻 About
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("skills");
            }}
          >
            🥷🏻 Skills
          </a>
          <a
            href="#project"
            className={activeSection === "project" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("project");
            }}
          >
            💪🏻 Projects
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
          >
            📡 Contact
          </a>
        </div>

        <div className="nav-actions">
          <a
            href="/resume.pdf"
            download="Shaikh_Sahil_Resume.pdf"
            className="nav-cv-btn"
            title="Download Sahil's Resume"
          >
            <FaDownload /> Resume
          </a>

          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-nav-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("home");
                }}
              >
                🏠 Home
              </a>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("about");
                }}
              >
                🙋🏻 About
              </a>
              <a
                href="#skills"
                className={activeSection === "skills" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("skills");
                }}
              >
                🥷🏻 Skills
              </a>
              <a
                href="#project"
                className={activeSection === "project" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("project");
                }}
              >
                💪🏻 Projects
              </a>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
              >
                📡 Contact
              </a>
              <a
                href="/resume.pdf"
                download="Shaikh_Sahil_Resume.pdf"
                className="nav-cv-btn"
              >
                <FaDownload /> Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= HERO SECTION ================= */}
      <div id="info">
        <motion.div
          id="info-right"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="status-badge">
            <span className="status-indicator"></span>
            Available for Frontend Opportunities
          </div>

          <p className="hero-greeting">Hey, I'm Sahil 👋🏻</p>

          <h1 className="hero-title">
            <span>Front</span>end
          </h1>
          <h1 className="hero-title">Developer</h1>

          <p className="hero-description">
            I'm a passionate Frontend Developer based in India. I specialize in building
            fast, responsive, and beautiful websites that deliver exceptional user experiences.
          </p>

          <div className="hero-actions">
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Get In Touch →
            </a>
            <a
              href="#project"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("project");
              }}
            >
              Explore Projects
            </a>
            <a
              href="https://github.com/mr-sahilshaikh26"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="/resume.pdf"
              download="Shaikh_Sahil_Resume.pdf"
              className="btn-accent"
            >
              <FaDownload /> CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-avatar-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-avatar-glow"></div>
          <img
            id="fhoto"
            src={SahilImage}
            alt="Shaikh Sahil - Frontend Developer"
          />
        </motion.div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div id="about" className="section-header text-right">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About me <span>.</span>
        </motion.h1>
      </div>

      <motion.div
        id="about-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div id="about-img">
          <img className="img-1" src={SahilImage} alt="Shaikh Sahil" />
        </div>

        <div id="about-para">
          <h2 className="about-headline">
            Building Modern Web Experiences with Passion & Precision.
          </h2>

          <p className="about-text">
            Hello, I’m <b>Shaikh Sahil</b>, a dedicated Frontend Developer with expertise in
            <b> HTML5, CSS3, JavaScript (ES6+), and React.js</b>. I specialize in crafting
            responsive, accessible, and user-centric web applications with clean, maintainable
            code.
          </p>

          <p className="about-text">
            My experience spans full-featured travel portals, e-commerce storefronts, and dynamic
            CRUD data-entry applications. I focus on optimal performance, smooth animations, and
            delightful interactions across all device sizes.
          </p>

          {/* Quick Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Built</span>
              <span className="stat-desc">Websites & Web Apps</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">6+</span>
              <span className="stat-label">Core Technologies</span>
              <span className="stat-desc">React, JS, HTML, CSS, Git</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Responsive</span>
              <span className="stat-desc">Desktop, Tablet, Mobile</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="/resume.pdf"
              download="Shaikh_Sahil_Resume.pdf"
              className="btn-primary"
            >
              <FaDownload /> Download Resume (PDF)
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </motion.div>

      {/* ================= SKILLS SECTION ================= */}
      <div id="skills" className="section-header">
        <div>
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills <span>.</span>
          </motion.h1>
          <p className="section-subtitle">
            Technologies and tools I utilize to craft clean and modern digital products.
          </p>
        </div>
      </div>

      <div id="skills-section">
        {/* Category Filter */}
        <div className="skills-filter-container">
          <button
            className={`filter-btn ${activeSkillCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveSkillCategory("all")}
          >
            All Skills
          </button>
          <button
            className={`filter-btn ${activeSkillCategory === "frontend" ? "active" : ""}`}
            onClick={() => setActiveSkillCategory("frontend")}
          >
            Frontend
          </button>
          <button
            className={`filter-btn ${activeSkillCategory === "tools" ? "active" : ""}`}
            onClick={() => setActiveSkillCategory("tools")}
          >
            Tools & Workflow
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="skill-card-top">
                <div className="skill-card-icon">{skill.icon}</div>
                <div className="skill-card-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-level-badge">{skill.level}</span>
                </div>
              </div>

              <p>{skill.desc}</p>

              <div className="skill-progress-bar">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= PROJECTS SECTION ================= */}
      <div id="project" className="section-header text-right">
        <div>
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects <span>.</span>
          </motion.h1>
          <p className="section-subtitle">
            Explore live interactive projects built with responsive design and clean code.
          </p>
        </div>
      </div>

      <div id="projects-section">
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="project-thumbnail-wrapper">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-thumbnail"
                />
                <span className="project-badge">{proj.badge}</span>
              </div>

              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>

                <div className="project-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setPreviewProject(proj);
                      setDeviceView("desktop");
                    }}
                  >
                    <FaEye /> Live Demo
                  </button>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    title="Open project in new tab"
                  >
                    <FaExternalLinkAlt /> Open
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= PROJECT LIVE PREVIEW MODAL ================= */}
      <AnimatePresence>
        {previewProject && (
          <div
            className="modal-overlay"
            onClick={() => setPreviewProject(null)}
          >
            <div
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="modal-header">
                <div className="modal-title-area">
                  <h3>{previewProject.title}</h3>
                </div>

                {/* Device View Switcher */}
                <div className="modal-device-controls">
                  <button
                    className={`device-btn ${deviceView === "desktop" ? "active" : ""}`}
                    onClick={() => setDeviceView("desktop")}
                  >
                    🖥️ Desktop
                  </button>
                  <button
                    className={`device-btn ${deviceView === "tablet" ? "active" : ""}`}
                    onClick={() => setDeviceView("tablet")}
                  >
                    💻 Tablet
                  </button>
                  <button
                    className={`device-btn ${deviceView === "mobile" ? "active" : ""}`}
                    onClick={() => setDeviceView("mobile")}
                  >
                    📱 Mobile
                  </button>
                </div>

                <div className="modal-header-actions">
                  <a
                    href={previewProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Open Full Page
                  </a>
                  <button
                    className="modal-close-btn"
                    onClick={() => setPreviewProject(null)}
                    aria-label="Close Preview"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Modal Body / Embedded Iframe */}
              <div className="modal-body">
                <div
                  className="modal-iframe-frame"
                  style={{
                    width:
                      deviceView === "mobile"
                        ? "385px"
                        : deviceView === "tablet"
                        ? "768px"
                        : "100%",
                  }}
                >
                  <iframe
                    src={previewProject.liveUrl}
                    title={previewProject.title}
                    className="modal-iframe"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= CONTACT SECTION ================= */}
      <div id="contact" className="section-header">
        <div>
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let’s Connect <span>.</span>
          </motion.h1>
          <p className="section-subtitle">
            Have a project in mind or want to explore opportunities? Send a message or get in touch directly!
          </p>
        </div>
      </div>

      <div id="contact-section">
        <div id="sahil">
          {/* Left Info Column */}
          <div id="touch">
            <h2>
              Work With <span>Me.</span>
            </h2>
            <p>
              Got an idea? Let’s bring it to life with clean code, elegant styling, and thoughtful user experience.
            </p>

            <div className="contact-cards-container">
              {/* Email Card */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-card-details">
                  <span>EMAIL ADDRESS</span>
                  <b>sahilshaikh@gmail.com</b>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                >
                  <FaCopy /> Copy
                </button>
              </div>

              {/* Phone Card */}
              <a href="tel:+917020000523" className="contact-card">
                <div className="contact-card-icon">
                  <FaPhoneAlt />
                </div>
                <div className="contact-card-details">
                  <span>PHONE NUMBER</span>
                  <b>+91 7020-XXX-523</b>
                </div>
              </a>

              {/* Location Card */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-card-details">
                  <span>LOCATION</span>
                  <b>Chikhli, Buldhana, Maharashtra, India</b>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links-wrapper">
              <h4>Follow & Connect :</h4>
              <div className="social-buttons">
                <a
                  href="https://github.com/mr-sahilshaikh26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/i_m_sa_shaikh_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="Instagram Profile"
                >
                  <FaInstagram />
                </a>
                <a
                  href="mailto:sahilshaikh@gmail.com"
                  className="social-btn"
                  title="Direct Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div id="your-contact">
            {formStatus === "success" ? (
              <div className="form-success-card">
                <FaCheckCircle className="success-icon" />
                <h4>Message Received! 🎉</h4>
                <p>
                  Thank you, <b>{formData.name}</b>! Your message has been sent successfully. Sahil usually replies within 24 hours.
                </p>
                <div className="success-actions">
                  <a
                    href={`mailto:sahilshaikh@gmail.com?subject=${encodeURIComponent(
                      formData.subject
                    )}&body=${encodeURIComponent(
                      `Hi Sahil,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
                    )}`}
                    className="btn-primary"
                    style={{ textDecoration: "none", justifyContent: "center" }}
                  >
                    Open in Your Email Client
                  </a>
                  <button className="btn-secondary" onClick={handleResetForm}>
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="form-header">
                  <div className="form-header-icon">
                    <FaPaperPlane />
                  </div>
                  <div>
                    <h3>Send a Message</h3>
                    <p>I usually reply within 24 hours.</p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="your-name">Your Name *</label>
                    <input
                      type="text"
                      id="your-name"
                      name="name"
                      className={`form-input ${formErrors.name ? "error" : ""}`}
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {formErrors.name && (
                      <span className="form-error-msg">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="your-email">Your Email *</label>
                    <input
                      type="email"
                      id="your-email"
                      name="email"
                      className={`form-input ${formErrors.email ? "error" : ""}`}
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && (
                      <span className="form-error-msg">{formErrors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="your-subject">Inquiry Type</label>
                    <select
                      id="your-subject"
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleInputChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Job Opportunity / Hire">Job Opportunity / Hire</option>
                      <option value="Freelance Work">Freelance Work</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="bio">Your Message *</label>
                    <textarea
                      id="bio"
                      name="message"
                      rows="4"
                      className={`form-textarea ${formErrors.message ? "error" : ""}`}
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    {formErrors.message && (
                      <span className="form-error-msg">{formErrors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending" ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ================= FLOATING BACK TO TOP ================= */}
      {showScrollTop && (
        <button
          className="back-to-top"
          onClick={() => scrollTo("home")}
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}

      {/* ================= TOAST NOTIFICATION ================= */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="toast-notification"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <FaCheckCircle style={{ color: "#10b981" }} />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <b>SAHIL</b> <span style={{ color: "var(--primary)" }}>.</span>
          </div>

          <div className="footer-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
              Home
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>
              About
            </a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo("skills"); }}>
              Skills
            </a>
            <a href="#project" onClick={(e) => { e.preventDefault(); scrollTo("project"); }}>
              Projects
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
              Contact
            </a>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Shaikh Sahil. All rights reserved. Built with React & Vite.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
