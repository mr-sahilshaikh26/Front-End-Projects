import React from "react";
import "./App.css";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import MyImage from "./assets/emran.png";

export default function App() {
  const { scrollY } = useScroll();

  // Navbar background: white -> black
  const navbarBackground = useTransform(
    scrollY,
    [0, 500],
    ["#ffffff", "#000000"]
  );

  // Navbar text: black -> white
  const navbarColor = useTransform(
    scrollY,
    [0, 500],
    ["#000000", "#ffffff"]
  );

  return (
    <>
      {/* HEADER */}
      <div id="top-main">
        <motion.div
          id="navbar"
          style={{
            backgroundColor: navbarBackground,
            color: navbarColor,
         
          }}
        >
          <div id="navbar-right">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              LET BEGIN
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            id="navbar-left"
          >
            <motion.a href="#top-main" style={{color: navbarColor}}>HOME</motion.a>
            <motion.a href="#about" style={{color: navbarColor}}>ABOUT</motion.a>
            <motion.a href="#skill" style={{color: navbarColor}}>SKILL</motion.a>
            <motion.a href="#projects" style={{color: navbarColor}}>PROJECTS</motion.a>
            <motion.a href="#contact" style={{color: navbarColor}}>CONTACT</motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* NAME */}
      <div id="middle">
        <div id="right-middle">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, delay: 0.5 }}
            className="name"
          >
            <p>SAHIL</p>
            <p>SHAIKH</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
            id="para"
          >
            <p>
              <b>FrontEnd Developer</b>
            </p>

            <p>
              Create websites that are clear, usable and conversion focused.
            </p>

            <button id="btn">Let's Collabs ^_-</button>

            <br />

            <p id="s">
              <a
                style={{ color: "white" }}
                href="https://github.com/mr-sahilshaikh26" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Hub
              </a>
            </p>

            <p id="p">
              <a
                style={{ color: "white" }}
                href="https://in.linkedin.com/"
                    target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </motion.div>
        </div>

        <div id="left-middle">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, delay: 0.5 }}
            src={MyImage}
            width="700px"
            height="450px"
            style={{ objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>

      {/* ABOUT */}
      <div id="about">
        <h1>About</h1>
      </div>
       <div id="about">
        <h1>About</h1>
      </div> <div id="about">
        <h1>About</h1>
      </div>
    </>
  );
}
