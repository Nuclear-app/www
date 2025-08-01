"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = ({ isPricingPage = false }: { isPricingPage?: boolean }) => {
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
      className={`flex py-25 px-4 sm:px-8 md:px-16 lg:px-90 xl:px-90 mt-40 ${isPricingPage ? 'justify-center' : 'self-center md:self-start'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={`flex flex-col gap-10 ${isPricingPage ? 'text-center items-center' : 'text-left'}`}>
        {isPricingPage ? (
          <>
            <motion.div 
              className="text-5xl font-bold leading-16"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Join the thousands of students <br /> learning better with Nuclear.
            </motion.div>
            <motion.div 
              className="text-xl"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                x: 5,
                transition: { duration: 0.2 }
              }}
            >
              Let us help you fill the gap in education.
            </motion.div>
            <motion.div 
              className="w-full h-[0.5px] bg-white rounded-full"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </>
        ) : (
          <>
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
              className="flex flex-col md:flex-row gap-4 justify-start"
              variants={buttonVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.button 
                className="bg-[#EEE] text-[#110C0C] hover:[#EEEEEE88] font-bold px-6 py-4 rounded-2xl text-lg"
                onClick={() => {
                  window.open("/waitlist", "_blank");
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                Join Waitlist
              </motion.button>
              <motion.button 
                className="font-bold px-6 py-4 rounded-2xl text-lg flex items-center gap-2 transition-colors"
                onClick={() => {
                  window.open("/waitlist", "_blank");
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                Launching Aug 5th <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Hero;