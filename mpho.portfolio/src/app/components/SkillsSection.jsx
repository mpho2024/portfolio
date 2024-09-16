import React from "react";

const  SkillsSection =() =>{
    const TAB_DATA = [
        {
          title: "Skills",
          id: "skills",
          content: (
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-circle-container">
                  <div className="skill-circle">PostgreSQL</div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-circle-container">
                  <div className="skill-circle">Angular</div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-circle-container">
                  <div className="skill-circle">Spring Boot</div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-circle-container">
                  <div className="skill-circle">JavaScript</div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-circle-container">
                  <div className="skill-circle">Next.js</div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Education",
          id: "education",
          content: (
            <ul className="list-disc pl-2">
              <li>Mokgubi Secondary School</li>
              <li>University Of Mpumalanga</li>
            </ul>
          ),
        },
        {
          title: "Certifications",
          id: "certifications",
          content: (
            <ul className="list-disc pl-2">
              <li>Full Stack Web Development (Udemy)</li>
              <li>JavaScript ES6 (Coursera)</li>
            </ul>
          ),
        },
      ];
};
export default SkillsSection;