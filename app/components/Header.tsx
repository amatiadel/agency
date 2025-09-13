'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }, [])

  const navItems = [
    { label: 'Сколько стоит', href: '#pricing' },
    { label: 'Проекты', href: '#projects' },
    { label: 'О нас', href: '#about' },
  ]

  return (
     <header
       className={cn(
         'bg-muted rounded-b-4xl',
         className
       )}
       style={{
         position: 'absolute',
         top: 0,
         left: '1rem',
         right: '1rem',
         zIndex: 1000,
         transform: 'translateZ(0)',
         willChange: 'transform'
       }}
     >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-4">
        <div className="max-w-6xl mx-auto lg:max-w-none xl:max-w-none">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded relative">
                <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-foreground font-medium text-2xl druk-font">Студия</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-foreground transition-colors duration-200 font-medium text-lg"
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Theme Switch */}
            <label className="switch">
              <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
              <span className="slider"></span>
            </label>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-700 transition-colors duration-200 rounded-2xl"
          >
            {isMenuOpen ? <X size={24} className="text-gray-300" /> : <Menu size={24} className="text-gray-300" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-300 hover:text-foreground transition-colors duration-200 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Theme Switch */}
              <div className="flex items-center justify-center pt-4">
                <label className="switch">
                  <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                  <span className="slider"></span>
                </label>
              </div>
            </nav>
          </motion.div>
        )}
         </div>
       </div>
     </header>
  )
}

export default Header
