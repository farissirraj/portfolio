import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './About.css';
import curiumLogo from '../curium-logo.png';
import buLogo from '../bu.png';
import nusLogo from '../nus.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
            Robotics Software Engineer with over two years of experience in software and hardware development, 
            specialising in autonomous, mobility, and crowd analytics systems. I’ve built and deployed 
            production-grade software to clients across Singapore and Europe, gaining hands-on experience in 
            delivering reliable, real-world solutions.
            </p>
            <p>
            My work has included developing edge calibration systems for trucks, implementing over-the-air 
            update pipelines using cloud infrastructure for scalable firmware and software delivery, and 
            contributing to autonomous vehicle platforms. I’ve also researched advanced sensor fusion and 
            calibration techniques for LiDARs and cameras, backed by extensive experimentation to validate system performance.
            </p>
            <p>
            With a meticulous approach to planning and a strong drive to learn, I thrive on solving complex problems and 
            translating them into robust, deployable solutions within the robotics and intelligent systems domain.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </motion.div>
        </div>

        <div className="about-details">
          <motion.div
            className="detail-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="detail-header">
              <FaBriefcase className="detail-icon" />
              <h3>Experience</h3>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2023 - 2025</div>
                <div className="timeline-content">
                  <div className="company-logo">
                    <img 
                      src={curiumLogo} 
                      alt="Curium Logo" 
                      className="company-logo-img"
                    />
                  </div>
                  <h4>Robotic Software Engineer</h4>
                  <p>Curium, Singapore</p>
                  <p>Designed and deployed an Edge Calibration System for autonomous trucks, enabling scalable real-world sensor calibration with Docker and Kubernetes<br /></p>
                  <p>Deployed systems across multiple regions, including Singapore, South East Asia and Europe.<br /></p>
                  <p>Supported production rollouts with OTA update capabilities for client-facing systems.<br /></p>
                  <p>Researched advanced sensor fusion and calibration techniques for LiDARs and cameras, supported by extensive experimentation to validate system performance.<br /></p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2021 - 2023</div>
                <div className="timeline-content">
                  <h4>Software Engineering Intern</h4>
                  <p>Curium, Singapore</p>
                  <p>Automated data extraction and analysis on ROS Bag & eCal recordings <br /></p>
                  <p>Conducted research on various serialisation methods and protocols, including Protobuf, Apache Parquet, and Feather.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="detail-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="detail-header">
              <FaGraduationCap className="detail-icon" />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2025 - Present</div>
                <div className="timeline-content">
                    <div className="BU-logo">
                        <img 
                        src={buLogo} 
                        alt="BU Logo" 
                        className="BU-logo-img"
                        />
                  </div>
                  <h4>Master of Science</h4>
                  <p>Boston University</p>
                  <p>Robotics and Autonomous Systems.</p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                {/* <div className="timeline-date">2017 - 2021</div> */}
                <div className="timeline-content">
                    <div className="NUS-logo">
                        <img 
                        src={nusLogo} 
                        alt="NUS Logo" 
                        className="NUS-logo-img"
                        />
                    </div>
                  <h4>Bachelor's of Engineering</h4>
                  <p>National University of Singapore</p>
                  <p>Computer Engineering with a specialisation in Robotics.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 