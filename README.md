# Trade Premier League - Challenges App

A modern React.js mobile application built to match the Figma design for Trade Premier League's challenges feature.

## Features

- **Responsive Mobile Design**: Pixel-perfect implementation of the Figma mobile design
- **Modern React Architecture**: Built with React 18 and functional components
- **Tailwind CSS Styling**: Utility-first CSS framework for rapid development
- **Component-Based Structure**: Modular and reusable components
- **Professional Folder Structure**: Organized codebase following best practices

## Project Structure

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   └── index.js
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.css
├── assets/ (images, icons from Figma)
├── utils/ (helper functions)
├── App.jsx
├── index.js
└── index.css
```

## Components

### Header Component

- Status bar with time, signal, WiFi, and battery indicators
- Navigation with back button, page title, and wallet information
- Notification bell icon
- Responsive design matching Figma specifications

### Home Page

- Hero card with "Weekly Master" promotion
- Profile section with avatar and pagination dots
- Challenges list with detailed cards
- Bottom navigation bar
- Progress indicators and interactive elements

## Design System

### Colors

- Primary Dark: `#1C2127`
- Primary Light: `#FFFFFF`
- Accent: `#FFC107`
- Secondary: `#859AB7`
- Success: `#FBC700`
- Warning: `#FFA812`
- Error: `#B96072`
- Info: `#733C8A`

### Typography

- Primary Font: Inter (400, 500, 600, 700)
- Secondary Font: Archivo (400)

### Spacing & Layout

- Mobile-first responsive design
- 390px max-width container
- Consistent 8px grid system
- Rounded corners: 8px, 16px, 20px

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd trade-premier-league-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer
- **ESLint**: Code linting and formatting

## Design Implementation

This project implements the mobile design from the Figma file:

- **File**: TRADE PREMIER LEAGUE (TPL)
- **Node ID**: 239-791 (Challenges page)
- **Design System**: Pixel-perfect implementation with exact colors, typography, and spacing
- **Assets**: All images and icons downloaded directly from Figma

## Code Quality

- **ESLint Configuration**: Follows React best practices
- **Component Architecture**: Modular and reusable components
- **CSS Organization**: Tailwind utilities with custom CSS for complex layouts
- **Responsive Design**: Mobile-first approach with proper breakpoints

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License - see LICENSE file for details
