'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

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
      title: "Интернет-магазин",
      description: "Современный e-commerce с интеграцией платежей",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Корпоративный сайт",
      description: "Многофункциональный портал для бизнеса",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Лендинг страница",
      description: "Высококонверсионная страница для продукта",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Мобильное приложение",
      description: "iOS и Android приложение с синхронизацией",
      image: "/api/placeholder/400/300"
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
                Проекты
              </motion.h2>
            </div>

            {/* Projects Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={textVariants}
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-96 w-full" style={{ perspective: '1000px' }}>
                    <div className="relative w-full h-full transition-transform duration-700 will-change-transform" 
                         style={{ 
                           transformStyle: 'preserve-3d',
                           transform: 'rotateY(0deg)'
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'rotateY(180deg)'
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'rotateY(0deg)'
                         }}>
                      {/* Front of Card */}
                      <div className="absolute inset-0 w-full h-full bg-muted/30 rounded-2xl overflow-hidden"
                           style={{ backfaceVisibility: 'hidden' }}>
                        {/* Project Image */}
                        <div className="relative h-full w-full">
                          <img 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center" 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Back of Card */}
                      <div className="absolute inset-0 w-full h-full bg-accent/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center"
                           style={{ 
                             backfaceVisibility: 'hidden',
                             transform: 'rotateY(180deg)'
                           }}>
                        <div className="space-y-4">
                          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                            <div className="w-10 h-10 bg-accent rounded-full"></div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-foreground druk-font">
                            {project.title}
                          </h3>
                          
                          
                          <div className="pt-4">
                            <span className="inline-block bg-accent text-white px-6 py-2 rounded-lg font-medium druk-font">
                              Подробнее
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              variants={itemVariants}
              className="pt-8 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors duration-200 shadow-lg druk-font"
              >
                Посмотреть все проекты
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
