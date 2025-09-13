# PROJECT OVERVIEW

## Project Overview

This is a **marketing agency homepage** built with Next.js 14, designed as a modern, interactive single-page application for a Russian digital marketing studio. The project showcases the agency's services, portfolio, and includes a comprehensive lead generation quiz form that integrates with Telegram for lead management.

**Main Purpose**: A professional marketing agency website that demonstrates services (web development, landing pages, e-commerce, corporate websites) and captures leads through an interactive quiz form that automatically sends inquiries to Telegram.

**Target Audience**: Russian-speaking businesses looking for digital marketing and web development services.

## Functions & Components

### Core Application Structure

#### `app/page.tsx`
- **Purpose**: Main application entry point
- **Functionality**: Renders the complete homepage layout with all sections
- **Components Used**: Header, Hero3, Projects, Process, ServicesPricing, QuizForm, Footer
- **Layout**: Single-page application with fixed header and scrollable content

#### `app/layout.tsx`
- **Purpose**: Root layout wrapper for the entire application
- **Functionality**: 
  - Sets up HTML structure with metadata
  - Configures Inter font from Google Fonts
  - Loads custom Druk Wide Cyr font
  - Defines global metadata (title, description)
- **Dependencies**: Next.js metadata API, Google Fonts

### UI Components

#### `Header.tsx`
- **Purpose**: Navigation header with theme switching
- **Key Features**:
  - Responsive navigation menu (desktop/mobile)
  - Dark/light theme toggle with localStorage persistence
  - Logo with custom branding
  - Smooth animations using Framer Motion
- **State Management**: `isMenuOpen`, `isDarkMode`
- **Dependencies**: Framer Motion, Lucide React icons
- **Props**: `className` (optional)

#### `Hero3.tsx`
- **Purpose**: Main hero section with animated rotating text
- **Key Features**:
  - Typewriter effect with rotating service names
  - Animated call-to-action buttons
  - Gradient background animation
  - Responsive typography scaling
- **State Management**: `currentIndex`, `displayedText`, `isDeleting`
- **Animation**: Custom typewriter effect with 80ms typing, 50ms deleting
- **Props**: `className` (optional)

#### `Projects.tsx`
- **Purpose**: Portfolio showcase with 3D flip cards
- **Key Features**:
  - 3D card flip animations on hover
  - Project grid layout (2x2 on desktop)
  - Intersection observer animations
  - Placeholder project data
- **Animation**: CSS 3D transforms with perspective
- **Props**: `className` (optional)

#### `Process.tsx`
- **Purpose**: Workflow visualization with mathematical equation layout
- **Key Features**:
  - 8-step process visualization
  - Mathematical equation format (A + B + C = Result)
  - Responsive layout with hover effects
  - Hidden on mobile (sm:block)
- **Content**: Process steps from "ТЗ" to "уверенность в результате"
- **Props**: `className` (optional)

#### `ServicesPricing.tsx`
- **Purpose**: Service pricing display
- **Key Features**:
  - Animated pricing list
  - Intersection observer triggers
  - Service categories with price ranges
- **Data**: 5 service types with pricing from 300,000₽ to 650,000₽+
- **Props**: `className` (optional)

#### `QuizForm.tsx`
- **Purpose**: Multi-step lead generation form
- **Key Features**:
  - 6-step wizard interface
  - Form validation for each step
  - Telegram integration for lead submission
  - Success modal with animations
  - Contact information collection
- **State Management**: `currentStep`, `formData`, `showSuccessModal`
- **Form Fields**: 
  - Existing site status
  - Business field selection
  - Project requirements (text area)
  - Development timeline
  - Budget range
  - Contact method and details
- **API Integration**: Sends data to `/api/send-telegram`
- **Props**: `className` (optional)

#### `Footer.tsx`
- **Purpose**: Site footer with company information and links
- **Key Features**:
  - 4-column responsive layout
  - Social media links
  - Contact information
  - Copyright notice
- **Content**: Static footer links and company details
- **Props**: `className` (optional)

### API Routes

#### `app/api/send-telegram/route.ts`
- **Purpose**: Telegram Bot API integration for lead notifications
- **Method**: POST
- **Functionality**:
  - Receives form data from QuizForm
  - Formats message with project details
  - Sends to Telegram chat via Bot API
  - Returns success/error response
- **Environment Variables**: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- **Error Handling**: Comprehensive error catching and user feedback

### Utility Functions

#### `lib/utils.ts`
- **Purpose**: Utility functions for class name management
- **Function**: `cn()` - Combines clsx and tailwind-merge for conditional styling
- **Dependencies**: clsx, tailwind-merge

## Libraries & Dependencies

### Core Framework
- **Next.js 14.0.4**: React framework with App Router
  - **Usage**: Main application framework, routing, API routes
  - **Key Features**: Server-side rendering, static generation, API routes

### React & UI
- **React 18**: Core UI library
  - **Usage**: Component development, hooks, state management
