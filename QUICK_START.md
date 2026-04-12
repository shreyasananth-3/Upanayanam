# ⚡ Quick Start Guide

## The Absolute Fastest Way to Deploy

### Option 1: Deploy to Vercel (30 seconds)

```bash
# 1. Install Vercel CLI (one time)
npm install -g vercel

# 2. Deploy from project directory
vercel

# 3. Follow prompts, hit enter for defaults
# 4. Your site goes LIVE! 🚀
```

**That's it!** Your live URL will be something like: `https://upanayanam.vercel.app`

---

### Option 2: Git Push to Vercel (1 minute)

```bash
# 1. Initialize git (one time)
git init
git add .
git commit -m "Deva's Brahmopadesham website"

# 2. Create repo on GitHub (or GitLab)
# 3. Push code
git push -u origin main

# 4. Go to https://vercel.com/new
# 5. Import your repo
# 6. Click Deploy
```

---

### Option 3: Run Locally

```bash
# Install dependencies (one time)
npm install

# Start dev server
npm run dev

# Open browser: http://localhost:3000
# Changes auto-reload!
```

---

## Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

---

## Share the Link

Once deployed, share your live URL with guests:

```
✨ Join us for Deva's Brahmopadesham Ceremony
https://your-domain.vercel.app
```

---

## Customize the Content

Edit `src/data/eventData.js` to update:
- Names, dates, times
- Venue details
- Family members

Changes appear instantly in dev mode!

---

## Need Help?

1. **Dev server won't start?**
   ```bash
   npm install
   npm run dev
   ```

2. **Build fails?**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

3. **Questions?**
   - See `DEPLOYMENT.md` for detailed guide
   - Check `README.md` for full documentation

---

## That's All!

Your sacred ceremony website is now ready. Share the link and watch your guests be amazed.

**Hari Om Tat Sat** 🕉️
