"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CoursesSection() {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="py-7"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-7">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
            Courses & Education
          </span>
        </h1>
        <Tabs defaultValue="courses" className="w-fit mx-auto text-center">
          <TabsList>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <TabsContent value="courses" key="courses">
              <motion.div
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="initial"
                className="space-y-2"
              >
                <ul className="list-disc text-start">
                  <li>
                    Node.js, Express, MongoDB & More: The Complete Bootcamp
                  </li>
                  <li>
                    React - The Complete Guide (incl. React Router & Redux).
                  </li>
                  <li>Next.js - The Complete Guide.</li>
                  <li>The Complete JavaScript Course: From Zero to Expert!.</li>
                  <li>
                    Tailwind CSS From Scratch | Learn By Building Projects.
                  </li>
                  <li>Bootstrap 5 From Scratch Build 5 Modern Websites.</li>
                  <li>
                    Udemy - JavaScript Algorithms and Data Structures
                    Masterclass.
                  </li>
                </ul>
              </motion.div>
            </TabsContent>
            <TabsContent value="education" key="education">
              <motion.div
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="initial"
                className="space-y-2"
              >
                <ul className="list-disc text-start">
                  <li>
                    Studied computer engineering at Shoubra Faculty of
                    Engineering.
                  </li>
                </ul>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </motion.section>
  );
}
