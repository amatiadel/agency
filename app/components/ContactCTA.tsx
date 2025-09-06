'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContactCTAProps {
  className?: string
}

interface FormData {
  name: string
  email: string
  company: string
  message: string
  contactMethod: 'email' | 'phone'
}

const ContactCTA: React.FC<ContactCTAProps> = ({ className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    contactMethod: 'email',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleContactMethodChange = (method: 'email' | 'phone') => {
    setFormData(prev => ({ ...prev, contactMethod: method }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        contactMethod: 'email',
      })
    }, 3000)
  }

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
    <section className={cn('py-20', className)}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="bg-white border-2 border-black p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-section font-black text-foreground mb-6">
                  READY TO GET STARTED?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Let's discuss your project and create something <span className="font-bold text-accent">AMAZING</span> together. 
                  We're here to help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-black text-foreground tracking-wide">EMAIL US</div>
                    <div className="text-gray-700 font-medium">hello@agency.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-black text-foreground tracking-wide">CALL US</div>
                    <div className="text-gray-700 font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-black text-foreground tracking-wide">VISIT US</div>
                    <div className="text-gray-700 font-medium">123 Business St, City, State 12345</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => handleContactMethodChange('email')}
                      className={cn(
                        'flex items-center space-x-2 px-4 py-2 rounded-2xl border-2 transition-colors duration-200',
                        formData.contactMethod === 'email'
                          ? 'border-accent bg-accent text-white'
                          : 'border-gray-300 text-gray-700 hover:border-accent'
                      )}
                    >
                      <Mail size={16} />
                      <span>Email</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleContactMethodChange('phone')}
                      className={cn(
                        'flex items-center space-x-2 px-4 py-2 rounded-2xl border-2 transition-colors duration-200',
                        formData.contactMethod === 'phone'
                          ? 'border-accent bg-accent text-white'
                          : 'border-gray-300 text-gray-700 hover:border-accent'
                      )}
                    >
                      <Phone size={16} />
                      <span>Phone</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'w-full flex items-center justify-center space-x-2 py-4 border-2 font-black text-lg transition-colors duration-200 tracking-wide',
                    isSubmitted
                      ? 'bg-green-500 text-white border-green-500'
                      : 'bg-accent text-white border-accent hover:bg-white hover:text-accent'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <span>✓</span>
                      <span>MESSAGE SENT!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
