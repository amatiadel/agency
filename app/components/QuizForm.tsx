'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface QuizFormProps {
  className?: string
}

interface QuizData {
  existingSite: string
  fieldOfActivity: string
  keyTask: string
  developmentSpeed: string
  budget: string
  contactMethod: string
  phoneNumber: string
  name: string
}

const QuizForm: React.FC<QuizFormProps> = ({ className }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState<QuizData>({
    existingSite: '',
    fieldOfActivity: '',
    keyTask: '',
    developmentSpeed: '',
    budget: '',
    contactMethod: '',
    phoneNumber: '',
    name: ''
  })

  const totalSteps = 5

  const handleInputChange = (field: keyof QuizData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Move to contact form
      setCurrentStep(6)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    // Handle final form submission
    console.log('Form submitted:', formData)
    
    // Send to Telegram
    try {
      const message = `
🎯 Новая заявка на расчет стоимости сайта:

📋 Информация о проекте:
• Есть ли сайт: ${formData.existingSite === 'existing' ? 'Есть сайт' : 'Нужно создать с нуля'}
• Сфера деятельности: ${formData.fieldOfActivity}
• Ключевая задача: ${formData.keyTask}
• Скорость разработки: ${formData.developmentSpeed}
• Бюджет: ${formData.budget}

📞 Контактная информация:
• Способ связи: ${formData.contactMethod}
• Телефон: ${formData.phoneNumber}
• Имя: ${formData.name}
      `

      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      if (response.ok) {
        setShowSuccessModal(true)
      } else {
        alert('Произошла ошибка. Попробуйте еще раз.')
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error)
      alert('Произошла ошибка. Попробуйте еще раз.')
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">
                Есть ли действующий сайт или нужно создать его с нуля?
              </h3>
              <div className="text-sm text-muted-foreground">
                {currentStep}/{totalSteps}
              </div>
            </div>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="existingSite"
                  value="existing"
                  checked={formData.existingSite === 'existing'}
                  onChange={(e) => handleInputChange('existingSite', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-foreground">Есть сайт</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="existingSite"
                  value="new"
                  checked={formData.existingSite === 'new'}
                  onChange={(e) => handleInputChange('existingSite', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-foreground">Нужно создать сайт с нуля</span>
              </label>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">
                Ваша сфера деятельности:
              </h3>
              <div className="text-sm text-muted-foreground">
                {currentStep}/{totalSteps}
              </div>
            </div>
            <select
              value={formData.fieldOfActivity}
              onChange={(e) => handleInputChange('fieldOfActivity', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-2xl text-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900"
            >
              <option value="">Выберите сферу деятельности</option>
              <option value="construction">Строительство</option>
              <option value="production">Производство</option>
              <option value="it">IT</option>
              <option value="medicine">Медицина</option>
              <option value="services">Сфера услуг</option>
              <option value="infobusiness">Инфобизнес и реклама</option>
              <option value="events">Общественные мероприятия</option>
              <option value="other">Другое</option>
            </select>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">
                Ключевая задача на проект
              </h3>
              <div className="text-sm text-muted-foreground">
                {currentStep}/{totalSteps}
              </div>
            </div>
            <textarea
              value={formData.keyTask}
              onChange={(e) => handleInputChange('keyTask', e.target.value)}
              placeholder="Запишите задачу в поле ниже"
              className="w-full p-4 border border-gray-300 rounded-2xl text-lg focus:ring-2 focus:ring-accent focus:border-accent h-32 resize-none bg-white text-gray-900 placeholder-gray-500"
            />
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">
                Есть ли требования к скорости разработки?
              </h3>
              <div className="text-sm text-muted-foreground">
                {currentStep}/{totalSteps}
              </div>
            </div>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="developmentSpeed"
                  value="no"
                  checked={formData.developmentSpeed === 'no'}
                  onChange={(e) => handleInputChange('developmentSpeed', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-foreground">Нет</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="developmentSpeed"
                  value="1month"
                  checked={formData.developmentSpeed === '1month'}
                  onChange={(e) => handleInputChange('developmentSpeed', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-foreground">Запуск через месяц</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="developmentSpeed"
                  value="2-3months"
                  checked={formData.developmentSpeed === '2-3months'}
                  onChange={(e) => handleInputChange('developmentSpeed', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-foreground">Запуск через 2-3 месяца</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="developmentSpeed"
                  value="accelerated"
                  checked={formData.developmentSpeed === 'accelerated'}
                  onChange={(e) => handleInputChange('developmentSpeed', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-foreground">Нужна ускоренная разработка</span>
              </label>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">
                Ваш бюджет на разработку сайта
              </h3>
              <div className="text-sm text-muted-foreground">
                {currentStep}/{totalSteps}
              </div>
            </div>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="budget"
                  value="300-500"
                  checked={formData.budget === '300-500'}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-foreground">300.000 - 500.000 ₽</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="budget"
                  value="500-700"
                  checked={formData.budget === '500-700'}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-foreground">500.000 - 700.000 ₽</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="budget"
                  value="700-1000"
                  checked={formData.budget === '700-1000'}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-foreground">700.000 - 1.000.000 ₽</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="budget"
                  value="1000+"
                  checked={formData.budget === '1000+'}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-foreground">1.000.000 ₽ +</span>
              </label>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                ВЗЯЛИ ИНФОРМАЦИЮ В РАБОТУ
              </h3>
              <p className="text-muted-foreground text-lg">
                Напоминаем, что мы свяжемся повторно, для уточнения деталей
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Как будет удобнее связаться для получения информации?
                </h4>
                <select
                  value={formData.contactMethod}
                  onChange={(e) => handleInputChange('contactMethod', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-2xl text-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900"
                >
                  <option value="">Выберите способ связи</option>
                  <option value="telegram">Telegram</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="phone">Телефон</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-medium text-foreground mb-2">
                  Номер телефона, к которому привязан мессенджер
                </label>
                <div className="flex">
                  <div className="flex items-center px-4 border border-gray-300 border-r-0 rounded-l-2xl bg-gray-50">
                    <span className="text-lg">🇷🇺</span>
                    <span className="ml-2 text-lg text-gray-900">+7</span>
                  </div>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="(000) 000-00-00"
                    className="flex-1 p-4 border border-gray-300 rounded-r-2xl text-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium text-foreground mb-2">
                  Как мы можем к вам обращаться?
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Ваше имя"
                  className="w-full p-4 border border-gray-300 rounded-2xl text-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900"
                />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.existingSite !== ''
      case 2:
        return formData.fieldOfActivity !== ''
      case 3:
        return formData.keyTask.trim() !== ''
      case 4:
        return formData.developmentSpeed !== ''
      case 5:
        return formData.budget !== ''
      case 6:
        return formData.contactMethod !== '' && formData.phoneNumber !== '' && formData.name !== ''
      default:
        return false
    }
  }

  return (
    <section className={cn('py-20 px-4 sm:px-6 lg:px-8 xl:px-4 bg-black', className)}>
      <div className="w-full">
        <div className="max-w-6xl mx-auto lg:max-w-none xl:max-w-none">
          <div className="bg-muted rounded-4xl p-8 lg:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 min-h-[600px]">
              {/* Left Side - Information */}
              <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-4xl p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-500 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-30"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-300 rounded-full opacity-40"></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-500 rounded-full opacity-25"></div>
                </div>
                <div className="relative z-10 text-center">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight druk-font">
                    Узнайте стоимость<br />
                    разработки сайта<br />
                    для Вашего проекта
                  </h2>
                </div>
              </div>

              {/* Right Side - Quiz Form */}
              <div className="p-4 lg:p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2 mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                      Ответьте на 5 коротких вопросов
                    </h3>
                    <p className="text-lg sm:text-xl text-muted-foreground">
                      Это сократит время коммуникации и увеличит точность расчета
                    </p>
                  </div>

                  {/* Visual Separator */}
                  <div className="border-t border-gray-300 mb-8"></div>

                {/* Form Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderStep()}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-6">
                  {currentStep > 1 && currentStep <= totalSteps && (
                    <button
                      onClick={prevStep}
                      className="px-6 py-3 rounded-2xl font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      Назад
                    </button>
                  )}

                  {currentStep < totalSteps ? (
                    <button
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className={cn(
                        'px-8 py-3 rounded-2xl font-medium text-white transition-colors ml-auto',
                        isStepValid()
                          ? 'bg-accent hover:bg-accent/90'
                          : 'bg-gray-300 cursor-not-allowed'
                      )}
                    >
                      Далее
                    </button>
                  ) : currentStep === totalSteps ? (
                    <button
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className={cn(
                        'px-8 py-3 rounded-2xl font-medium text-white transition-colors ml-auto',
                        isStepValid()
                          ? 'bg-accent hover:bg-accent/90'
                          : 'bg-gray-300 cursor-not-allowed'
                      )}
                    >
                      Получить расчет
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!isStepValid()}
                      className={cn(
                        'px-8 py-3 rounded-2xl font-medium text-white transition-colors ml-auto',
                        isStepValid()
                          ? 'bg-accent hover:bg-accent/90'
                          : 'bg-gray-300 cursor-not-allowed'
                      )}
                    >
                      Получить расчет стоимости
                    </button>
                  )}
                </div>

                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-4xl p-8 max-w-md w-full mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>

                {/* Success Message */}
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-gray-900 mb-4 druk-font"
                >
                  Спасибо!
                </motion.h3>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 mb-8"
                >
                  Мы свяжемся с вами в ближайшее время для обсуждения деталей вашего проекта.
                </motion.p>

                {/* Close Button */}
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-accent text-white py-3 px-6 rounded-2xl font-medium hover:bg-accent/90 transition-colors duration-200 druk-font"
                >
                  Закрыть
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default QuizForm
