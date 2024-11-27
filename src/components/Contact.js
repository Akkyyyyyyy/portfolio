import React from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email or social media!</p>
      <div className="contact-button">

      
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=agavde404@gmail.com" class="button" rel="noreferrer noopener">

  Email me
  <FontAwesomeIcon icon={faEnvelope} />
</a>
<a href="https://wa.me/+917043496195" class="button"  target="_blank"  rel="noreferrer noopener">
  Whatsapp me
  <FontAwesomeIcon icon={faWhatsapp} />
</a>
</div>
<footer>
      <div className="footer-content">
        {/* <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div> */}
        <div className="socials-container">
              {/* <a href="/" className="social twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" height="1em">
  <path d="M30.252 36H23.12L17.04 27.36L10.956 36H5.568L14.508 24.66L4.896 9.828H11.496L17.028 17.82L22.548 9.828H29.148L19.644 24.6L30.252 36Z" fill="#000"></path>
</svg>


              </a> */}

              <a href="https://www.linkedin.com/in/akash-gavde-70b0b02a5/" className="social facebook" target="_blank"  rel="noreferrer noopener">
              <svg height="1em" viewBox="0 0 448 512">
  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.9 108 0 83 0 53.5A53.5 53.5 0 0 1 53.94 0C82.35 0 108 24.9 108 53.5 108 83 82.35 108 53.94 108zM447.9 448h-92.68V312c0-32.53-.7-74.24-45.24-74.24-45.29 0-52.18 35.37-52.18 71.87V448h-92.84V148.9h89.08v40.8h1.28c12.4-23.5 42.64-48.2 87.68-48.2 93.71 0 111 61.7 111 141.93V448z"></path>
</svg>

              </a>

              <a href="https://github.com/Akkyyyyyyy" className="social google-plus" target="_blank"  rel="noreferrer noopener">
              <svg height="1em" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <path d="M511.6 76.3c-247.2 0-448 200.8-448 448 0 197.8 128.3 365.6 306.2 424.8 22.4 4.1 30.6-9.7 30.6-21.6v-79.5c-124.5 27.1-150.8-53.8-150.8-53.8-20.4-51.8-49.8-65.6-49.8-65.6-40.7-27.8 3.1-27.2 3.1-27.2 45 3.1 68.7 46.2 68.7 46.2 40 68.6 104.8 48.8 130.6 37.3 4.1-29 15.6-48.8 28.4-60-99.6-11.3-204.4-49.8-204.4-221.3 0-48.8 17.3-88.6 46.2-119.9-4.6-11.3-20.2-57 4.6-118.5 0 0 37.9-12.1 123.6 46.2 36.2-10.2 75.1-15.3 114-15.3 38.9 0 77.8 5.1 114 15.3 85.7-58.2 123.6-46.2 123.6-46.2 24.8 61.5 9.2 107.2 4.6 118.5 28.9 31.3 46.2 71.1 46.2 119.9 0 171.9-104.8 210-204.8 221.3 16 13.8 30.4 41.1 30.4 82.9v122.8c0 12.2 8.2 25.7 30.9 21.3 177.8-59.3 306.1-227 306.1-424.8 0-247.2-200.8-448-448-448z"></path>
</svg>

              </a>

              <a href="https://www.instagram.com/akk.yy_/" className="social instagram"  target="_blank"  rel="noreferrer noopener">
                <svg height="1em" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
      </div>
    </footer>
    </section>
    
  );
}

export default Contact;
