# Deva's Brahmopadesham Website - Deployment Guide

This is a premium invitation website for a sacred Brahmopadesham ceremony. It's built with React, Vite, React Three Fiber, Framer Motion, and Tailwind CSS.

## Technology Stack

- **React 19** - Modern UI framework
- **Vite 5** - Lightning-fast build tool
- **React Three Fiber** - 3D graphics using Three.js
- **Framer Motion** - Smooth animations and scroll-driven effects
- **Tailwind CSS** - Utility-first styling
- **Web Audio API** - Synthesized temple bell sound

## Features

✨ **Cinematic Design** - Apple product launch aesthetic with gold/cream/black
🎬 **Scroll Animations** - Scroll-driven animations throughout the site
🕉️ **3D Temple Scene** - Interactive 3D rendered temple using Three.js
🔔 **Synthesized Audio** - Temple bell sound generated with Web Audio API
📱 **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
🚀 **Performance Optimized** - Code-split bundles, optimized assets

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Server will be available at http://localhost:3000

### Production Build

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

## Deployment to Vercel

### Method 1: Git Push (Recommended)

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Deva's Brahmopadesham website"

# Push to GitHub
git remote add origin <your-github-repo-url>
git push -u origin main
```

Then connect your GitHub repo to Vercel:
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel automatically detects Vite and configures everything
4. Deploy with one click!

### Method 2: Direct Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow the prompts and your site will be live!
```

### Method 3: Docker Deploy

```bash
# Build image
docker build -t brahmopadesham .

# Run container
docker run -p 3000:3000 brahmopadesham
```

## Environment Variables

No environment variables are required for basic functionality. The website is static and self-contained.

## File Structure

```
/
├── src/
│   ├── components/          # React components
│   ├── sections/            # Page sections (Hero, About, Schedule, etc.)
│   ├── 3d/                  # Three.js scene and 3D components
│   ├── data/                # Event data configuration
│   ├── utils/               # Utility functions (audio synthesis)
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── vercel.json             # Vercel deployment config
```

## Customization

### Event Data

Edit `src/data/eventData.js` to update:
- Ceremony details
- Family members
- Schedule and venue
- Gayatri Mantra text

### Colors & Styling

Edit `tailwind.config.js` to customize:
- Gold color palette
- Fonts (currently using Google Fonts)
- Custom animations and keyframes

### 3D Scene

Edit `src/3d/TempleScene.jsx` to modify:
- Temple geometry
- Light positions
- Material properties
- Floating orbs

### Audio

Edit `src/utils/audioSynthesis.js` to adjust:
- Bell frequencies and duration
- Envelope (attack, sustain, release)
- Filter characteristics

## Performance Optimizations

- ✅ Code splitting with route-based chunks
- ✅ Image optimization and lazy loading
- ✅ CSS tree-shaking with Tailwind
- ✅ Minified and gzipped output
- ✅ Three.js bundle size optimized

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Dev server won't start?**
```bash
npm install
npm run dev
```

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**3D scene not rendering?**
- Check browser WebGL support
- Ensure JavaScript is enabled
- Try a different browser

## Support & Maintenance

- Update React/Vite dependencies periodically
- Monitor bundle size with `npm run build`
- Test on mobile devices regularly
- Keep Vercel deployment updated

## License & Attribution

Created for Deva's sacred Brahmopadesham ceremony. Use this template freely for other occasions.

---

**Questions?** Contact the development team or your deployment administrator.

**Once deployed, share the live URL with your guests!** 🙏
