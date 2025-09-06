# Marketing Agency Homepage

A modern, responsive marketing agency homepage built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This project reproduces the layout, sequencing, animations, spacing and UX of a professional marketing agency website.

## 🚀 Features

- **Modern Design**: Clean, professional layout with rounded corners and soft shadows
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth entrance animations and hover effects using Framer Motion
- **Accessibility**: Semantic HTML, keyboard navigation, and proper color contrast
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized images and efficient rendering

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (Icons)
- **Next/Image** (Optimized images)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd marketing-agency-homepage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

### Colors
- **Background**: `#F7F7F7` (Light gray)
- **Primary Text**: `#000000` (Black)
- **Accent**: `#6366F1` (Indigo)
- **Accent Foreground**: `#FFFFFF` (White)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Hero Heading**: 4rem (64px)
- **Section Heading**: 2.5rem (40px)
- **Body Text**: 1rem (16px)

### Spacing
- **Card Padding**: 2rem (32px)
- **Section Spacing**: 5rem (80px)
- **Border Radius**: 1rem (16px) for cards and buttons

## 📁 Project Structure

```
/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── Services.tsx        # Services grid
│   │   ├── ProjectsGrid.tsx    # Portfolio showcase
│   │   ├── Pricing.tsx         # Pricing plans
│   │   ├── ContactCTA.tsx      # Contact form
│   │   └── Footer.tsx          # Footer with links
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── lib/
│   └── utils.ts                # Utility functions
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🖼️ Images

All images are sourced from Unsplash and are royalty-free:
- Hero image: Team collaboration
- Project images: Various business and technology themes
- All images are optimized using Next.js Image component

## 🎭 Animations

The site uses Framer Motion for smooth animations:
- **Entrance animations**: Staggered fade-in with upward motion
- **Hover effects**: Scale and lift effects on interactive elements
- **Scroll animations**: Elements animate when they enter the viewport
- **Floating elements**: Subtle floating animations on hero cards

## 📝 Content Customization

To customize the content:

1. **Text Content**: Edit the component files in `app/components/`
2. **Images**: Replace URLs in the components with your own images
3. **Colors**: Update CSS variables in `app/globals.css`
4. **Styling**: Modify Tailwind classes or extend the theme in `tailwind.config.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Note**: This project uses placeholder content and royalty-free images. Replace all placeholder content with your actual business information before deploying to production.
