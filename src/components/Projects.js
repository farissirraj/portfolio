// import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import cutrack from '../cutrack.jpg';
import lidarCalib from '../lidar_calib.png';
import watcher from '../watcher.png';
import ota from '../ota.png';
import edge from '../edge.jpg';
import ros_ecal from '../ros-ecal.png';
import pots from '../pots.jpg';
import crossModal from '../cross-modal.png';
import pixels2poses from '../pixels2poses.png';

const Projects = () => {
  const projects = [
    {
      id: 7,
      title: "Active Compression Device for POTS",
      description: "Developed an active compression device for postural orthostatic tachycardia syndrome (POTS) with adaptive pneumatic actuation and rehabilitative control using Arduino.",
      image: pots,
      technologies: ["Arduino", "Rehabilitative Robotics", "Pneumatic Actuation"],
      featured: true
    },
    {
      id: 1,
      title: "Targetless LiDAR Calibration Pipeline Using Human Detection and Motion",
      description: "A calibration pipeline that leverages human detections and motions in 3D LiDAR point clouds, removing the need for physical targets.",
      image: lidarCalib,
      technologies: ["Open3D", "ROS", "Docker", "Loss Based Optimisation", "Python"],
      // github: "https://github.com/yourusername/task-manager",
      // live: "https://task-manager-demo.com",
      featured: true,
      className: "img-shift"
    },
    {
      id: 1,
      title: "From Pixels to Poses:  Understanding Camera Pose Regression",
      description: "Estimating 6-DoF camera pose from a single monocular image by studying the absolute camera pose regression across indoor and outdoor environments using APR-style models on the Microsoft 7-Scenes and Extended Cambridge Landmarks datasets.",
      image: pixels2poses,
      // technologies: ["Open3D", "ROS", "Docker", "Loss Based Optimisation", "Python"],
      technologies: [],
      // github: "https://github.com/yourusername/task-manager",
      // live: "https://task-manager-demo.com",
      featured: false,
      className: "img-shift"
    },
    {
      id: 8,
      title: "LiDAR Supervised Cross-Modal Pose Estimation from Stereo Images",
      description: "Cross-modal pose estimation system leveraging LiDAR supervision for improved accuracy in stereo image-based pose prediction.",
      image: crossModal,
      technologies: ["Open3D", "PyTorch"],
      featured: false
    },
    {
      id: 2,
      title: "CuTrack",
      description: "Collaboratively built a real-time system for detecting and tracking humans in 3D LiDAR point clouds, optimized for deployment on NVIDIA Jetson boards to enable efficient edge computing.",
      image: cutrack,
      technologies: ["Open3D", "ROS", "Docker", "Nvidia Jetsons", "LiDARs", "Python"],
    //   github: "https://github.com/yourusername/ecommerce",
    //   live: "https://ecommerce-demo.com",
      featured: false
    },
    {
      id: 3,
      title: "Over-The-Air (OTA) System for Autonomous Truck Firmware Updates",
      description: "Cloud-based OTA system to deliver firmware updates to the calibration stack of autonomous trucks, utilizing AWS ECR, Greengrass, Code Build, and Code Pipeline for efficient and secure deployments.",
      image: ota,
      technologies: ["AWS", "Docker"],
      // github: "https://github.com/yourusername/weather-app",
      // live: "https://weather-demo.com",
      featured: false,
      className: "img-ota"
    },
    {
      id: 4,
      title: "Edge Calibration Systems for Autonomous Trucks",
      description: "Deployed edge calibration system using Docker & Kubernetes on Ubuntu Core-based edge devices to perception for autonomous trucks.",
      image: edge,
      technologies: ["Protobuf", "Docker", "Kubernetes", "Ubuntu Core", "Python"],
      // github: "https://github.com/yourusername/api-service",
      // live: "https://api-docs.com",
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
      image: ros_ecal,
      technologies: ["Python", "Open3d", "Protobuf"],
      category: "backend",
      // github: "https://github.com/yourusername/api-service",
      // live: "https://api-docs.com",
      featured: false,
      className: "img-ros-ecal"
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
              className={`project-card ${project.featured ? 'featured' : ''} ${project.className === 'img-ros-ecal' ? 'img-ros-ecal' : ''}`}
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