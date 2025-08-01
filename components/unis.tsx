"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Unis = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  const tooltipVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  const universities = [
    { name: "McGill University", src: "/unis/mcgill.svg" },
    { name: "University of Michigan", src: "/unis/umich.svg" },
    { name: "National University of Singapore", src: "/unis/nus.svg" },
    { name: "University of Toronto", src: "/unis/uoft.svg" },
    { name: "Nanyang Technological University", src: "/unis/ntu.svg" },
    { name: "University of Edinburgh", src: "/unis/edinburgh.svg" },
    { name: "University of Waterloo", src: "/unis/waterloo.svg" },
    { name: "University of Massachusetts", src: "/unis/umass.svg" },
    { name: "Indiana University", src: "/unis/iu.svg" }
  ];

  // Split universities into two arrays for smaller displays
  const firstRow = universities.slice(0, Math.ceil(universities.length / 2));
  const secondRow = universities.slice(Math.ceil(universities.length / 2));

  return(
      <div className="w-full flex flex-col gap-4 px-4 sm:px-8 md:px-15 lg:px-30 xl:px-90 pb-20">
      <motion.div 
        className="text-3xl text-center font-bold pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Trusted by students from
      </motion.div>
      
      {/* Desktop layout - single row */}
      <motion.div 
        className="hidden xl:flex flex-row gap-8 justify-between items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {universities.map((uni, index) => (
          <motion.div 
            key={uni.name}
            className="relative"
            variants={logoVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <img src={uni.src} alt={uni.name} className="h-22 w-auto" loading="lazy" />
            {hoveredIndex === index && (
              <motion.div 
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs rounded-lg whitespace-nowrap pointer-events-none bg-[#221D1D] border-2 border-[#110C0C] text-[#eeeeee] px-4 py-2 text-md"
                variants={tooltipVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {uni.name}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile/Tablet/Medium layout - two rows */}
      <div className="xl:hidden flex flex-col gap-8">
        <motion.div 
          className="flex flex-row gap-8 justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {firstRow.map((uni, index) => (
            <motion.div 
              key={uni.name}
              className="relative"
              variants={logoVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <img src={uni.src} alt={uni.name} className="h-16 w-auto" loading="lazy" />
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs rounded-lg whitespace-nowrap pointer-events-none bg-[#221D1D] border-2 border-[#110C0C] text-[#eeeeee] px-4 py-2 text-md"
                  variants={tooltipVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {uni.name}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-row gap-8 justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {secondRow.map((uni, index) => (
            <motion.div 
              key={uni.name}
              className="relative"
              variants={logoVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredIndex(index + firstRow.length)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <img src={uni.src} alt={uni.name} className="h-16 w-auto" loading="lazy" />
              {hoveredIndex === index + firstRow.length && (
                <motion.div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs rounded-lg whitespace-nowrap pointer-events-none bg-[#221D1D] border-2 border-[#110C0C] text-[#eeeeee] px-4 py-2 text-md"
                  variants={tooltipVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {uni.name}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Unis;