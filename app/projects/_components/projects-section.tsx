"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";

import ProjectCard from "./project-card";
import { projectsData } from "./projects-data";

const ProjectsSection = () => {
  const initialVisibleProjects = 6;
  const [visibleProjects, setVisibleProjects] = useState(
    initialVisibleProjects
  );

  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
  };

  const showLessProjects = () => {
    scrollTo(0, 0);
    setVisibleProjects(initialVisibleProjects);
  };

  return (
    <section className="py-7">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold  mb-7">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
          from-blue-300 via-blue-400 to-blue-500"
          >
            My Projects
          </span>
        </h1>
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12">
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </ul>
        <motion.button
          className="mx-auto  p-1 mt-4 bg-transparent group flex flex-col justify-center items-center"
          onClick={
            visibleProjects < projectsData.length
              ? showMoreProjects
              : showLessProjects
          }
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="flex items-center"
            animate={{
              y: [0, -8, 0],
              transition: { repeat: Infinity, duration: 1.5 },
            }}
          >
            {visibleProjects < projectsData.length ? (
              <FaArrowDownLong className="w-8 h-8 text-[#4087F7]" />
            ) : (
              <FaArrowUpLong className="w-8 h-8 text-[#4087F7]" />
            )}
          </motion.div>
          <span className="text-blue-300 group-hover:text-[#4087F7]">
            {visibleProjects < projectsData.length ? "Show More" : "Show Less"}
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default ProjectsSection;
