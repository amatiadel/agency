'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectItem {
  id: number
  title: string
  description: string
  category: string
  image: string
  link: string
}

interface ProjectsGridProps {
  className?: string
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'E-COMMERCE PLATFORM',
    description: 'Modern online store with advanced filtering and seamless checkout experience.',
    category: 'WEB DEVELOPMENT',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#',
  },
  {
    id: 2,
    title: 'MOBILE BANKING APP',
    description: 'Secure and intuitive banking application with biometric authentication.',
    category: 'MOBILE APP',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#',
  },
  {
    id: 3,
    title: 'BRAND IDENTITY DESIGN',
    description: 'Complete brand overhaul for a tech startup including logo and guidelines.',
    category: 'BRANDING',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#',
  },
  {
    id: 4,
    title: 'MARKETING CAMPAIGN',
    description: 'Multi-channel digital marketing campaign that increased sales by 200%.',
    category: 'MARKETING',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#',
  },
  {
    id: 5,
    title: 'SAAS DASHBOARD',
    description: 'Analytics dashboard with real-time data visualization and reporting.',
    category: 'WEB DEVELOPMENT',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#',
  },
  {
    id: 6,
    title: 'FITNESS APP',
    description: 'Personalized workout tracking app with social features and progress analytics.',
    category: 'MOBILE APP',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '#',
  },
]

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="projects" className={cn('py-20', className)}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-section font-black text-foreground mb-6"
          >
            FEATURED PROJECTS
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 font-medium"
          >
            Explore our portfolio of <span className="font-bold text-accent">SUCCESSFUL</span> projects that have helped businesses achieve their goals.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-white border-2 border-black hover:border-accent transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <ExternalLink size={16} className="text-gray-700" />
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-white bg-accent px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-accent transition-colors duration-200 tracking-wide">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                  {project.description}
                </p>

                <motion.a
                  href={project.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center space-x-2 text-accent font-black hover:text-accent/80 transition-colors duration-200 tracking-wide"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-4 border-2 border-accent font-black text-lg hover:bg-white hover:text-accent transition-colors duration-200 tracking-wide"
          >
            VIEW ALL PROJECTS
          </motion.button>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
