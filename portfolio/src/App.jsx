import React from "react";
import "./App.css";
import SahilImage from "./assets/me-0.png";
import RahilImage from "./assets/er.jpg";
import ManaliImage from "./assets/manali.png";
import { motion, spring } from "framer-motion";
// import { FaJs } from "react-icons/fa";
import EImage from "./assets/e-commarce.png";
import UserImage from "./assets/user-form.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
<as></as>;

function App() {
  return (
    <>
      <div id="home"></div>
      <div id="navbar">
        <div id="nav-name">
          {" "}
          <motion.b
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            SAHIL <span style={{ color: "#723EC3" }}>. </span>
          </motion.b>
        </div>
        <motion.div
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          id="nav"
        >
          <a href="#home"> 🏠HOME</a> <a href="#about">🙋🏻 ABOUT</a>{" "}
          <a href="#skills"> 🥷🏻SKILLS</a> <a href="#project"> 💪🏻PROJECTS</a>{" "}
          <a href="#contact"> 📡CONTACT</a>
        </motion.div>
      </div>
      <div id="info">
        <div id="info-right">
          <motion.p
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            Hey,I'm Sahil👋🏻
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 0.5 }}
          >
            <span style={{ color: "#723EC3" }}>Front</span>end
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 0.5 }}
          >
            Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I'm Front Developer based in India, I'll help you build beautiful
            websites your users will love.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 0.5 }}
            className="btnText"
          >
            Get In Touch →
          </motion.a>
          <motion.button
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.5 }}
            className="btnText-1"
            onClick={() =>
              window.open("https://github.com/mr-sahilshaikh26", "_blank")
            }
          >
            <b>Git Hub</b>
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, delay: 0.5 }}
          id="fhoto"
          style={{
            backgroundImage: `url(${SahilImage})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        >
          {/* <img  id="fhoto" src={SahilImage}alt="" /> */}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, delay: 0.5 }}
        id="about"
      >
        <h1 style={{ fontSize: "90px" }}>
          {" "}
          About me <span style={{ color: "#723EC3" }}>.</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
        id="about-1"
      >
        <div id="about-img">
          <img className="img-1" src={SahilImage} alt=""  />
        </div>
        <div id="about-para">
          <p style={{ fontSize: "40px" }}>
            A Deep Dive into My Life's Experiences and Lessons Learned.
          </p>
          <p style={{ fontSize: "20x", color: "#555" }}>
            Hello, I’m Shaikh Sahil, a FrontEnd Developer with expertise in
            HTML, CSS, JavaScript, React.js. I specialize in building
            responsive, scalable, and user-friendly web applications with clean
            and efficient code. I have developed projects including Traveling
            web Applications, E-commerce and modern Student Form Websites, etc.
            Focusing on performance and seamless user experience. Passionate
            about continuous learning, I consistently explore new technologies
            and improve my skills to create impactful digital solutions.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, delay: 1 }}
        id="skills"
      >
        <h1 style={{ fontSize: "90px" }}>
          Skills<span style={{ color: "#723EC3" }}>.</span>
        </h1>
      </motion.div>
      <div id="skill">
        <div className="skill">
          <motion.div
            initial={{ opacity: 0, y: -400 }}
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
            viewport={{ once: true }}
            className="skill-icon"
          >
            {/* <h3>HTML</h3> */}
            <h1>
              {" "}
              <FaHtml5 style={{ color: "F54927" }} />
            </h1>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
          
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
            initial={{ opacity: 0, y: -400 }}
            className="skill-icon"
          >
            {/* <h3>CSS</h3> */}
            <h1>
              <FaCss3Alt style={{ color: "2965F1" }} />
            </h1>
          </motion.div>

          <motion.div
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
            initial={{ opacity: 0, y: -400 }}
            className="skill-icon"
          >
            {/* <h3>Git</h3> */}
            <h1>
              {" "}
              <FaGitAlt style={{ color: "F1502F" }} />
            </h1>
          </motion.div>

          <motion.div
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
            initial={{ y: -400, opacity: 0 }}
            className="skill-icon"
          >
            {/* <h3>GitHub</h3> */}
            <h1>
              {" "}
              <FaGithub style={{ color: "24292E" }} />
            </h1>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 10,
              duration: 2,
              delay: 1,
            }}
            drag
            dragConstraints={{
              left: -700,
              right: 300,
              top: -200,
              bottom: 200,
            }}
            initial={{ opacity: 0, y: -400 }}
            className="skill-icon"
          >
            {/* <h3>React JS</h3> */}
            <h1>
              {" "}
              <FaReact style={{ color: "61DBFB" }} />
            </h1>
          </motion.div>

          <motion.div
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
            initial={{ opacity: 0, y: -400 }}
            className="skill-icon"
          >
            {/* <h3>JavaScript</h3> */}
            <h1>
              {" "}
              <FaJs style={{ color: "F0DB4F" }} />
            </h1>
          </motion.div>
        </div>
      </div>
      {/* <div id="skill">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 1.5 }}
          src="https://cdn-icons-gif.flaticon.com/11324/11324115.gif"
          width={"200px"}
          alt=""
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 2 }}
          src="https://cdn-icons-gif.flaticon.com/18534/18534792.gif"
          width={"200px"}
          alt=""
        />

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 3 }}
          src="https://cdn-icons-gif.flaticon.com/17122/17122651.gif"
          width={"200px"}
          alt=""
        />
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 2,
            delay: 4,
          }}
          initial={{ y: -500 }}
          whileInView={{ y: 0 }}
          style={{ fontSize: "8rem" }}
        >
          <FaJs />
        </motion.h1>
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, delay: 1 }}
        id="project"
      >
        {" "}
        <h1 style={{ fontSize: "90px" }}>
          Projects<span style={{ color: "#723EC3" }}>.</span>
        </h1>
      </motion.div>
      <div id="projects">
        <motion.div
          style={{ position: "relative" }}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          id="pro-1"
        >
          <a
            href="http://127.0.0.1:5500/project%2013/multimedia.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              // zIndex: 2,
              color: "white",
              // boxShadow:" 0 5px 10px #555" ,
              background: "black",
              padding: "8px 16px",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "10px",
            }}
          >
            View Project 👆🏻
          </a>
          <img
            style={{ borderRadius: "10px", objectFit: "contain" }}
            src={ManaliImage}
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </motion.div>
        <motion.div
          style={{ position: "relative" }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          id="pro-2"
        >
          <a
            href="http://127.0.0.1:5500/project%2012/multimedia.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              // zIndex: 2,
              color: "white",
              // boxShadow:" 0 8px 20px #555" ,
              background: "black",
              padding: "8px 16px",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "10px",
            }}
          >
            View Project 👆🏻
          </a>
          <img
            style={{ borderRadius: "10px", objectFit: "contain" }}
            src={EImage}
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </motion.div>
        <motion.div
          style={{ position: "relative" }}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          id="pro-2"
        >
          <a
            href="http://127.0.0.1:5500/project%2018/index.htmll"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              // zIndex: 2,
              color: "white",
              // boxShadow:" 0 8px 20px #555" ,
              background: "black",
              padding: "8px 16px",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "10px",
            }}
          >
            View Project 👆🏻
          </a>
          <img
            style={{ borderRadius: "10px", objectFit: "contain" }}
            src={UserImage}
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 1 }}
        id="contact"
        viewport={{ once: true }}
      >
        <h1 style={{ fontSize: "90px" }}>
          Let’s Connect <span style={{ color: "#723EC3" }}>.</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 1 }}
        id="sahil"
        viewport={{ once: true }}
      >
        <div id="touch">
          <h2 style={{ fontSize: "50px" }}>
            Work With <span style={{ color: "#723EC3" }}>Me.</span>
          </h2>
          <div id="my-contact">
            <p>
              Got an idea? Let’s bring it to life with clean code and creative
              design.
            </p>
            <div className="contact-info">
              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                alt=""
                width="40px"
              />
              <b>
                <span>sahilshaikh@gmail.com</span>
              </b>
            </div>
            <div className="contact-info">
              <img
                src="https://cdn-icons-png.flaticon.com/128/13/13936.png"
                alt=""
                width="40px"
              />
              <b>
                <span>+91 702XXXX523</span>
              </b>
            </div>
            <div className="contact-info">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2991/2991231.png"
                alt=""
                width="40px"
              />
              <b>
                <span>Chikhli,Buldhana</span>
              </b>
            </div>

            <div id="logo">
              <h1>Follow Me :</h1>
              <a
                style={{ width: "50px", borderRadius: "100%" }}
                href="https://github.com/mr-sahilshaikh26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
                  width={"60px"}
                  alt=""
                />
              </a>
              <a
                style={{ width: "50px", borderRadius: "100%" }}
                href="https://www.instagram.com/i_m_sa_shaikh_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
                  width={"60px"}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div id="your-contact">
          {" "}
          <div
            style={{
              padding: "20px",
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <img
              style={{ objectFit: "cover" }}
              src="https://cdn-icons-png.flaticon.com/128/1933/1933005.png"
              width={"60px"}
              height={"60px"}
              alt=""
            />
            <p>
              {" "}
              <span style={{ fontSize: "35px" }}>Send a Message.</span> <br />I
              usually reply within 24 hours.
            </p>
          </div>
          <div style={{ padding: " 10px", textAlig: "center" }}>
            <input
              type="text"
              name=""
              id="your-name"
              placeholder=" 🧑🏻‍💼 Your Name"
            />
            <input
              type="text"
              name=""
              id="your-email"
              placeholder="✉️ Your Email"
            />
            <textarea
              id="bio"
              rows="5px"
              cols="40px"
              placeholder=" Write Your Message ..."
            ></textarea>
            <button className="send"> Send Message </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default App;
