'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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
    <footer className={cn('w-full py-16 px-1 sm:px-2 lg:px-4', className)}>
      <div className="max-w-none mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl p-10 lg:p-16 shadow-2xl"
          style={{ backgroundColor: '#1A1A1A' }}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
            {/* Logo */}
            <div className="mb-6 lg:mb-0">
              <a 
                href="#top" 
                className="text-white text-3xl lg:text-4xl font-bold druk-font hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                студия
              </a>
            </div>

            {/* Contact Info - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-center mb-6 lg:mb-0">
              <p className="text-gray-300 text-lg">
                Ваши предложения: <a 
                  href="mailto:info@agency.ru" 
                  className="text-white text-2xl lg:text-3xl font-bold hover:text-blue-400 transition-colors duration-200"
                >
                  info@agency.ru
                </a>
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                Примеры работ
              </a>
              <a href="#process" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                По шагам. Как все пройдет
              </a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                Сколько стоит
              </a>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="relative flex flex-col lg:flex-row justify-between items-center pt-8 gap-4">
            {/* Privacy Policy */}
            <a 
              href="/pp" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-lg order-1 lg:order-1"
            >
              Политика конфиденциальности
            </a>

            {/* CTA Buttons - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 order-2 lg:order-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#FF3D00' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E03500'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF3D00'}
              >
                Задать вопрос в Telegram
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#FF3D00' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E03500'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF3D00'}
              >
                Запросить расчет стоимости
              </motion.button>
            </div>

            {/* Legal Information */}
            <div className="text-gray-300 text-sm lg:text-base text-center lg:text-right order-3 lg:order-3">
              <p>ИП Мокрани Кристина Алехсандровна</p>
              <p>ИНН 246413832108 | ОГРНИП 317246800066961</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
