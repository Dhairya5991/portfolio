import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import "./App.css";

function App() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["about","skills","experience","projects"];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { threshold: 0.6 });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-logo">DP</div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["about","skills","experience","projects"].map(item => (
            <li key={item}>
              <a href={`#${item}`} className={active===item?"active":""}
                 onClick={()=>setMenuOpen(false)}>
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
        <motion.a href="/resume/Dhairyashil_Pansare_Resume.pdf" download
          className="resume-btn pulse desktop-only">
          Resume
        </motion.a>
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      <header className="header">
        <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}}>
          Dhairyashil Pansare
        </motion.h1>
      </header>

      <section id="about"><Reveal><h2>About</h2></Reveal></section>
      <section id="skills"><Reveal><h2>Skills</h2></Reveal></section>
      <section id="experience"><Reveal><h2>Experience</h2></Reveal></section>
      <section id="projects"><Reveal><h2>Projects</h2></Reveal></section>

      <footer>© 2025 Dhairyashil Pansare</footer>
    </div>
  );
}
export default App;
