import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="images/Image2.jpeg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p></p>
              <p>
              As a Full Stack Developer, I bring a dynamic blend of technical expertise and creative problem-solving to the world of software development. With a strong foundation in both front-end and back-end technologies, I possess the skills necessary to craft end-to-end solutions that drive innovation and efficiency.
              </p>
              <p>
              My journey as a Full Stack Developer has equipped me with a deep understanding of web development frameworks, programming languages, and databases. I excel in designing intuitive and responsive user interfaces that enhance the user experience while ensuring robust server-side functionality to support these interfaces. My proficiency extends to modern technologies such as JavaScript, HTML/CSS, React, Node.js, and SQL, allowing me to build scalable and maintainable web applications.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;