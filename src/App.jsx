import "./App.css";
import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true },
};

function App() {
  return (
    <main className="portfolio">
      <div className="bg-glow glow1"></div>
      <div className="bg-glow glow2"></div>

      <nav className="navbar">
        <h3>Manoj</h3>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/profile.jpeg"
          alt="Manoj"
          className="profile-img"
        />

        <p className="tag">Hello, I'm</p>

        <motion.h1
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          Nalumachu Manoj
        </motion.h1>

        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Web Developer
        </motion.h2>

        <p>
          Motivated fresher skilled in HTML, CSS, Bootstrap,
          JavaScript, Reactjs, Python, SQL, and MS-Excel.
          Interested in building responsive and user-friendly
          web applications.
        </p>

        <div className="buttons">
          <a href="#projects">View Projects</a>

          <a href="mailto:manojnalmas@gmail.com">
            Contact Me
          </a>

          <a href="/resume.pdf" target="_blank">
            Resume
          </a>
        </div>
      </motion.section>

      <motion.section className="stats" {...reveal}>
        <div className="stat-card">
          <h3>1</h3>
          <p>Project Built</p>
        </div>

        <div className="stat-card">
          <h3>10+</h3>
          <p>Skills Learned</p>
        </div>

        <div className="stat-card">
          <h3>3</h3>
          <p>Certifications</p>
        </div>
      </motion.section>

      <motion.section id="about" {...reveal}>
        <h2>About Me</h2>

        <p>
          I am an Electronics and Communication Engineering student at
          Teegala Krishna Reddy Engineering College, Hyderabad.
          I am passionate about web development, learning new
          technologies, and creating useful software projects.
        </p>
      </motion.section>

      <motion.section id="skills" {...reveal}>
        <h2>Technical Skills</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>JavaScript</span>
          <span>Reactjs</span>
          <span>Python</span>
          <span>SQL</span>
          <span>MS Excel</span>
          <span>Git</span>
          <span>Github</span>
        </div>
      </motion.section>

      <motion.section id="projects" {...reveal}>
        <h2>Projects</h2>

        <div className="project">
          <img
            src="/learnhub.png"
            alt="LearnHub"
            className="project-img"
          />

          <h3>LearnHub – E-Learning Platform</h3>

          <p>
            Built a responsive e-learning platform where students
            can explore programming courses and watch curated
            learning videos.
          </p>

          <div className="buttons">
            <a
              href="https://manojnalmas.github.io/LearnHub/"
              target="_blank"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/manojnalmas/LearnHub.git"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section id="certifications" {...reveal}>
        <h2>Certifications</h2>

        <div className="project">
          <h3>Python Programming Certification</h3>

          <p>Issued by Intellipaat</p>

          <div className="buttons">
            <a
              href="https://intellipaat.com/academy/certificate-link/?Yz0xNTQzJnU9MzQ1NzMxJmV4dD0x"
              target="_blank"
            >
              View Certificate
            </a>
          </div>
        </div>

        <div className="project">
          <h3>SQL Certification</h3>

          <p>Issued by HackerRank</p>

          <div className="buttons">
            <a
              href="https://www.hackerrank.com/certificates/iframe/bc7e6f5ab8b7"
              target="_blank"
            >
              View Certificate
            </a>
          </div>
        </div>

        <div className="project">
          <h3>Excel Certification</h3>

          <p>Issued by Intellipaat</p>

          <div className="buttons">
            <a
              href="https://intellipaat.com/academy/certificate-link/?Yz0yNTgxJnU9MzQ1NzMxJmV4dD0x"
              target="_blank"
            >
              View Certificate
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal}>
        <h2>Education</h2>

        <p>
          B.Tech in Electronics and Communication Engineering
          <br />
          Teegala Krishna Reddy Engineering College, Hyderabad
          <br />
          2023 – 2027 | CGPA: 7.13
        </p>
      </motion.section>

      <motion.section id="contact" {...reveal}>
        <h2>Contact</h2>

        <div className="stats">
          <div className="stat-card">
            <h3>Email</h3>

            <p>
              <a href="mailto:manojnalmas@gmail.com">
                manojnalmas@gmail.com
              </a>
            </p>
          </div>

          <div className="stat-card">
            <h3>Phone</h3>

            <p>9059176024</p>
          </div>

          <div className="stat-card">
            <h3>LinkedIn</h3>

            <p>
              <a
                href="https://www.linkedin.com/in/nalumachu-manoj-80aa84384"
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </p>
          </div>
        </div>
      </motion.section>

      <footer className="footer">
        <p>
          © 2026 Nalumachu Manoj. Built with React.
        </p>
      </footer>
    </main>
  );
}

export default App;