"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Czybnb",
    description: "CzyBnB is a full-stack web application inspired by Airbnb. It allows users to create spots, add reviews, offering a diverse range of accommodations for exploration.",
    image: "/images/projects/bnb.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Waris-95/Czybnb",
    previewUrl: "https://auth-me-3ebb.onrender.com/"
  },
  {
    id: 2,
    title: "Bose Website Redesign",
    description: "Enthralled by the immersive experience of my Bose 700 headphones, I felt inspired to channel my creativity into crafting a sophisticated website, drawing inspiration directly from the sleek design and premium feel of Bose.",
    image: "/images/projects/bose.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Waris-95/Bose-700-Headphones",
    previewUrl: "https://boose700headphones.vercel.app",
  },
  {
    id: 3,
    title: "2022-2023 Portfolio Site",
    description: "In the midst of 2022, I crafted a portfolio site utilizing the dynamic capabilities of React.js and Next.js, elegantly styled with SCSS. This project marked my dedicated focus on front-end development at the time.",
    image: "/images/projects/2k23portfolio.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Waris-95/Personal-Portfolio-React",
    previewUrl: "https://aw-abduls-portfolio.vercel.app/",
  },
  {
    id: 4,
    title: "Coming Soon...",
    description: "",
    image: "",
    tag: ["", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Coming Soon...",
    description: "",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Coming Soon...",
    description: "",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
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
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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