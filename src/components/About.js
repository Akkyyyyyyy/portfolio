import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-container">
        
        <div className="about-image">
          <img
            src="/akky.jpeg"
            alt="About Me"
          />
        </div>
        <div className="about-content">
  <p>
    Hello! I'm <strong>[Your Name]</strong>, a passionate developer with a love for
    creating dynamic and user-friendly applications. I specialize in
    <strong>[Your Skills]</strong> and constantly seek to improve my craft.
  </p>
  <p>
    I graduated with a degree in <strong>[Your Degree]</strong> from <strong>[Your College]</strong> and have been working in the field for <strong>[X years]</strong>. 
    In my free time, I enjoy learning new technologies, reading tech blogs, and participating in coding challenges to sharpen my skills.
  </p>
  <p>
    I am based in <strong>[Your City]</strong>, and outside of coding, I love spending time with my family and friends, exploring new places, and playing <strong>[Your Hobbies/Interests]</strong>.
  </p>
  <p>
    I’m always open to connecting with like-minded professionals, whether for collaboration, mentorship, or sharing ideas. Feel free to reach out if you’d like to work together or chat about tech!
  </p>
</div>

      </div>
    </section>
  );
}

export default About;
