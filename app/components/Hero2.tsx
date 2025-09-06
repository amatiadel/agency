'use client'

import { motion } from 'framer-motion'

interface Hero2Props {
  className?: string
}

const Hero2: React.FC<Hero2Props> = ({ className = '' }) => {
  return (
    <section className={`min-h-screen flex items-center justify-center ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="space-y-8">
            {/* Animated Text Loader */}
            <div className="card">
              <div className="loader">
                <p className="whitespace-nowrap">мы делаем</p>
                <div className="words">
                  <span className="word">Интернет-магазины</span>
                  <span className="word">Лендинги</span>
                  <span className="word">Корпоративные сайты</span>
                  <span className="word">Промо сайты</span>
                  <span className="word">UX/UI Аудит</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero2