- **React DOM 18**: DOM rendering
  - **Usage**: Client-side rendering

### Styling & Animation
- **Tailwind CSS 3.3.0**: Utility-first CSS framework
  - **Usage**: All styling, responsive design, custom animations
  - **Configuration**: Custom theme with colors, fonts, spacing, animations
- **Framer Motion 10.16.16**: Animation library
  - **Usage**: Page transitions, hover effects, scroll animations, form animations
- **PostCSS 8**: CSS processing
  - **Usage**: Tailwind CSS compilation
- **Autoprefixer 10.0.1**: CSS vendor prefixing
  - **Usage**: Cross-browser compatibility

### Utility Libraries
- **clsx 2.0.0**: Conditional class name utility
  - **Usage**: Dynamic className generation in components
- **tailwind-merge 2.2.0**: Tailwind class merging
  - **Usage**: Prevents Tailwind class conflicts
- **class-variance-authority 0.7.0**: Component variant management
  - **Usage**: Type-safe component variants (though not heavily used in current code)

### Icons & Assets
- **Lucide React 0.294.0**: Icon library
  - **Usage**: UI icons (Menu, X, social media icons, etc.)

### Development Tools
- **TypeScript 5**: Type safety
  - **Usage**: Type definitions, interface definitions
- **ESLint 8**: Code linting
  - **Usage**: Code quality and consistency
- **@types/node 20.19.13**: Node.js type definitions
- **@types/react 18**: React type definitions
- **@types/react-dom 18**: React DOM type definitions

### Custom Assets
- **Druk Wide Cyr Font**: Custom typography
  - **Usage**: Headlines and branding elements
  - **File**: `/public/fonts/drukwidecyr-bold.otf`

## Recent Updates & Current State

### Current Working State
- **Status**: Fully functional marketing agency website
- **Features**: Complete single-page application with all sections working
- **Theme System**: Dark/light mode toggle with localStorage persistence
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Animations**: Smooth Framer Motion animations throughout
- **Lead Generation**: Functional quiz form with Telegram integration

### Key Implementations
1. **Custom Typography System**: Druk Wide Cyr font integration with fallbacks
2. **Advanced Animations**: Typewriter effects, 3D card flips, gradient backgrounds
3. **Theme Management**: CSS custom properties with data-theme attribute switching
4. **Form Validation**: Step-by-step validation with visual feedback
5. **API Integration**: Telegram Bot API for lead management
6. **Responsive Layout**: Mobile-optimized with progressive enhancement

### Technical Architecture
- **App Router**: Next.js 14 App Router for modern routing
- **Client Components**: Strategic use of 'use client' for interactive elements
- **Server Components**: Default server-side rendering for performance
- **CSS-in-JS**: Tailwind CSS with custom CSS for complex animations
- **State Management**: React hooks for local component state

## Integration Notes for Future Development

### Critical Dependencies
1. **Framer Motion**: Essential for all animations - removing would break visual experience
2. **Tailwind CSS**: Core styling system - changes require careful testing
3. **Next.js App Router**: Framework-specific - migration would require significant refactoring
4. **Telegram API**: Lead generation system - requires environment variables

### Safe Development Guidelines

#### Adding New Components
- Follow existing component structure with TypeScript interfaces
- Use `cn()` utility for className management
- Implement responsive design with Tailwind breakpoints
- Add Framer Motion animations for consistency
- Include proper prop typing with optional `className`

#### Modifying Existing Components
- **Header**: Theme switching logic is tightly coupled - test both themes
- **Hero3**: Typewriter animation timing is carefully tuned - test on different devices
- **QuizForm**: Form validation logic is step-dependent - maintain step sequence
- **Projects**: 3D transforms use specific CSS properties - test hover states

#### Styling Changes
- Use CSS custom properties for theme colors (--background, --foreground, etc.)
- Test both dark and light themes
- Maintain responsive breakpoints (sm:, lg:, xl:)
- Preserve animation keyframes and timing

#### API Modifications
- Telegram integration requires environment variables
- Test error handling and user feedback
- Maintain message formatting for readability

#### Performance Considerations
- Images use Unsplash placeholders - replace with optimized assets
- Font loading is optimized with font-display: swap
- Animations use will-change and transform for GPU acceleration
- Mobile performance tested with reduced animation complexity

### Environment Setup
Required environment variables:
```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

### Deployment Notes
- Next.js static export compatible
- No server-side dependencies beyond API routes
- Image optimization configured for Unsplash and placeholder domains
- Font files served from public directory

### Testing Recommendations
1. Test theme switching across all components
2. Verify form submission and Telegram integration
3. Test responsive design on various screen sizes
4. Validate animation performance on lower-end devices
5. Check accessibility with screen readers
6. Test form validation edge cases

This project is well-structured for future development with clear separation of concerns, comprehensive TypeScript typing, and modern React patterns. The modular component architecture allows for easy feature additions while maintaining the existing design system and user experience.
