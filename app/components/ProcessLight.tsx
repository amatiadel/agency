'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProcessLightProps {
  className?: string
}

// Data for marquee rows
const row1Items = [
  { type: 'tag', text: 'ТЗ' },
  { type: 'plus' },
  { type: 'tag', text: 'брифинг' },
  { type: 'plus' },
  { type: 'tag', text: 'аналитика' },
  { type: 'plus' },
  { type: 'tag', text: 'roadmap' },
  { type: 'plus' },
]

const row2Items = [
  { type: 'tag', text: 'прозрачный процесс работы' },
  { type: 'plus' },
  { type: 'tag', text: 'коммуникация' },
  { type: 'plus' },
]

const row3Items = [
  { type: 'tag', text: 'осознанность команды' },
  { type: 'equals' },
  { type: 'result', text: 'уверенность в результате' },
]

// Tag component
const Tag = ({ text, variant = 'default' }: { text: string; variant?: 'default' | 'result' }) => {
  if (variant === 'result') {
    return (
      <span className="bg-[#4F46E5] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium druk-font text-base sm:text-lg md:text-xl whitespace-nowrap">
        {text}
      </span>
    )
  }
  
  return (
    <span className="bg-white border border-gray-200 text-[#1a1a1a] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium druk-font text-base sm:text-lg md:text-xl whitespace-nowrap">
      {text}
    </span>
  )
}

// Plus icon component
const PlusIcon = () => (
  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#4F46E5] rounded-full flex items-center justify-center flex-shrink-0">
    <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">+</span>
  </div>
)

// Equals icon component
const EqualsIcon = () => (
  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#4F46E5] rounded-full flex items-center justify-center flex-shrink-0">
    <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">=</span>
  </div>
)

// Render item based on type
const renderItem = (item: { type: string; text?: string }, index: number) => {
  switch (item.type) {
    case 'tag':
      return <Tag key={index} text={item.text || ''} />
    case 'plus':
      return <PlusIcon key={index} />
    case 'equals':
      return <EqualsIcon key={index} />
    case 'result':
      return <Tag key={index} text={item.text || ''} variant="result" />
    default:
      return null
  }
}

// Marquee row component
const MarqueeRow = ({ 
  items, 
  speed = 30, 
  reverse = false 
}: { 
  items: Array<{ type: string; text?: string }>
  speed?: number
  reverse?: boolean
}) => {
  return (
    <div className="overflow-hidden w-full">
      <div 
        className={cn(
          "flex items-center gap-3 sm:gap-4 md:gap-6",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ 
          animationDuration: `${speed}s`,
          width: 'max-content'
        }}
      >
        {/* First set of items */}
        {items.map((item, index) => renderItem(item, index))}
        {/* Duplicated set for seamless loop */}
        {items.map((item, index) => renderItem(item, index + items.length))}
        {/* Third set for extra coverage */}
        {items.map((item, index) => renderItem(item, index + items.length * 2))}
      </div>
    </div>
  )
}

const ProcessLight: React.FC<ProcessLightProps> = ({ className }) => {
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
    <section 
      className={cn(
        "py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5]",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10 sm:space-y-12"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-tight druk-font">
              Делаем сложное понятным
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-4xl leading-relaxed">
              Мы всегда берем на себя ответственность за конечный результат. Вы оцените нашу проактивность и готовность оперативно реагировать на изменения. Без бюррократизма. С доверием друг к другу.
            </p>
          </motion.div>

          {/* Marquee Rows */}
          <motion.div 
            variants={itemVariants}
            className="space-y-4 sm:space-y-6 overflow-hidden"
          >
            {/* Row 1 - slowest */}
            <MarqueeRow items={row1Items} speed={30} />
            
            {/* Row 2 - medium speed */}
            <MarqueeRow items={row2Items} speed={25} />
            
            {/* Row 3 - slow, reverse direction */}
            <MarqueeRow items={row3Items} speed={35} reverse />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessLight
