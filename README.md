# ☕ Kalcer Coffee

> A premium specialty coffee website designed to deliver a warm, modern, and immersive digital coffee experience.

Kalcer Coffee is a modern specialty coffee website built with React, Tailwind CSS, and Framer Motion. The project focuses on premium visual design, smooth interactions, responsive layouts, and an editorial-inspired coffee brand experience.

---

## ✨ Features

- 🎨 Premium editorial-inspired coffee website design
- 📱 Fully responsive layout for desktop, tablet, and mobile
- 🎬 Smooth animations and transitions with Framer Motion
- 🧭 Sticky navigation with smooth section scrolling
- ☕ Interactive coffee menu section
- 🖼️ Editorial-style gallery
- 💬 Customer testimonials section
- 📍 Contact and location section
- 📸 Custom coffee photography and visual assets
- ⚡ Fast development and build workflow with Vite
- ♿ Accessible and user-friendly interface

---

## 🛠️ Tech Stack

### Frontend

- **React** — UI development
- **Vite** — Development environment and build tool
- **JavaScript (JSX)** — Application logic
- **Tailwind CSS** — Styling and responsive design
- **Framer Motion** — Animations and interactions
- **Lucide React** — Interface icons

### Development Tools

- Git
- GitHub
- VS Code
- npm

---

## 📂 Project Structure

```text
kalcer-coffee/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── about-bg.jpg
│   │       ├── coffee-1.jpg
│   │       ├── coffee-2.jpg
│   │       ├── coffee-3.jpg
│   │       ├── coffee-4.jpg
│   │       ├── cta-bg.jpg
│   │       ├── gallery-1.jpg
│   │       ├── gallery-2.jpg
│   │       ├── gallery-3.jpg
│   │       ├── hero-bg.jpg
│   │       └── menu-bg.jpg
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FeatureBar.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── Navbar.jsx
│   │   └── Testimonials.jsx
│   │
│   ├── data/
│   │   └── coffeeData.js
│   │
│   ├── lib/
│   │   └── motion.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/abereborn/kalcer-coffee-landing-page.git
```

### 2. Navigate to the project directory

```
cd kalcer-coffee-landing-page.git
``` 

### Install dependencies

```
npm install
```

### Start the development server

```
npm run dev
```

## 📦 Build for Production

To create a production build:
```
npm run build
```

To preview the production build locally:
```
npm run preview
```

## 🎨 Design Direction
Kalcer Coffee follows a warm editorial visual direction inspired by modern specialty coffee brands and contemporary cafe interiors.

### Visual Principles
- Minimal but not empty
- Warm but modern
- Premium but approachable
- Editorial but functional
- Natural materials and textures
- Cinematic but restrained animations

### Color Palette
- Espresso Brown
- Dark Chocolate
- Warm Beige
- Cream
- Caramel
- Muted Terracotta
- Natural Wood

### Typography
The interface combines elegant serif typography with clean modern sans-serif typography to create a balance between editorial character and usability.

## 📸 Visual Assets

The project uses custom-generated coffee photography created specifically for the Kalcer Coffee visual identity.

| Asset           | Usage                |
| --------------- | -------------------- |
| `hero-bg.jpg`   | Hero section         |
| `about-bg.jpg`  | About section        |
| `menu-bg.jpg`   | Menu section         |
| `coffee-1.jpg`  | Espresso             |
| `coffee-2.jpg`  | Cappuccino           |
| `coffee-3.jpg`  | Americano            |
| `coffee-4.jpg`  | Latte                |
| `gallery-1.jpg` | Coffee shop interior |
| `gallery-2.jpg` | Coffee preparation   |
| `gallery-3.jpg` | Coffee lifestyle     |
| `cta-bg.jpg`    | Final CTA section    |

## Coffee Menu

The website currently showcases:
- Espresso
- Americano
- Cappuccino
- Latte
- Mocha
- Caramel Macchiato

The menu data is separated into:
``
src/data/coffeeData.js
``
This makes it easier to update products and pricing without modifying the main UI components.

## 📱 Responsive Design

The website is designed to work across different screen sizes:

- Desktop
- Laptop
- Tablet
- Mobile

The layout, typography, navigation, images, and animations adapt according to the viewport size.

## 🧩 Component Architecture

The project uses a component-based React architecture.

Major sections are separated into reusable components:

- Navbar
- Hero
- FeatureBar
- About
- Menu
- Gallery
- Testimonials
- Contact
- Footer

This keeps the application modular and makes individual sections easier to maintain and update.

## 🎞️ Animation

Framer Motion is used to create subtle interactions and transitions throughout the website.

Animations include:

- Scroll-based reveals
- Section entrance animations
- Hover interactions
- Image transitions
- Navigation transitions
- Gallery interactions
- CTA animations

The goal is to enhance the experience without overwhelming the content.

## 🔮 Future Improvements

Potential improvements for future versions:

- Online coffee ordering
- Shopping cart functionality
- Product detail pages
- Payment integration
- Backend API integration
- Customer authentication
- Admin dashboard
- CMS integration
- Coffee subscription system
- Deployment with custom domain

### 👨‍💻 Author

## Afan Baihaqi

Frontend Developer focused on building modern, interactive, and visually polished web experiences.

### 📄 License

This project is created for portfolio and educational purposes.
