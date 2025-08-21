// import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import cutrack from '../cutrack.jpg';
import lidarCalib from '../lidar_calib.png';
import watcher from '../watcher.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CuTrack",
      description: "Collaboratively built a real-time system for detecting and tracking humans in 3D LiDAR point clouds, optimized for deployment on NVIDIA Jetson boards to enable efficient edge computing.",
      image: cutrack,
      technologies: ["Open3D", "ROS", "Docker", "Nvidia Jetsons", "LiDARs", "Python"],
    //   github: "https://github.com/yourusername/ecommerce",
    //   live: "https://ecommerce-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Targetless LiDAR Calibration Pipeline Using Human Detection and Motion",
      description: "A calibration pipeline that leverages human detections and motions in 3D LiDAR point clouds, removing the need for physical targets.",
      image: lidarCalib,
      technologies: ["Open3D", "ROS", "Docker", "Loss Based Optimisation", "Python"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.com",
      featured: true,
      className: "img-shift"
    },
    {
      id: 3,
      title: "Over-The-Air (OTA) System for Autonomous Truck Firmware Updates",
      description: "Cloud-based OTA system to deliver firmware updates to the calibration stack of autonomous trucks, utilizing AWS ECR, Greengrass, Code Build, and Code Pipeline for efficient and secure deployments.",
      image: "/project3.jpg",
      technologies: ["AWS"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Edge Calibration Systems for Autonomous Trucks",
      description: "Deployed edge calibration system using Docker & Kubernetes on Ubuntu Core-based edge devices to perception for autonomous trucks.",
      image: "/project4.jpg",
      technologies: ["Protobuf", "Docker", "Kubernetes", "Ubuntu Core", "Python"],
      github: "https://github.com/yourusername/api-service",
      live: "https://api-docs.com",
      featured: false
    },
    {
      id: 5,
      title: "Global Monitoring System for Nvidia Orins in Smart City Deployments",
      description: "Real-time monitoring solution deployed across smart city infrastructures in Asia and Europe, enabling remote system health diagnostics and automated client alerts through Slack.",
      image: watcher,
      technologies: ["Docker", "Grafana", "jtop", "Slack Integration", "Python"],
      category: "backend",
      // className: "img-shift",
      // github: "https://github.com/yourusername/api-service",
      // live: "https://api-docs.com",
      featured: false
    },
    {
      id: 6,
      title: "Automated ROS Bag & eCal File Extractorand Analyser",
      description: "Automated the extraction and analysis of serialised and compressed data for large ROS Bag and eCal files (>50 Gb)",
      image: "/project4.jpg",
      technologies: ["Python", "Open3d", "Protobuf"],
      category: "backend",
      // github: "https://github.com/yourusername/api-service",
      // live: "https://api-docs.com",
      featured: false
    },
  ];



  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>Some of my recent work</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title}  className={project.className || ""}/>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {/* <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Interested in working together?</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Let's Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 