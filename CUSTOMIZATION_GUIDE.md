# 🌷 Romantic Wedding Website - Customization Guide

Welcome! This guide will help you customize the website with your own content. Everything is easy to modify!

## 📝 Quick Customization

### 1. Change the Passcode

Edit `script.js` and find this line:

```javascript
PASSCODE: '1234',
```

Change `'1234'` to your desired passcode. For example:

```javascript
PASSCODE: '0704', // Your wedding date
```

### 2. Replace the Love Letter

In `script.js`, find the `LETTER` configuration:

```javascript
LETTER: `My Dearest Love,

Today marks the beginning of our forever...`
```

Replace this text with your heartfelt love letter.

### 3. Add Your Photos

Replace placeholder images:

```javascript
imageUrl: 'https://via.placeholder.com/300x300?text=Our+Photo+1',
```

Change to your image URL from Imgur, Google Drive, or any image host.

### 4. Add Background Music

Update in `script.js`:

```javascript
MUSIC_URL: 'music.mp3',
```

And in `index.html`:

```html
<audio id="backgroundMusic" loop>
    <source src="your-music.mp3" type="audio/mpeg">
</audio>
```

## 🚀 Deploy to GitHub Pages

1. Go to Settings → Pages
2. Select "Deploy from a branch"
3. Choose main branch, /root folder
4. Your site: https://siwipiwi6-ux.github.io/Sand/

## 📱 Mobile Responsive

Fully responsive - no changes needed!

---

Made with ❤️ for your special day 🌷
