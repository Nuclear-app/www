"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  return(
    <motion.div 
      className="flex w-3/4 self-start px-4 sm:px-8 md:px-16 lg:px-28 xl:px-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-10 text-left">
        <motion.div 
          className="text-5xl font-bold text-left"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          Nuclear is AI for learning.
        </motion.div>
        <motion.div 
          className="text-xl text-left"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ 
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          Students can transform their notes into interactive learning experiences with a distraction free, and clean, notetaking experience and AI tools.
        </motion.div>
        <motion.div 
          className="flex flex-row gap-4 justify-start"
          variants={buttonVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.button 
            className="bg-black text-white hover:bg-gray-800 font-bold px-6 py-4 rounded-2xl text-lg"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            Try Nuclear Free
          </motion.button>
          <motion.button 
            className="font-bold px-6 py-4 rounded-2xl text-lg flex items-center gap-2 transition-colors hover:bg-gray-100"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#f3f4f6",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            Demo <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;