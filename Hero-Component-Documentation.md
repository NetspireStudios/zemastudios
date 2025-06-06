# Hero Component Documentation

## Overview
The Hero component is the stunning landing section that welcomes visitors with a full-screen background image, animated text, and call-to-action buttons. It creates a powerful first impression using your wedding photography.

## File Location
```
app/components/Hero.tsx
```

## Key Features

### 1. **Full-Screen Background Image (Lines 11-21)**
```tsx
<div className="absolute inset-0 z-0">
  <Image
    src="/images/Wedphoto1.png"
    alt="Beautiful wedding photography by ZM Studio"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />
</div>
```
- Uses Next.js Image component for optimization
- `fill` prop makes image cover entire container
- `priority` ensures fast loading for above-the-fold content
- Gradient overlay creates text readability over the image

### 2. **Animated Welcome Text (Lines 25-33)**
```tsx
<motion.h1
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="text-5xl md:text-7xl font-bold mb-6 text-shadow"
>
  Welcome to{' '}
  <span className="gradient-text">ZM Studio</span>
</motion.h1>
```
- Slides up from bottom with fade-in effect
- Responsive text sizing (5xl on mobile, 7xl on desktop)
- "ZM Studio" has gradient blue styling
- Text shadow for readability over background

### 3. **Tagline Animation (Lines 35-42)**
```tsx
<motion.p
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.4 }}
  className="text-xl md:text-2xl mb-8 text-gray-300 text-shadow"
>
  Professional Wedding & Event Photography
</motion.p>
```
- Staggered animation (0.4s delay after title)
- Professional tagline positioning the business

### 4. **Call-to-Action Buttons (Lines 44-61)**
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
>
  View Our Work
</motion.button>
```
- Primary CTA with gradient background
- Secondary CTA with glass effect
- Both buttons navigate to relevant sections
- Interactive hover animations

### 5. **Floating Decorative Elements (Lines 64-81)**
```tsx
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-20 left-10 w-4 h-4 bg-primary-400 rounded-full opacity-60"
/>
```
- Three floating circles with different animation timings
- Creates dynamic, living background effect
- Uses infinite repeat animations

### 6. **Scroll Indicator (Lines 84-95)**
```tsx
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
  className="flex flex-col items-center text-white/70"
>
  <span className="text-sm mb-2">Scroll to explore</span>
  <ArrowDown className="h-5 w-5" />
</motion.div>
```
- Animated down arrow encouraging user interaction
- Appears after initial animations complete (1.5s delay)

## Animation Timeline
1. **0.2s**: Main title slides in
2. **0.4s**: Tagline slides in  
3. **0.6s**: CTA buttons appear
4. **1.5s**: Scroll indicator fades in
5. **Continuous**: Floating elements and scroll indicator animate

## CSS Classes Used

### Custom Classes
- `text-shadow`: Adds shadow for text readability
- `gradient-text`: Blue gradient text effect
- `section-padding`: Consistent horizontal spacing

### Tailwind Classes
- `h-screen`: Full viewport height
- `object-cover`: Image covers container maintaining aspect ratio
- `bg-gradient-to-b`: Vertical gradient overlay
- `rounded-full`: Circular buttons and decorative elements

## Layout Structure
```
<section> (full screen container)
├── Background Image Layer (z-0)
│   ├── Next.js Image
│   └── Gradient Overlay
├── Content Layer (z-10)
│   ├── Title with Animation
│   ├── Tagline with Animation  
│   ├── CTA Buttons
│   └── Floating Decorative Elements
└── Scroll Indicator (positioned absolutely)
```

## Responsive Design
- Text scales from mobile (text-5xl) to desktop (text-7xl)
- Buttons stack vertically on mobile, horizontally on desktop
- Floating elements positioned to avoid mobile content areas

## User Experience Features
1. **Immediate Impact**: Large hero image creates strong first impression
2. **Clear Actions**: Two distinct CTAs guide user journey
3. **Visual Hierarchy**: Animation sequence guides eye through content
4. **Scroll Encouragement**: Subtle indicator promotes exploration

## Why This Design Works
- **Professional**: High-quality imagery establishes credibility
- **Modern**: Smooth animations feel contemporary
- **Accessible**: High contrast text with shadows ensures readability
- **Engaging**: Interactive elements encourage user interaction 