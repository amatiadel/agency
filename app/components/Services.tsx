'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Code, BarChart3, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
}

interface ServicesProps {
  className?: string
}

const services: ServiceItem[] = [
  {
    icon: <Palette size={32} />,
    title: 'BRANDING',
    description: 'Create memorable brand identities that resonate with your audience and stand out in the market.',
  },
  {
    icon: <Code size={32} />,
    title: 'WEB DEVELOPMENT',
    description: 'Build fast, responsive, and user-friendly websites that convert visitors into customers.',
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'DIGITAL MARKETING',
    description: 'Drive growth with data-driven marketing strategies across all digital channels.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'MOBILE APPS',
    description: 'Develop native and cross-platform mobile applications that engage users and drive business value.',
  },
]

const Services: React.FC<ServicesProps> = ({ className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="services" className={cn('py-20 bg-gray-50', className)}>
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
            OUR SERVICES
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 max-w-3xl mx-auto font-medium"
          >
            We offer <span className="font-bold text-accent">COMPREHENSIVE</span> digital solutions to help your business thrive in the modern marketplace.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 border-2 border-black hover:border-accent transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-accent flex items-center justify-center text-white mb-6 group-hover:bg-black transition-colors duration-300"
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-xl font-black text-foreground mb-4 tracking-wide">
                {service.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
