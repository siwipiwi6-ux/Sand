# 🌷 Romantic Wedding Website

A beautiful, interactive, mobile-friendly website to create a memorable wedding day experience. Featuring a passcode-protected love letter, animated tulip petals, a vintage sketchbook with page-turning effects, and romantic animations throughout.

## ✨ Features

- 🔐 **Passcode Protection** - Secure the surprise with a custom passcode
- 💌 **Sealed Envelope** - Tap to open and reveal the magic inside
- 🌷 **Falling Petals** - Realistic tulip petals and sparkles animation
- 📖 **Interactive Sketchbook** - Smooth page-turning book experience
- 💕 **Love Letter** - Heartfelt message on the first page
- 📸 **Photo Gallery** - Add your favorite memories with captions
- 🎵 **Background Music** - Soft romantic music throughout
- 📱 **Mobile First** - Fully responsive and touch-friendly
- 🎨 **Romantic Aesthetic** - Soft cream, beige, and pastel colors
- ✨ **Premium Animations** - Smooth, elegant transitions throughout

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Customize** your content (see guide below)
3. **Test** locally by opening `index.html` in a browser
4. **Deploy** to GitHub Pages (free!) or any hosting service

## 📝 Customization

### Change Passcode
Edit `script.js`:
```javascript
PASSCODE: '1234',  // Change to your code
```

### Update Love Letter
Edit the `LETTER` in `script.js`:
```javascript
LETTER: `Your heartfelt message here...`,
```

### Add Photos
Update image URLs in the `PAGES` array:
```javascript
imageUrl: 'https://your-image-url.jpg',
```

### Add Background Music
Update the music file and URL in both `script.js` and `index.html`:
```javascript
MUSIC_URL: 'music.mp3',
```

### Customize Pages
Modify the `PAGES` array to add, remove, or edit pages with different content types: `letter`, `photo`, `text`, `decoration`, `final`, or `celebration`.

**See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) for detailed instructions!**

## 🎨 Color Palette

The website uses a romantic color scheme:
- **Cream**: `#FFF8F0`
- **Beige**: `#F5E6D3`
- **Soft Pink**: `#F4D9D0`
- **Pastel Pink**: `#FFD1DC`
- **Rose**: `#E8A8A8`
- **Gold**: `#D4AF8A`

Easily customize colors in `styles.css` `:root` variables.

## 📱 Responsive Design

- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (up to 480px)
- ✅ Touch gestures (swipe to turn pages)
- ✅ Keyboard navigation (arrow keys)

## 🌐 Deployment

### GitHub Pages (FREE & RECOMMENDED)

1. Go to repo **Settings** → **Pages**
2. Select **Deploy from a branch**
3. Choose `main` branch and `/root`
4. Save - done! 🎉

Your site will be live at: `https://yourusername.github.io/Sand/`

### Other Options
- **Netlify**: Connect GitHub repo, auto-deploys
- **Vercel**: Similar to Netlify
- **Firebase Hosting**: Google's service
- **Local**: Just open `index.html` in browser

## 📂 File Structure

```
Sand/
├── index.html                    # Main HTML structure
├── styles.css                    # Styling and animations
├── script.js                     # Interactive functionality & config
├── music.mp3                     # Background music (add your own)
├── CUSTOMIZATION_GUIDE.md        # Detailed customization help
└── README.md                     # This file
```

## 🎯 User Experience Flow

1. **Passcode Screen** - Enter the secret code
2. **Envelope** - Sealed love letter appears, tap to open
3. **Petal Animation** - Falling tulips and sparkles
4. **Sketchbook** - Opens to your love letter
5. **Page Turning** - Flip through memories and messages
6. **Final Page** - Bouquet with wedding day message
7. **Celebration** - Floating hearts and more petals

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern animations and gradients
- **Vanilla JavaScript** - No dependencies, lightweight
- **Responsive Design** - Mobile-first approach

## 💡 Usage Tips

### For Maximum Impact
- ✨ Open on the wedding day in a quiet, intimate moment
- 🎵 Use soft, romantic background music (sample: search "royalty-free romantic piano")
- 📸 Use high-quality photos of your best memories
- 💌 Write a genuine, heartfelt love letter
- 📱 Test on mobile before sharing

### Adding Images
Free image hosting options:
- **Imgur**: Quick upload, no signup needed
- **GitHub**: Upload directly to repo
- **Google Drive**: Make publicly shareable
- **Pixabay/Unsplash**: Free stock photos

### Finding Music
Free music sources:
- **Pixabay Music**: pixabay.com/music
- **YouTube Audio Library**: youtube.com/audiolibrary
- **Free Music Archive**: freemusicarchive.org
- **Incompetech**: incompetech.com

## 🎁 Perfect For

- 💍 Wedding day gifts
- 🎂 Anniversary celebrations
- 💑 Engagements
- 🎉 Special occasions
- 💕 Long-distance relationships
- 🌹 Any romantic surprise

## 📄 License

Free to use and customize for personal use.

## 🤝 Contributing

Love improvements? Feel free to fork and customize!

## 💌 Credits

Made with ❤️ for your special day 🌷

---

**Questions?** See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) for detailed help!

Happy Wedding Day! 💕✨🌷
