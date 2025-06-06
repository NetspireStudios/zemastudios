# Navigation Component Documentation

## Overview
The Navigation component is a sophisticated, responsive navigation bar that provides smooth scrolling and modern UI effects. It's built using React with Framer Motion for animations and Lucide React for icons.

## File Location
```
app/components/Navigation.tsx
```

## Key Features

### 1. **Dynamic Background Effect (Lines 32-41)**
```tsx
className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  isScrolled ? 'glass-effect' : 'bg-transparent'
}`}
```
- The navigation background changes from transparent to a glass effect when scrolled
- Uses a scroll listener to detect when user scrolls more than 50px (line 12-13)

### 2. **Logo Section (Lines 44-49)**
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center space-x-2"
>
  <Camera className="h-8 w-8 text-primary-400" />
  <span className="text-xl font-bold gradient-text">ZM Studio</span>
</motion.div>
```
- Interactive logo with hover scaling animation
- Uses Camera icon from Lucide React
- "ZM Studio" text with gradient styling

### 3. **Smooth Scrolling Navigation (Lines 26-31)**
```tsx
const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  setIsMobileMenuOpen(false)
}
```
- Implements smooth scrolling to different sections
- Automatically closes mobile menu after navigation

### 4. **Mobile Menu (Lines 74-91)**
```tsx
{isMobileMenuOpen && (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    className="md:hidden glass-effect mt-2 rounded-lg"
  >
```
- Responsive mobile menu with smooth animations
- Only visible on screens smaller than medium (md) breakpoint

## Navigation Items (Lines 18-24)
```tsx
const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]
```

## CSS Classes Used

### Custom Classes (from globals.css)
- `glass-effect`: Creates backdrop blur with semi-transparent background
- `gradient-text`: Applies blue gradient to text
- `section-padding`: Consistent horizontal padding

### Tailwind Classes
- `fixed top-0 w-full z-50`: Fixed positioning at top with high z-index
- `transition-all duration-300`: Smooth transitions for state changes
- `hover:scale-1.05`: Hover scaling effect

## State Management
- `isScrolled`: Boolean to track scroll position
- `isMobileMenuOpen`: Boolean to control mobile menu visibility

## Animations
All animations use Framer Motion:
- **Initial load**: Slides down from top (`initial={{ y: -100 }}`)
- **Hover effects**: Scale animations on interactive elements
- **Mobile menu**: Opacity and height transitions

## Responsive Design
- Desktop: Horizontal navigation menu
- Mobile: Hamburger menu with dropdown
- Breakpoint: `md` (768px and above)

## Why This Approach?
1. **Performance**: Fixed positioning keeps navigation always accessible
2. **UX**: Glass effect provides depth without blocking content
3. **Accessibility**: Clear navigation labels and proper focus management
4. **Modern**: Smooth animations create professional feel 