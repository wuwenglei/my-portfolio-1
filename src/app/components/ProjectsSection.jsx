"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Imbalanced Learning Regression",
    description: "A Python implementation of different sampling techniques for Regression. Useful for prediction problems where regression is applicable, but the values in the interest of predicting are rare or uncommon.",
    image: "/images/projects/imbalanced-learning-regression/distribution-demo.png",
    tag: ["All", "Research", "Dev"],
    gitUrl: "https://github.com/paobranco/ImbalancedLearningRegression?tab=readme-ov-file",
    previewUrl: "https://imbalanced-learning-regression.com",
  },
  {
    id: 2,
    title: "Case Study of Shared Bike Demand in Washington, D.C.",
    description: "Comparative Analysis of Statistical, Machine Learning, and Deep Learning Models for Shared Bike Demand Prediction: a case study in Washington, D.C.",
    image: "/images/projects/bl-lyft/od-line.png",
    tag: ["All", "Research"],
    gitUrl: "/",
    previewUrl: "https://faint-cruiser-a03.notion.site/Comparative-Analysis-of-Statistical-Machine-Learning-and-Deep-Learning-Models-for-Shared-Bike-Dema-1489e1ed0e7080a482dfcb1381d3d816",
  },
  {
    id: 3,
    title: "Object Detection in the Low-Light Environment",
    description: "Towards a Fast and Lightweight End-to-End Enhancement and Detection Model for Improved Object Detection in the Low-Light Environment.",
    image: "/images/projects/bl-microsoft/comparison-original-dce-car.png",
    tag: ["All", "Research"],
    gitUrl: "/",
    previewUrl: "https://faint-cruiser-a03.notion.site/Towards-a-Fast-and-Lightweight-End-to-End-Enhancement-and-Detection-Model-for-Improved-Object-Detect-1489e1ed0e70808f9664fb8c538e6e59?pvs=4",
  },
  {
    id: 4,
    title: "Receipt Auto Record System by GCP AI",
    description: "Effortlessly automate receipt recording with GCP AI: Let our AI-powered system do the work as it accurately identifies and records every line item and quantity from your receipts.",
    image: "/images/projects/atlas-madness/original.png",
    tag: ["All", "Dev"],
    gitUrl: "https://github.com/Remi09UT/bookkeeping",
    previewUrl: "https://devpost.com/software/receipt-auto-record-system-by-gcp-ai",
  },
  // {
  //   id: 5,
  //   title: "",
  //   description: "",
  //   image: "/images/projects/",
  //   tag: ["All"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "",
  //   description: "",
  //   image: "/images/projects/",
  //   tag: ["All"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Research"
          isSelected={tag === "Research"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Dev"
          isSelected={tag === "Dev"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
