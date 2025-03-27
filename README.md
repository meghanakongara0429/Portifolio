# Personal Portfolio Website

A modern, responsive portfolio website built with React.js and styled with CSS. This portfolio showcases my projects, skills, and professional information with a sleek dark theme design.

## Features

- 🎨 Modern dark theme with pink accent colors
- 📱 Fully responsive design for all devices
- ⚡ Smooth animations and transitions
- 🎯 Interactive project cards
- 📝 Contact form with Google Maps integration
- 🔗 Social media integration
- 📄 Downloadable CV option

## Technologies Used

- React.js
- CSS3 (with CSS Variables)
- Font Awesome Icons
- Google Maps API
- React Router

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/meghanakongara0429/Portifolio

2. Navigate to the project directory
```bash
cd portfolio
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── project-images/
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   ├── Navbar.js
│   │   ├── Projects.js
│   │   └── Footer.js
│   ├── assets/
│   │   └── profile.jpeg
│   ├── App.js
│   └── index.js
└── package.json
```

## Customization

### Colors
The website uses CSS variables for easy color customization. You can modify the colors in `src/App.css`:

```css
:root {
  --background-dark: #0a0a0a;
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --accent-color: #ff014f;
  --accent-color-light: #ff4d7e;
  --card-bg: #1a1a1a;
  --border-color: rgba(255, 1, 79, 0.2);
}
```

### Content
- Update personal information in respective component files
- Add your projects in `src/components/Projects.js`
- Modify social media links in `src/components/Contact.js`
- Update your profile picture in `src/assets/profile.jpeg`

## Deployment

The website can be deployed to any static hosting service. For GitHub Pages:

1. Add homepage to package.json:
```json
{
  "homepage": "https://github.com/meghanakongara0429/Portifolio"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Meghana Kongara - [meghanakongara0429@gmail.com](mailto:meghanakongara0429@gmail.com)

Project Link: [https://github.com/meghanakongara0429/Portifolio](https://github.com/meghanakongara0429/Portifolio)

## Acknowledgments

- Font Awesome for icons
- Google Maps for location integration
- React.js community for resources and support
