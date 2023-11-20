"use client";

import { motion } from "framer-motion";
import { SlEye } from "react-icons/sl";
import { HiCodeBracket } from "react-icons/hi2";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="shadow-xl rounded-b-lg"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
        className="h-52 md:h-72 rounded-t-lg relative group"
      >
        <motion.div
          className="items-center justify-center absolute top-0 left-0 w-full h-full rounded-t-lg bg-[#18181838]
                    bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
        >
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#848c92] mr-3
                            hover:border-white group/link"
            target="_blank"
          >
            <HiCodeBracket
              className="h-10 w-10 absolute top-1/2 left-1/2 transform
                        text-[#848c92] cursor-pointer group-hover/link:text-white -translate-x-1/2 -translate-y-1/2"
            />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#848c92]
                            hover:border-white group/link"
            target="_blank"
          >
            <SlEye
              className="h-10 w-10 absolute top-1/2 left-1/2 transform
                        text-[#848c92] cursor-pointer group-hover/link:text-white -translate-x-1/2 -translate-y-1/2"
            />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div className=" rounded-b-xl py-6 px-4 mt-3">
        <h5 className="md:text-xl text-lg font-semibold mb-2">{title}</h5>
        <p className=" opacity-70 md:text-base text-sm">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
