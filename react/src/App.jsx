// import ReactImage from "./assets/react.svg";
// import Manali from "./assets/manali.png"
// import Image from "./assets/e-commarce.png"
import "./App.css";
import {FaGithub} from "react-icons/fa";

import photo from './assets/photo.png';
import html from './assets/html.logo.jpeg';
import css from './assets/css.logo.jpeg';
import js from './assets/js.logo.jpeg';
import github  from './assets/github.logo.jpeg';
import react from './assets/react.logo.jpeg';
import manali from './assets/manali-project.png';
import Shopzone from './assets/Shopzone page.png';


import {motion} from "framer-motion"
function App() {
  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <motion.nav      initial={{  opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 2 }}  className="navbar">
         < motion.div 
       className="nav-links">

    <a href="#home">🏠 Home</a>
    <a href="#about">ℹ️ About</a>
    <a href="#skills">🛠️ Skills</a>
    <a href="#project">💻 Project</a>
    <a href="#contact">📇 Contact</a>

        </motion.div>
      </motion.nav>


      {/* ================= HOME ================= */}

      <section id="home" className="hero">

        < motion.h1   className="hero-name">
          <motion.span initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1 }} className="solid-name">Anam</motion.span>
          < motion.span initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1}} className="outline-name">Aabid</motion.span>
          <motion.span initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1 }}  className="solid-name">Sayyed!!</motion.span >
        </motion.h1>

    <div className="home-content">

{/* LEFT */}
  <motion.div    initial={{  opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 2 }} className="hero-left">
   <h2>Frontend Developer ✦</h2>

    <p>
    Bringing creative ideas to life <br/>
    through code and design...
    </p>

  <button >Let's collaborate ↗</button>

  </motion.div>


  {/* PHOTO */}
  <motion.div  initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: -100 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 3 }}   className="photo-section">
    <img src={photo} alt="Anam" />
  </motion.div >

<motion.div   initial={{  opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 2 }}  className="home-social">
  <a href="https://github.com/" target=" blank"><FaGithub/>Github</a>

</motion.div>
  
</div>
      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="about-section">

        {/* ABOUT HEADING */}

        <motion.div initial={{  opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}  className="about-title">

          <h1>ABOUT</h1>

          <h2>/ABOUT ME</h2>

        </motion.div >


        {/* Left Side */}

        <motion.div initial={{  opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1}} className="about-content">

          <div className="about-text">
            <h3>
              Building Ideas into <br/>
              Mordern & Meaningful<br/>
              Web Experience</h3>

            <p>Im Anam. a passionate Frontend Developer who loves turning ideas into clean.
               mordern and interactive websites. I Focus on creating
               responsive designs that look beautiful and work smoothly on every screen
            I enjoy working with HTML,CSS and Javascript. and I'm continously
              improving my skills by learning new technologies and building creative 
              projects.  i believe good design and clean code should always work  together.
            My goal is to Create Meaningful digital Experience that are simple user-friendly and visually engaging. 
              I'm always excited to take on new challenges. explore new ideas and grow as a developer.</p>
 
          </div>
        </motion.div>
      </section>

     {/* ============Skills=========== */}
      <section id="skills" 
      className="skills-section">

        {/* Skills HEADING */}

        <motion.div initial={{  opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}className="Skills-title">
          <h1>SKILLS</h1>
          <h2>/MY SKILLS</h2>
        </motion.div>

        <div className="skills-container">

          < motion.div  initial={{ opacity: 0, y: -100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 10,
              duration: 2,
              delay: 1,
            }}
            drag
            dragConstraints={{
              left: -100,
              right: 900,
              top: -200,
              bottom: 200,
            }}
            
            viewport={{ once: true }}className="skill">
            <img src={html} alt="HTML"/>
          </motion.div>

          <motion.div  
           initial={{ opacity: 0, y: -100 }}
              whileInView={{ y: 0, opacity: 1 }}
            drag
            dragConstraints={{
              left: -300,
              right: 800,
              top: -200,
              bottom: 200,
            }}
            transition={{
              type: "spring",
              stiffness: 500,

              damping: 10,
              duration: 2,
              delay: 1,
            }}
            viewport={{ once: true }}
            className="skill">
            <img src={css} alt="CSS"/>
          </motion.div>

          <motion.div   initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 10,
              duration: 2,
              delay: 1,
            }}
            drag
            dragConstraints={{
              left: -400,
              right: 600,
              top: -200,
              bottom: 200,
            }}
            viewport={{ once: true }}
           className="skill">
            <img src={js} alt="JS"/>
          </motion.div>

          <motion.div           initial={{ y: -100, opacity: 0 }}
               whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 10,
              duration: 2,
              delay: 1,
            }}
            viewport={{ once: true }}
            drag
            dragConstraints={{
              left: -600,
              right: 500,
              top: -200,
              bottom: 200,
            }}
          className="skill">
            <img src={react}alt="Github"/>
          </motion.div>

          <motion.div      initial={{ opacity: 0, y: -100 }} 
          whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 10,
              duration: 2,
              delay: 1,
            }}
            viewport={{ once: true }}
            drag
            dragConstraints={{
              left: -800,
              right: 100,
              top: -200,
              bottom: 200,
            }}
        className="skill">
            <img src={github}alt="REACT"/>
          </motion.div>
        </div>
      </section>

      {/* ================PROJECT-SECTION================= */}

<section id="project" className="project-section">

  <motion.div initial={{  opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1}} className="project-title">
    <h1>PROJECTS</h1>
    <h2>/MY PROJECTS</h2>
  </motion.div>

  <div className="project-container">

    <motion.div  initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}className="project-card">
      <img src={manali} alt="Manali Project"/>
      <h3>Manali :- Travel Website</h3>
      <p>Manali Landing Page UI👆</p>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }} className="project-card">
      <img src={Shopzone} alt="Shopping page"/>
      <h3>Shopzone:- Shopping App</h3>
      <p> Shopping page UI👆</p>
    </motion.div>

  </div>

</section>


{/* ================ CONTACT SECTION ================ */}

<motion.section initial={{  opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1}} id="contact" className="contact-section">

  <div className="contact-title">
    <h1>CONTACT</h1>
    <h2>/LET'S CONTACT</h2>
  </div>

  <div className="contact-container">

    <div className="contact-info">
      <h3>Get in Touch.</h3>
      <p>
  Have a project in mind? Let’s connect and build something amazing together.
</p>
      <p>📧</p>
      <p>📞+0000000000</p>
      <p>📍Buldana,Maharashtra </p>

      <h4>Follow Me</h4>

      <div className="contact-social">
{/* 
        <a href="https://github.com/" target=" blank"><FaGithub/>
        </a> */}
      </div>
    </div>


    <div className="contact-form">

      <h3>✈ Send a Message</h3>
      <p>I usually reply within 24 hours.</p>

      <input type="text" placeholder="👤 Your Name" />
      <input type="email" placeholder="✉ Your Email" />
      <textarea placeholder="✉ Your Message"></textarea>

      <button>Send Message</button>

    </div>

  </div>

</motion.section>

      </div>

  );
}

export default App;