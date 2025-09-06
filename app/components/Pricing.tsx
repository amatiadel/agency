'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

interface PricingProps {
  className?: string
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'STARTER',
    price: '$2,999',
    period: '/project',
    description: 'Perfect for small businesses and startups',
    features: [
      'Custom website design',
      'Mobile responsive',
      'SEO optimization',
      '3 months support',
      'Basic analytics',
    ],
    cta: 'GET STARTED',
  },
  {
    name: 'PROFESSIONAL',
    price: '$7,999',
    period: '/project',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Starter',
      'E-commerce functionality',
      'Advanced analytics',
      '6 months support',
      'Content management system',
      'Social media integration',
      'Email marketing setup',
    ],
    popular: true,
    cta: 'MOST POPULAR',
  },
  {
    name: 'ENTERPRISE',
    price: 'CUSTOM',
    period: '/quote',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Professional',
      'Custom development',
      'API integrations',
      '12 months support',
      'Dedicated project manager',
      'Training & documentation',
      'Priority support',
    ],
    cta: 'CONTACT SALES',
  },
]

const Pricing: React.FC<PricingProps> = ({ className }) => {
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
    <section id="pricing" className={cn('py-20 bg-gray-50', className)}>
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
            PRICING PLANS
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 max-w-3xl mx-auto font-medium"
          >
            Choose the <span className="font-bold text-accent">PERFECT</span> plan for your business needs. All plans include our commitment to quality and support.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={cn(
                'relative bg-white border-2 border-black hover:border-accent transition-all duration-300 p-8',
                plan.popular && 'border-accent'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-4 py-2 border-2 border-accent text-sm font-black flex items-center space-x-1 tracking-wide">
                    <Star size={16} />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-foreground mb-2 tracking-wide">
                  {plan.name}
                </h3>
                <p className="text-gray-700 mb-6 font-medium">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-accent">
                    {plan.price}
                  </span>
                  <span className="text-gray-700 ml-2 font-medium">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'w-full py-4 border-2 font-black text-lg transition-colors duration-200 tracking-wide',
                  plan.popular
                    ? 'bg-accent text-white border-accent hover:bg-white hover:text-accent'
                    : 'border-accent text-accent hover:bg-accent hover:text-white'
                )}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-4 font-medium">
            Need a <span className="font-bold text-accent">CUSTOM</span> solution? We're here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-accent font-black hover:text-accent/80 transition-colors duration-200 tracking-wide"
          >
            CONTACT US FOR A CUSTOM QUOTE →
          </motion.button>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
