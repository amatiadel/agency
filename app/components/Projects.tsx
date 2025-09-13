'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'

interface ProjectsProps {
  className?: string
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Современный интернет-магазин с интеграцией платежей",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      category: "Веб-разработка",
      year: "2024"
    },
    {
      title: "Corporate Website",
      description: "Многофункциональный корпоративный портал",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      category: "Корпоративные сайты",
      year: "2023"
    },
    {
      title: "Landing Page",
      description: "Высококонверсионная лендинг страница",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
      category: "Маркетинг",
      year: "2024"
    }
  ]

  return (
    <section className={cn("pt-2 pb-20 px-2 sm:px-4 lg:px-6 xl:px-2", className)}>
      <div className="w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="p-8 sm:p-12 lg:p-16"
        >
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <motion.h2 
                variants={textVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-tight druk-font text-center"
              >
                Наши Проекты
              </motion.h2>
            </div>

            {/* Projects Display - multiple projects with same style */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8 max-w-6xl mx-auto"
            >
              {/* Project 1 */}
              <div className="relative flex items-center justify-center">
                {/* Background Shape - light gray background */}
                <div className="w-full max-w-6xl h-[480px] bg-[#EBEBEB] dark:bg-gray-700 rounded-6xl"></div>

                {/* Dark Background Panel - extends all the way to the right */}
                <div className="absolute left-0 top-0 w-full h-[480px] bg-[#1A1A1A] rounded-6xl flex flex-col justify-between p-16 z-0">
                  <div className="w-2/5">
                    <div className="space-y-2">
                      <h2 className="text-white text-2xl lg:text-3xl font-bold druk-font">
                        Raktor Drone Software
                      </h2>
                    </div>
                  </div>
                  
                  {/* Tech Stack Icons - positioned at the bottom */}
                  <div className="w-2/5">
                    <div className="flex space-x-3">
                      <img src="/react-logo-programming-2-svgrepo-com.svg" alt="React" className="w-8 h-8" />
                      <img src="/css-3-svgrepo-com.svg" alt="CSS" className="w-8 h-8" />
                      <img src="/html-5-svgrepo-com.svg" alt="HTML" className="w-8 h-8" />
                      <img src="/js-official-svgrepo-com.svg" alt="JavaScript" className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Laptop Mockup - right side */}
                <motion.div
                  variants={textVariants}
                  className="absolute right-0 top-0 w-3/5 h-[480px] group cursor-pointer z-10"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 1, ease: "easeInOut" }
                  }}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1 }}
                >
                  <div className="w-full h-full rounded-r-6xl shadow-2xl overflow-hidden bg-transparent">
                    {/* Laptop Mockup Image with mask */}
                    <div className="w-full h-full rounded-l-6xl overflow-hidden">
                      <img 
                        src="/project-one.jpg"
                        alt="Raktor Drone Software"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* E-commerce Platform */}
              <div className="relative flex items-center justify-center">
                {/* Background Shape - light gray background */}
                <div className="w-full max-w-6xl h-[480px] bg-[#EBEBEB] dark:bg-gray-700 rounded-6xl"></div>

                {/* Dark Background Panel - extends all the way to the right */}
                <div className="absolute left-0 top-0 w-full h-[480px] bg-[#1A1A1A] rounded-6xl flex flex-col justify-between p-16 z-0">
                  <div className="w-2/5">
                    <div className="space-y-2">
                      <h2 className="text-white text-2xl lg:text-3xl font-bold druk-font">
                        E-commerce Platform
                      </h2>
                    </div>
                  </div>
                  
                  {/* Tech Stack Icons - positioned at the bottom */}
                  <div className="w-2/5">
                    <div className="flex space-x-3">
                      <img src="/react-logo-programming-2-svgrepo-com.svg" alt="React" className="w-8 h-8" />
                      <img src="/css-3-svgrepo-com.svg" alt="CSS" className="w-8 h-8" />
                      <img src="/html-5-svgrepo-com.svg" alt="HTML" className="w-8 h-8" />
                      <img src="/js-official-svgrepo-com.svg" alt="JavaScript" className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Laptop Mockup - right side */}
                <motion.div
                  variants={textVariants}
                  className="absolute right-0 top-0 w-3/5 h-[480px] group cursor-pointer z-10"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 1, ease: "easeInOut" }
                  }}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1 }}
                >
                  <div className="w-full h-full rounded-r-6xl shadow-2xl overflow-hidden bg-transparent">
                    {/* Laptop Mockup Image with mask */}
                    <div className="w-full h-full rounded-l-6xl overflow-hidden">
                      <img 
                        src="/542081341_18527354497056352_7941707753979840297_n.jpeg"
                        alt="E-commerce Platform"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>


              {/* Landing Page */}
              <div className="relative flex items-center justify-center">
                {/* Background Shape - light gray background */}
                <div className="w-full max-w-6xl h-[480px] bg-[#EBEBEB] dark:bg-gray-700 rounded-6xl"></div>

                {/* Dark Background Panel - extends all the way to the right */}
                <div className="absolute left-0 top-0 w-full h-[480px] bg-[#1A1A1A] rounded-6xl flex flex-col justify-between p-16 z-0">
                  <div className="w-2/5">
                    <div className="space-y-2">
                      <h2 className="text-white text-2xl lg:text-3xl font-bold druk-font">
                        Landing Page
                      </h2>
                    </div>
                  </div>
                  
                  {/* Tech Stack Icons - positioned at the bottom */}
                  <div className="w-2/5">
                    <div className="flex space-x-3">
                      <img src="/react-logo-programming-2-svgrepo-com.svg" alt="React" className="w-8 h-8" />
                      <img src="/css-3-svgrepo-com.svg" alt="CSS" className="w-8 h-8" />
                      <img src="/html-5-svgrepo-com.svg" alt="HTML" className="w-8 h-8" />
                      <img src="/js-official-svgrepo-com.svg" alt="JavaScript" className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Laptop Mockup - right side */}
                <motion.div
                  variants={textVariants}
                  className="absolute right-0 top-0 w-3/5 h-[480px] group cursor-pointer z-10"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 1, ease: "easeInOut" }
                  }}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1 }}
                >
                  <div className="w-full h-full rounded-r-6xl shadow-2xl overflow-hidden bg-transparent">
                    {/* Laptop Mockup Image with mask */}
                    <div className="w-full h-full rounded-l-6xl overflow-hidden">
                      <img 
                        src="/541514036_18527354530056352_6436515621978451360_n.jpeg"
                        alt="Landing Page"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* View All Projects Button */}
            <motion.div 
              variants={itemVariants}
              className="pt-8 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-accent text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-accent/90 transition-colors duration-200 shadow-lg druk-font flex items-center space-x-2 mx-auto"
              >
                <span>Посмотреть все проекты</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
