# Center Alignment Update

## Overview
Updated all sections across the VAYRA landing page to use `max-w-7xl` instead of `max-w-screen-xl` for consistent center alignment and proper content width.

## Changes Made

### Max Width Update
- **Before**: `max-w-screen-xl` (1280px)
- **After**: `max-w-7xl` (1280px with better Tailwind standardization)

### Components Updated

1. **Hero Section** (`components/hero/Hero.tsx`)
   - Container: `max-w-7xl mx-auto`
   - Ensures hero content is centered with consistent width

2. **Mission Section** (`components/sections/Mission.tsx`)
   - Container: `max-w-7xl mx-auto`
   - Two-column layout properly centered

3. **CaseForNow Section** (`components/sections/CaseForNow.tsx`)
   - Container: `max-w-7xl mx-auto`
   - Three-column grid centered

4. **Problem Section** (`components/sections/Problem.tsx`)
   - Container: `max-w-7xl mx-auto`
   - Two-column sticky layout centered

5. **Products Section** (`components/sections/Products.tsx`)
   - Container: `max-w-7xl mx-auto`
   - Product cards grid centered

6. **Stats Section** (`components/sections/Stats.tsx`)
   - Container: `max-w-7xl mx-auto`
   - Statistics grid centered

7. **Vision Section** (`components/sections/Vision.tsx`)
   - Container: `max-w-7xl mx-auto`
   - Typewriter effect and module list centered

8. **Team Section** (`components/sections/Team.tsx`)
   - Container: `max-w-7xl mx-auto`
   - Founder cards grid centered

9. **SupportedBy Section** (`components/sections/SupportedBy.tsx`)
   - Container: `max-w-7xl mx-auto`
   - Support badge centered

10. **Contact Section** (`components/sections/Contact.tsx`)
    - Container: `max-w-7xl mx-auto`
    - Two-column contact layout centered

11. **Footer Section** (`components/sections/Footer.tsx`)
    - Container: `max-w-7xl mx-auto`
    - Footer content centered

## Benefits

### 1. **Consistent Center Alignment**
- All content is now perfectly centered on the page
- Uniform maximum width across all sections
- Professional, balanced appearance

### 2. **Better Responsive Behavior**
- Content scales consistently across all screen sizes
- Proper margins on ultra-wide displays
- Maintains readability on all devices

### 3. **Tailwind Best Practices**
- Using Tailwind's standard max-width utilities
- Better integration with Tailwind's design system
- More maintainable and predictable

### 4. **Visual Hierarchy**
- Clear content boundaries
- Easier to scan and read
- Professional editorial layout

## Technical Details

### Container Pattern
```tsx
<section className="section-padding section-padding-y">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Key Classes
- `max-w-7xl`: Maximum width of 80rem (1280px)
- `mx-auto`: Horizontal margin auto for centering
- `section-padding`: Consistent horizontal padding
- `section-padding-y`: Consistent vertical padding

## Verification

✅ All 11 components updated
✅ No remaining `max-w-screen-xl` instances
✅ All sections use `max-w-7xl mx-auto`
✅ Consistent center alignment throughout

## Visual Result

The website now has:
- Perfectly centered content on all screen sizes
- Consistent maximum width across all sections
- Professional, balanced layout
- Better visual hierarchy and readability
- Proper spacing on ultra-wide displays
