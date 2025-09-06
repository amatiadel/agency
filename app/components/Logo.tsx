'use client'

interface LogoProps {
  className?: string
  text?: string
}

const Logo: React.FC<LogoProps> = ({ className = '', text = 'AGENCY' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button className="button" data-text={text}>
        {text}
        <span className="hover-text" data-text={text}></span>
      </button>
    </div>
  )
}

export default Logo
