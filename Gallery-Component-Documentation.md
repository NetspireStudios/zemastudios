# Gallery Component Documentation

## Overview
The Gallery component is a beautiful showcase of wedding photography using a masonry-style grid layout with hover effects and a lightbox feature. It's designed to make your wedding photos the star of the show.

## File Location
```
app/components/Gallery.tsx
```

## Key Features

### 1. **Masonry Grid Layout (Lines 43-49)**
```tsx
const images = [
  {
    src: '/images/Wedphoto1.png',
    alt: 'Beautiful wedding ceremony capture',
    span: 'md:col-span-2 md:row-span-2'
  },
  // ... more images
]
```
- Dynamic grid where images take different sizes
- Featured image (Wedphoto1) takes 2x2 grid space
- Other images take 1x1 or 2x1 spaces for visual variety

### 2. **Grid CSS Implementation (Lines 60-63)**
```tsx
<motion.div 
  className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]"
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
  transition={{ duration: 1, delay: 0.3 }}
>
```
- Responsive: 1 column on mobile, 3 columns on desktop
- `auto-rows-[200px]`: Each row is 200px tall
- Custom span classes create visual hierarchy

### 3. **Interactive Image Cards (Lines 65-86)**
```tsx
<motion.div
  key={index}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={inView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  className={`${image.span} relative group cursor-pointer overflow-hidden rounded-lg`}
  onClick={() => setSelectedImage(image.src)}
>
```
- Staggered entrance animations (each image delayed by 0.1s)
- Hover scaling effect on images
- Click opens lightbox modal

### 4. **Hover Overlay Effects (Lines 75-81)**
```tsx
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <p className="text-sm font-medium">{image.alt}</p>
</div>
```
- Gradient overlay appears on hover
- Image description text appears from bottom
- Smooth opacity transitions

### 5. **Image Zoom Effect (Line 72)**
```tsx
className="object-cover transition-transform duration-500 group-hover:scale-110"
```
- Subtle zoom effect on image hover
- 500ms transition for smooth scaling

### 6. **Lightbox Modal (Lines 88-112)**
```tsx
{selectedImage && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
```
- Full-screen modal overlay
- Click outside image closes modal
- Smooth fade in/out animations

### 7. **Intersection Observer Integration (Lines 10-14)**
```tsx
const { ref, inView } = useInView({
  threshold: 0.1,
  triggerOnce: true
})
```
- Animations trigger when section comes into view
- `triggerOnce: true` ensures animations don't repeat
- `threshold: 0.1` triggers when 10% of section is visible

## Image Configuration
```tsx
const images = [
  { src: '/images/Wedphoto1.png', alt: 'Beautiful wedding ceremony capture', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/Wedphoto2.png', alt: 'Romantic couple portrait', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/Wedphoto3.png', alt: 'Wedding reception moments', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/Wedphoto4.png', alt: 'Intimate wedding details', span: 'md:col-span-2 md:row-span-1' },
  { src: '/images/wedphoto5.png', alt: 'Celebration and joy', span: 'md:col-span-1 md:row-span-1' }
]
```

## CSS Classes Used

### Custom Classes
- `section-padding`: Consistent horizontal spacing
- `gradient-text`: Blue gradient for section title

### Tailwind Classes
- `grid grid-cols-1 md:grid-cols-3`: Responsive grid system
- `gap-4`: Consistent spacing between grid items
- `auto-rows-[200px]`: Custom row height
- `group`: Enables group hover effects
- `hover:scale-110`: Hover zoom effect

## State Management
- `selectedImage`: String | null to control lightbox modal
- `inView`: Boolean from Intersection Observer for animations

## Animation Sequence
1. **Section enters view**: Title and description fade in
2. **Grid appears**: Fade in with 0.3s delay
3. **Images animate**: Staggered entrance (0.1s between each)
4. **Hover interactions**: Scale and overlay effects
5. **Lightbox**: Smooth modal transitions

## Grid Layout Breakdown
```
Desktop (md and up):
┌─────────────┬─────┬─────┐
│             │  2  │  3  │
│      1      ├─────┼─────┤
│  (2x2)      │     │  5  │
│             │  4 (2x1)  │
└─────────────┴─────┴─────┘

Mobile:
┌─────────────┐
│      1      │
├─────────────┤
│      2      │
├─────────────┤
│      3      │
├─────────────┤
│      4      │
├─────────────┤
│      5      │
└─────────────┘
```

## Responsive Behavior
- **Mobile**: Single column, all images same size
- **Tablet/Desktop**: Masonry layout with varying sizes
- **Image aspect ratios**: Maintained using `object-cover`

## Accessibility Features
- **Alt text**: Descriptive text for all images
- **Keyboard navigation**: Modal can be closed with click
- **Focus management**: Clear visual hierarchy

## User Experience Benefits
1. **Visual Impact**: Masonry layout creates dynamic composition
2. **Exploration**: Hover effects encourage interaction
3. **Detail Viewing**: Lightbox allows full-size image viewing
4. **Performance**: Intersection Observer prevents unnecessary animations
5. **Mobile Friendly**: Responsive design works on all devices

## Why This Design Works
- **Portfolio Focus**: Images are the primary content
- **Professional Layout**: Masonry grid feels sophisticated
- **Interactive Elements**: Hover effects add engagement
- **Modern UX**: Lightbox modal is expected behavior
- **Performance Optimized**: Lazy loading and optimized animations 