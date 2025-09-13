'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ContactProps {
  className?: string
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const [runawayCount, setRunawayCount] = useState(0)
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' })

  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * (max + 1))
  }

  // Return to center when runawayCount reaches 5
  useEffect(() => {
    if (runawayCount === 5) {
      setTimeout(() => {
        setButtonPosition({ top: '50%', left: '50%' })
      }, 500)
    }
  }, [runawayCount])

  const handleMouseEnter = () => {
    if (runawayCount < 5) {
      const sectionElement = document.querySelector('section')
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect()
        const buttonWidth = 200
        const buttonHeight = 80
        
        const maxTop = rect.height - buttonHeight
        const maxLeft = rect.width - buttonWidth
        
        const newTop = getRandomNumber(Math.max(0, maxTop))
        const newLeft = getRandomNumber(Math.max(0, maxLeft))
        
        // Convert to percentage
        const topPercent = (newTop / rect.height) * 100
        const leftPercent = (newLeft / rect.width) * 100
        
        setButtonPosition({ 
          top: `${Math.max(10, Math.min(90, topPercent))}%`, 
          left: `${Math.max(10, Math.min(90, leftPercent))}%` 
        })
        
        setRunawayCount(prev => prev + 1)
      }
    }
  }

  const handleButtonClick = () => {
    // Only allow clicking after 5 runaway attempts
    if (runawayCount >= 5) {
      // Handle the actual button click action here
      console.log('Button clicked!')
      // You can add your actual click functionality here
    }
  }

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
          <motion.div variants={itemVariants} className="space-y-16">
            {/* Big Title */}
            <div className="space-y-6">
              <motion.h2 
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-tight text-center druk-font"
                style={{ 
                  fontSize: 'clamp(2.5rem, 6vw, 8rem)',
                  lineHeight: '0.9'
                }}
              >
                ПОЗНАКОМИТЬСЯ!
              </motion.h2>
            </div>

            {/* Big Button */}
            <motion.div 
              variants={itemVariants}
              className="relative w-full h-96 flex justify-center items-center"
            >
              <motion.button
                onClick={handleButtonClick}
                onMouseEnter={handleMouseEnter}
                whileHover={runawayCount >= 5 ? { scale: 1.05 } : {}}
                whileTap={runawayCount >= 5 ? { scale: 0.95 } : {}}
                className={`absolute bg-accent text-white px-12 py-6 rounded-2xl font-bold text-2xl sm:text-3xl lg:text-4xl hover:bg-accent/90 transition-all duration-500 ease-out shadow-lg druk-font ${
                  runawayCount >= 5 ? 'cursor-pointer' : 'cursor-default'
                }`}
                style={{
                  top: buttonPosition.top,
                  left: buttonPosition.left,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                НАПИСАТЬ
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
