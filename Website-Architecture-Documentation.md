# ZM Studio Photography Website - Architecture Documentation

## Overview
This is a modern, single-page photography website built with Next.js 14, featuring a blue theme, advanced animations, and responsive design. The site showcases wedding photography with a focus on visual impact and user engagement.

## Project Structure
```
zemastudio-photography/
├── app/
│   ├── components/           # React components
│   │   ├── Navigation.tsx    # Fixed navigation with glass effect
│   │   ├── Hero.tsx         # Landing section with full-screen image
│   │   ├── About.tsx        # About section with business info
│   │   ├── Services.tsx     # Services grid with animations
│   │   ├── Gallery.tsx      # Photo gallery with masonry layout
│   │   └── Contact.tsx      # Contact form and information
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── public/
│   └── images/              # Wedding photography assets
├── images/                  # Original image files
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
└── README.md               # Project documentation
```

## Technology Stack

### Core Framework
- **Next.js 14**: React framework with App Router
- **React 18**: Latest React with concurrent features
- **TypeScript**: Type safety and better developer experience

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: Additional styling for effects not covered by Tailwind
- **Responsive Design**: Mobile-first approach

### Animation Library
- **Framer Motion**: Advanced React animations and gestures
  - Entrance animations
  - Hover effects
  - Scroll-triggered animations
  - Page transitions

### Additional Libraries
- **Lucide React**: Modern icon library
- **React Intersection Observer**: Scroll-triggered animations
- **Next.js Image**: Optimized image loading

## Design System

### Color Palette
```css
Primary Blue:
- 50: #eff6ff (lightest)
- 400: #60a5fa (medium)
- 500: #3b82f6 (base)
- 600: #2563eb (darker)
- 900: #1e3a8a (darkest)

Secondary Blue:
- 400: #38bdf8 (light cyan)
- 500: #0ea5e9 (base cyan)
- 600: #0284c7 (darker cyan)

Background:
- slate-900: #0f172a (main background)
- slate-800: #1e293b (section backgrounds)
```

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes with gradient effects
- **Body**: Regular weight, good contrast
- **Text Shadow**: Used over images for readability

### Custom CSS Classes
```css
.glass-effect {
  backdrop-blur-md;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.gradient-text {
  background: linear-gradient(to right, #60a5fa, #38bdf8);
  background-clip: text;
  color: transparent;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
```

## Component Architecture

### Layout Pattern
Each component follows this structure:
1. **State Management**: React hooks for local state
2. **Animation Setup**: Framer Motion and Intersection Observer
3. **Render Logic**: JSX with Tailwind classes
4. **Responsive Design**: Mobile-first breakpoints

### Animation Strategy
- **Scroll-triggered**: Components animate when they enter viewport
- **Staggered**: Elements appear in sequence for visual flow
- **Hover Effects**: Interactive feedback on user actions
- **Performance**: `triggerOnce: true` prevents re-animations

### Component Responsibilities

#### Navigation (Navigation.tsx)
- Fixed positioning with scroll-based background change
- Smooth scrolling to sections
- Mobile hamburger menu
- Glass effect styling

#### Hero (Hero.tsx)
- Full-screen background image
- Animated welcome text and CTAs
- Floating decorative elements
- Scroll indicator

#### About (About.tsx)
- Two-column layout (text + image)
- Business information and values
- Floating statistics cards
- Professional credibility

#### Services (Services.tsx)
- Grid layout of service cards
- Animated icons and descriptions
- Hover effects on cards
- Call-to-action button

#### Gallery (Gallery.tsx)
- Masonry grid layout
- Image hover effects
- Lightbox modal
- Responsive image sizing

#### Contact (Contact.tsx)
- Contact information display
- Functional contact form
- Business hours
- Form validation ready

## Performance Optimizations

### Image Optimization
- **Next.js Image**: Automatic optimization and lazy loading
- **Priority Loading**: Hero image loads first
- **Responsive Images**: Multiple sizes for different screen sizes
- **WebP Format**: Modern image format when supported

### Code Splitting
- **Component-based**: Each component loads independently
- **Dynamic Imports**: Potential for code splitting
- **Tree Shaking**: Unused code automatically removed

### Animation Performance
- **Hardware Acceleration**: CSS transforms for smooth animations
- **Intersection Observer**: Only animate when visible
- **Framer Motion**: Optimized animation library

## SEO & Metadata
```tsx
export const metadata: Metadata = {
  title: 'ZM Studio Photography - Professional Wedding & Event Photography',
  description: 'Professional wedding and event photography in Edmonton, AB. Capturing your special moments with artistic vision and modern techniques.',
  keywords: 'wedding photography, event photography, Edmonton photographer, engagement photos, professional photography',
}
```

## Responsive Breakpoints
- **Mobile**: < 768px (single column layouts)
- **Tablet**: 768px - 1024px (adjusted grid layouts)
- **Desktop**: > 1024px (full multi-column layouts)

## Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Features Used**: CSS Grid, Flexbox, CSS Custom Properties, Intersection Observer
- **Fallbacks**: Graceful degradation for older browsers

## Development Workflow

### Getting Started
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```

### File Organization
- **Components**: Organized by function, not file type
- **Styles**: Co-located with components when possible
- **Assets**: Centralized in public directory
- **Types**: TypeScript for type safety

## Deployment Considerations
- **Static Generation**: Can be deployed as static site
- **Image Optimization**: Works with CDNs
- **Performance**: Lighthouse score optimized
- **Mobile Performance**: Tested on various devices

## Future Enhancements
1. **CMS Integration**: For easy content updates
2. **Form Handling**: Backend integration for contact form
3. **Analytics**: Google Analytics or similar
4. **Blog Section**: Photography tips and wedding stories
5. **Client Portal**: Private galleries for clients
6. **Booking System**: Online appointment scheduling

## Maintenance Notes
- **Dependencies**: Regular updates recommended
- **Images**: Optimize new images before adding
- **Performance**: Monitor Lighthouse scores
- **Accessibility**: Regular accessibility audits
- **Content**: Keep portfolio updated with latest work 