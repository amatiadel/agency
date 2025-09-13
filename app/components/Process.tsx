'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProcessProps {
  className?: string
}

const Process: React.FC<ProcessProps> = ({ className }) => {
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

  const processSteps = [
    'ТЗ',
    'брифинг', 
    'аналитика',
    'roadmap',
    'проектирование',
    'прозрачный процесс работы',
    'коммуникация',
    'осознанность команды'
  ]

  return (
    <section id="process" className={cn("pb-20 px-4 sm:px-6 lg:px-8 xl:px-4 hidden sm:block", className)} style={{ paddingTop: '1px' }}>
      <div className="max-w-6xl mx-auto lg:max-w-none xl:max-w-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="card p-8 sm:p-12 lg:p-16"
        >
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <motion.h2 
                variants={textVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-tight druk-font"
              >
                Делаем сложное понятным
              </motion.h2>
              <motion.p 
                variants={textVariants}
                className="text-lg sm:text-xl text-gray-400 max-w-4xl leading-relaxed"
              >
                Мы всегда берем на себя ответственность за конечный результат. Вы оцените нашу проактивность и готовность оперативно реагировать на изменения. Без бюррократизма. С доверием друг к другу.
              </motion.p>
            </div>

            {/* Process Flow */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8 flex flex-col items-center"
            >
              {/* First Row */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                {processSteps.slice(0, 4).map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <motion.span
                      variants={textVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 text-foreground px-8 py-4 rounded-full font-medium druk-font text-xl sm:text-2xl shadow-lg"
                    >
                      {step}
                    </motion.span>
                    {index < 3 && (
                      <motion.div
                        variants={textVariants}
                        className="w-16 h-16 bg-accent rounded-full flex items-center justify-center"
                      >
                        <span className="text-white font-bold text-2xl">+</span>
                      </motion.div>
                    )}
                  </div>
                ))}
                {/* Extra + after roadmap */}
                <motion.div
                  variants={textVariants}
                  className="w-16 h-16 bg-accent rounded-full flex items-center justify-center"
                >
                  <span className="text-white font-bold text-2xl">+</span>
                </motion.div>
              </div>

              {/* Second Row */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                {processSteps.slice(4, 7).map((step, index) => (
                  <div key={index + 4} className="flex items-center gap-3">
                    <motion.span
                      variants={textVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 text-foreground px-8 py-4 rounded-full font-medium druk-font text-xl sm:text-2xl shadow-lg"
                    >
                      {step}
                    </motion.span>
                    {index < 2 && (
                      <motion.div
                        variants={textVariants}
                        className="w-16 h-16 bg-accent rounded-full flex items-center justify-center"
                      >
                        <span className="text-white font-bold text-2xl">+</span>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Final Equation */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                {/* Extra + before осознанность команды */}
                <motion.div
                  variants={textVariants}
                  className="w-16 h-16 bg-accent rounded-full flex items-center justify-center"
                >
                  <span className="text-white font-bold text-2xl">+</span>
                </motion.div>
                
                <motion.span
                  variants={textVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-foreground px-8 py-4 rounded-full font-medium druk-font text-xl sm:text-2xl shadow-lg"
                >
                  {processSteps[7]}
                </motion.span>
                
                <motion.div
                  variants={textVariants}
                  className="w-16 h-16 bg-accent rounded-full flex items-center justify-center"
                >
                  <span className="text-white font-bold text-2xl">=</span>
                </motion.div>
                
                <motion.div
                  variants={textVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-accent text-white px-10 py-5 rounded-full font-bold druk-font text-xl sm:text-2xl shadow-lg"
                >
                  уверенность в результате
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
