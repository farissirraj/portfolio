import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaGit, FaDocker, FaAws, FaShip, FaCubes, FaCloud, FaCog, FaCube, FaTools, FaCode, FaMicrochip
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
      const skillCategories = [
      {
        name: "Languages",
        skills: [
          { name: "Python", icon: <FaPython />, color: "#3776AB" },
          { name: "C++", icon: <FaCode />, color: "#00599C" },
        ]
      },
      {
        name: "Frameworks",
        skills: [
          { name: "ROS", icon: <FaCog />, color: "#22314F" },
          { name: "ROS2", icon: <FaCog />, color: "#00599C" },
        ]
      },
      {
        name: "DevOps & Cloud",
        skills: [
          { name: "AWS", icon: <FaAws />, color: "#FF9900" },
          { name: "Docker", icon: <FaDocker />, color: "#00599C" },
          { name: "Kubernetes", icon: <FaCubes />, color: "#FF9900" },
        ]
      },
      {
        name: "Tools",
        skills: [
          { name: "Git", icon: <FaGit />, color: "#F05032" },
          { name: "Jira", icon: <FaTools />, color: "#0052CC" },
          { name: "Grafana", icon: <FaCube />, color: "#F46800" },
          { name: "Slack APIs", icon: <FaCloud />, color: "#4A154B" }
        ]
      },
      {
        name: "Embedded & Edge Platforms",
        skills: [
          { name: "Nvidia Jetsons", icon: <FaCube />, color: "#76B900" },
        ]
      },
      {
        name: "CAD",
        skills: [
          { name: "Fusion360", icon: <FaTools />, color: "#00B4D8" },
          { name: "Blender", icon: <FaTools />, color: "#F5792A" },
        ]
      },
    ];

  const otherSkills = [
    "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL", "Redis", 
    "TypeScript", "Next.js", "Express.js", "Jest", "Cypress",
    "CI/CD", "Agile/Scrum", "Microservices", "Serverless", "PWA"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          <p>Technologies I work with</p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{category.name}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="other-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Other Skills & Technologies</h3>
          <div className="skills-tags">
            {otherSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div> */}

        <motion.div
          className="skills-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <p>Always learning and expanding my skill set</p>
          <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Let's Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 