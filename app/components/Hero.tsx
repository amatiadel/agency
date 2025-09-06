'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface HeroProps {
  className?: string
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className={cn('pt-24 pb-16', className)}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-hero-sm sm:text-hero font-black text-foreground leading-none">
                <span className="block">CREATIVE</span>
                <span className="block text-accent">DIGITAL</span>
                <span className="block">SOLUTIONS</span>
                <span className="block text-lg font-medium text-gray-600 mt-4">
                  for modern business
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed max-w-lg font-medium"
            >
              We create <span className="font-bold text-accent">BOLD</span> digital experiences that drive growth. 
              From <span className="font-bold">branding</span> to <span className="font-bold">development</span> - 
              we deliver results that matter.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-none font-black text-lg hover:bg-accent/90 transition-colors duration-200 border-2 border-accent"
              >
                <span>GET STARTED</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 border-2 border-black text-black px-8 py-4 rounded-none font-black text-lg hover:bg-black hover:text-white transition-colors duration-200"
              >
                <Play size={20} />
                <span>WATCH DEMO</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-4xl font-black text-accent">500+</div>
                <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">PROJECTS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-accent">98%</div>
                <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">SUCCESS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-accent">24/7</div>
                <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">SUPPORT</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-soft-lg">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Creative team working on digital marketing strategy"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-soft"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Project Complete</div>
                    <div className="text-xs text-gray-600">E-commerce Site</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-soft"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">📈</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">+150% Growth</div>
                    <div className="text-xs text-gray-600">Last Quarter</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
