# Pasta Burger - Restaurant Website

## Overview

Pasta Burger is a modern restaurant website showcasing a unique fusion of Italian pasta and classic American burgers. This React-based application features a responsive design with smooth navigation and appealing visuals.

## Features

- Responsive design for all device sizes
- Smooth scrolling navigation
- Interactive menu section
- Clean, modern UI with Tailwind CSS
- Component-based architecture

## Technologies Used

- React 18
- Tailwind CSS
- Vite (Build Tool)
- React DOM

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pasta-burger.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pasta-burger
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure

```
pastaburger/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       └── styles/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles/
│       └── main.css
├── package.json
└── README.md
```

## Available Scripts

- `npm run start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm run preview`: Previews the production build

## Customization

To modify styles:
1. Edit the Tailwind CSS configuration in `tailwind.config.js`
2. Add custom styles in `src/styles/main.css`

To add new components:
1. Create new files in the `src/components` directory
2. Import and use them in `App.jsx`

## License

This project is open-source and available under the MIT License.
