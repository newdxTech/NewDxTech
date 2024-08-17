import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Helmet } from 'react-helmet';
import './App.css';

function App() {

  return (
  
    <div className="App">
        <Helmet>
        <title>NewDx Tech - Innovate, Secure, Deliver</title>
        <meta name="description" content="NewDx Tech - Innovate, Secure, Deliver. We offer Full Stack Web Development, AI & ML Projects, Custom Chatbots, Final Year Projects, Mini Projects, and Cybersecurity Consulting." />
        <meta name="keywords" content="NewDx Tech, Full Stack Web Development, AI, Machine Learning, Chatbots, Final Year Projects, Mini Projects, Cybersecurity Consulting, E-Learning" />
        <meta name="author" content="NewDx Tech" />
        
        <meta property="og:title" content="NewDx Tech - Innovate, Secure, Deliver" />
        <meta property="og:description" content="Transforming visions into reality with expert tech solutions." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.newdxtech.com" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NewDx Tech - Innovate, Secure, Deliver" />
        <meta name="twitter:description" content="Transforming visions into reality with expert tech solutions." />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>
      <header>
        <div className="logo">
          <img src="logo.png" alt="NewDx Tech Logo" className="logo-image" />
          <h1>NewDx Tech</h1>
        </div>
        <div className="navbar">
          <nav>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero">
        <h2>Welcome to NewDx Tech</h2>
        <p className="slogan">Innovate, secure, deliver</p>
        <p>Transforming Visions into Reality with Expert Tech Solutions</p>
        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
        Contact Us
        </button>


      </section>

      <section id="about">
        <h2>About Us</h2>
        <p className="text">
          At NewDx Tech, our mission is to empower businesses and individuals through innovation and technological excellence. We are dedicated to delivering state-of-the-art solutions that address the evolving needs of our clients. With a strong emphasis on security, quality, and client satisfaction, our
          team of experts leverages cutting-edge technologies to drive growth and success.</p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>
            <h3>Full Stack Web Development</h3>
            <p>We build robust and scalable web applications using the latest technologies.</p>
          </li>
          <li>
            <h3>AI & ML Solutions</h3>
            <p>Transform your data into actionable insights with our AI and Machine Learning solutions.</p>
          </li>
          <li>
            <h3>Custom Chatbots</h3>
            <p>Create personalized chatbot experiences for your business to enhance customer engagement.</p>
          </li>
          <li>
            <h3>Cybersecurity Solutions</h3>
            <p>Our future offerings include expert cybersecurity consulting to protect your business.</p>
          </li>
          <li>
            <h3>LSM Portal</h3>
            <p>We offer classes and workshops on the latest tech topics and aptitudes to keep you ahead in the field.</p>
          </li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>

        <form action="https://formspree.io/f/myyavvro" method="POST">
          <div className="form-element">
            <input 
              type="text" 
              name="Name" 
              className="form-control" 
              placeholder="Your Name" 
              required
            />
          </div>
          <div className="form-element">
            <input 
              type="email" 
              name="Email" 
              className="form-control" 
              placeholder="Your Email" 
              required
            />
          </div>
          <div className="form-element">
            <textarea 
              name="Query" 
              className="form-control" 
              placeholder="Your Query" 
              rows="5" 
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-white btn-submit">
            <i className="fas fa-arrow-right"></i> Submit
          </button>
          <br></br>
        </form>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/newdx-tech-738272323" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/newdx_tech" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/newdxtech" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:newdxtech@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 NewDx Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
