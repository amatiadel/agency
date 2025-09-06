'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface Hero3Props {
  className?: string
}

const Hero3: React.FC<Hero3Props> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const rotatingTexts = [
    'Интернет-магазины',
    'Лендинги', 
    'Корпоративные сайты',
    'Промо сайты',
    'UX/UI Аудит'
  ]

  useEffect(() => {
    const currentText = rotatingTexts[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 500)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          // Move to next text
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
        }
      }
    }, isDeleting ? 50 : 80) // Much faster deleting and typing

    return () => clearTimeout(timeout)
  }, [displayedText, currentIndex, isDeleting, rotatingTexts])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className={cn('flex items-center justify-center py-12', className)}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-4">
        <div className="max-w-6xl mx-auto lg:max-w-none xl:max-w-none">
          <div className="card gradient-background">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-left space-y-30 w-full"
            >
            {/* Main Heading with Rotating Text */}
            <motion.div variants={itemVariants} className="space-y-30">
              <div className="relative">
                <div className="space-y-30">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-foreground leading-tight druk-font">
                    <span>мы делаем</span>
                  </h1>
                  <div className="relative min-h-12 sm:min-h-16 lg:min-h-24 xl:min-h-28 w-full flex items-start justify-start rotating-text-container">
                    <span className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-accent font-black druk-font">
                      {displayedText}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ 
                          duration: 0.8,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className="ml-1"
                      >
                        |
                      </motion.span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>


            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-end items-end mt-40"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors duration-200 shadow-lg druk-font"
              >
                Узнать стоимость
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border-2 border-accent text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent hover:text-white transition-colors duration-200 druk-font"
              >
                Напишите нам, мы онлайн
              </motion.button>
            </motion.div>

          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero3
