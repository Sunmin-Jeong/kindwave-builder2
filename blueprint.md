# Lotto Number Generator - Project Blueprint

## Project Overview
A clean, modern web application that generates random lotto numbers (1-45) and maintains a history of generated sets.

## Features
- **Random Number Generation**: Generates 6 unique numbers between 1 and 45.
- **Sorted Display**: Numbers are displayed in ascending order.
- **History Tracking**: Keeps track of previously generated sets.
- **Persistence**: Uses `localStorage` to save history and theme preference.
- **Theme Switching**: Support for Light Mode and Dark Mode.

## Design
- **Typography**: Roboto font for a clean, professional look.
- **Color Palette**: 
  - Primary: #4CAF50 (Green)
  - Secondary: #FFC107 (Amber)
  - Light Background: #f0f0f0
  - Dark Background: #1a1a1a
- **Interactivity**: 
  - Hover effects on numbers.
  - Smooth transitions between themes.
  - Responsive design for mobile and desktop.

## Technical Implementation
- **HTML5**: Semantic structure.
- **CSS3**: CSS Variables for easy theming, Flexbox for layout.
- **JavaScript**: Vanilla JS for logic, DOM manipulation, and `localStorage`.

## Recent Updates
- Added theme toggle (Light/Dark mode).
- Implemented persistent theme settings.
- Updated styles for better accessibility in both modes.
