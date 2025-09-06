'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface ServicePricingItem {
  name: string
  price: string
}

interface ServicesPricingProps {
  className?: string
}

const services: ServicePricingItem[] = [
  {
    name: 'Лендинг',
    price: 'от 300.000 Р'
  },
  {
    name: 'Промо-сайт',
    price: 'от 300.000 Р'
  },
  {
    name: 'Интернет-магазин',
    price: 'от 400.000 Р'
  },
  {
    name: 'Корпоративный сайт',
    price: 'от 500.000 Р'
  },
  {
    name: 'Портал / сервис',
    price: 'от 650.000 Р'
  }
]

const ServicesPricing: React.FC<ServicesPricingProps> = ({ className }) => {
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
    <section className={cn('pt-0 pb-20', className)}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-none mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-tight druk-font text-center"
            >
              Услуги
            </motion.h2>

            {/* Services List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-0"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center justify-between py-6 border-b border-gray-300 last:border-b-0 w-full"
                >
                  <span className="text-xl sm:text-2xl font-medium text-foreground font-inter">
                    {service.name}
                  </span>
                  <span className="text-base sm:text-2xl font-medium text-foreground font-inter">
                    {service.price}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPricing
