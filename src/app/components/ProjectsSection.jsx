"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 5,
    title: "Regal Sartorial",
    description: "Regal Sartorial is a Full-Stack e-commerce platform designed to elevate the shopping experience. Users can curate wardrobes by grouping clothing items for inspiration, save favorite items, and securely checkout with detailed shipping options and payment methods, ensuring a seamless purchase confirmation process. Additionally, the platform includes a robust review system, enabling users to leave feedback on items. A sophisticated email confirmation feature is integrated, providing users with order confirmations upon successful transactions.",
    image: "/images/projects/regal.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Waris-95/regal-sartorial",
    previewUrl: "https://regal-sartorial.onrender.com",
  },
  {
    id: 4,
    title: "Bonfire",
    description: "Bonfire is a Full-Stack Discord clone. This project allows users to create servers and channels, invite friends, and send messages within these channels. Enjoy seamless communication and community building with Bonfire.",
    image: "/images/projects/bonfire.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/charlesoller/bonfire",
    previewUrl: "https://bonfire-j5fr.onrender.com/",
  },
  {
    id: 6,
    title: "Vibr",
    description: "Vibr is Full-Stack web application. Where a user can connect & touch base with family/friends with notifications included",
    image: "images/projects/vibr.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Waris-95/VibR",
    previewUrl: "https://vibr.onrender.com/",
  },
  {
    id: 1,
    title: "CzyBnb",
    description: "CzyBnB is a Full-Stack web application inspired by Airbnb. It allows users to create spots, add reviews, offering a diverse range of accommodations for exploration.",
    image: "/images/projects/czybnb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Waris-95/Czybnb",
    previewUrl: "https://czybnb.onrender.com"
  },
  {
    id: 2,
    title: "Bose Website Redesign",
    description: "A front-end only responsive web design inspired from my pair of bose headphones",
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
              // Apply resizing style to the Vibr project GIF
              imgStyle={project.id === 6 ? { transform: 'scale(1)' } : {}}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
