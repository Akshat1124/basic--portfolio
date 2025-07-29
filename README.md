# Akshat's Developer Portfolio 🚀

A modern, dynamic, and fully responsive developer portfolio website built from scratch with vanilla HTML, CSS, and JavaScript. Features a beautiful dark/light theme toggle, smooth animations, and an engaging user experience.

## ✨ Features

### 🎨 Design & Theme
- **Dark/Light Theme Toggle**: Seamless switching between themes with smooth transitions
- **Inter Font Family**: Clean, modern typography throughout the site
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with subtle animations

### 🚀 Dynamic Elements
- **Typing Animation**: Live code snippets in the hero section
- **Smooth Scrolling**: Navigation with active section highlighting
- **Parallax Effects**: Subtle depth and movement on scroll
- **Particle Background**: Floating elements for visual appeal
- **Hover Animations**: Interactive buttons and cards

### 📱 Interactive Components
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Contact Form**: Functional form with validation and feedback
- **Project Showcase**: Grid layout with hover effects and project details
- **Skills Display**: Organized technology skills with icons
- **Social Links**: Connected social media profiles

### 🎭 Creative Elements
- **Emoji Integration**: Instead of personal photos, uses expressive emojis
- **Free Stock Images**: High-quality images from Unsplash for projects
- **Animated Icons**: Font Awesome icons with hover effects
- **Loading Animation**: Beautiful page loading experience

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript ES6+**: Interactive functionality and dynamic content
- **Font Awesome**: Icon library for social media and UI elements
- **Google Fonts**: Inter font family for consistent typography
- **Unsplash**: Free high-quality images for project showcases

## 📁 Project Structure

```
Akshat Portfolio/
├── index.html              # Main HTML file
├── styles/
│   ├── main.css            # Main stylesheet
│   └── themes.css          # Theme variables and dark/light mode
├── js/
│   ├── main.js             # Core functionality
│   └── animations.js       # Advanced animations and effects
└── README.md              # Project documentation
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Akshat Portfolio"
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have serve installed)
   npx serve .
   ```

3. **Customize the content**
   - Update personal information in `index.html`
   - Modify colors and styling in `styles/themes.css`
   - Add your own projects and skills
   - Replace contact information with your details

## 🎯 Key Sections

### Hero Section
- Dynamic greeting with wave animation
- Typing animation showcasing code snippets
- Call-to-action buttons
- Particle background effect

### About Me
- Three key aspects with emoji icons
- Clean card-based layout
- Scroll animations on reveal

### Skills & Technologies
- Organized by Frontend, Backend, and Tools
- Interactive skill items with hover effects
- Technology icons from Font Awesome

### Featured Projects
- Project cards with image overlays
- Technology tags for each project
- Live demo and source code links
- Responsive grid layout

### Contact Section
- Working contact form with validation
- Multiple contact methods
- Social media links
- Copy-to-clipboard functionality for email

## 🎨 Customization Guide

### Changing Colors
Edit the CSS variables in `styles/themes.css`:
```css
:root {
    --primary-color: #6366f1;    /* Change main brand color */
    --accent-color: #8b5cf6;     /* Change accent color */
    --bg-color: #ffffff;         /* Change background */
}
```

### Adding New Projects
In `index.html`, add a new project card:
```html
<div class="project-card">
    <div class="project-image">
        <img src="your-image-url" alt="Project Name">
        <!-- ... rest of project card structure -->
    </div>
</div>
```

### Modifying Animations
Adjust animation timings and effects in `js/animations.js`:
- Typing speed for code animation
- Particle creation frequency
- Scroll animation triggers

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## ⚡ Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Animations**: RequestAnimationFrame for smooth performance
- **Efficient Event Handling**: Debounced scroll events
- **Minimal Dependencies**: Pure vanilla JavaScript

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you make improvements, consider submitting a pull request.

## 📧 Contact

- **Email**: hello@akshat.dev
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]
- **Twitter**: [Your Twitter Profile]

---

Made with ❤️ and lots of ☕ by Akshat

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your portfolio will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy with default settings
3. Your portfolio will be live with a custom domain option

### Vercel
1. Import your GitHub repository to Vercel
2. Deploy with zero configuration
3. Automatic deployments on every push

## 🔄 Updates & Maintenance

- Regularly update project showcases
- Add new skills as you learn them
- Update contact information as needed
- Keep dependencies and images optimized
- Monitor site performance and accessibility

Enjoy your new portfolio! 🎉
