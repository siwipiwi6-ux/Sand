/* ============================================
   ROMANTIC WEDDING WEBSITE - JAVASCRIPT
   Interactive experience manager
   ============================================ */

// ============================================
// CONFIGURATION - EASY TO CUSTOMIZE
// ============================================

const CONFIG = {
    // Passcode - Change this to your desired passcode
    PASSCODE: '1234',

    // Background music URL - Update this with your music file path
    MUSIC_URL: 'music.mp3',

    // Love letter content
    LETTER: `My Dearest Love,

Today marks the beginning of our forever, and I cannot find the words adequate to express the depth of my love for you.

From the moment you entered my life, everything changed. You brought color to my world, laughter to my days, and peace to my heart. Every moment with you feels like a beautiful dream I never want to wake from.

You are my greatest adventure, my truest friend, and my soulmate. I promise to love you faithfully, to support your dreams, to laugh with you in joy and stand with you through challenges, and to cherish every single moment we share together.

Thank you for saying yes to this journey. I cannot wait to spend the rest of my life building memories with you.

Forever yours,
Your Love ❤️`,

    // Pages configuration - each page has left and right content
    PAGES: [
        {
            // Page 1 - Love letter (Left) and decoration (Right)
            left: {
                type: 'letter',
                title: '💌 Our Love Letter',
            },
            right: {
                type: 'decoration',
                emoji: '🌷',
                text: 'Forever Starts Today',
            }
        },
        {
            // Page 2 - Photo and caption example
            left: {
                type: 'photo',
                title: 'Our Journey Begins',
                imageUrl: 'https://via.placeholder.com/300x300?text=Our+Photo+1',
                caption: 'The moment I knew you were the one.'
            },
            right: {
                type: 'photo',
                title: 'Made for Each Other',
                imageUrl: 'https://via.placeholder.com/300x300?text=Our+Photo+2',
                caption: 'Together, we are unstoppable.'
            }
        },
        {
            // Page 3 - More photos
            left: {
                type: 'photo',
                title: 'Moments Like These',
                imageUrl: 'https://via.placeholder.com/300x300?text=Our+Photo+3',
                caption: 'Laughing, loving, and living our best life together.'
            },
            right: {
                type: 'photo',
                title: 'Forever and Always',
                imageUrl: 'https://via.placeholder.com/300x300?text=Our+Photo+4',
                caption: 'My heart belongs to you.'
            }
        },
        {
            // Page 4 - Custom message
            left: {
                type: 'text',
                title: '💕 To My Love',
                text: 'You are my today and all of my tomorrows. Thank you for being mine.'
            },
            right: {
                type: 'text',
                title: '✨ Forever Yours',
                text: 'In your eyes, I found my home. In your heart, I found my love. In your arms, I found my peace.'
            }
        },
        {
            // Final page - Bouquet and message
            left: {
                type: 'final',
                title: 'Our Story Continues',
                emoji: '🌷',
                message: 'Our story is only beginning.\n\nHappy Wedding Day, my love. ❤️'
            },
            right: {
                type: 'celebration',
                emoji: '✨💕✨',
                text: 'To infinite moments together, infinite love, and infinite happiness.'
            }
        }
    ]
};

// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
    currentPage: 0,
    isFirstOpen: true,
};

// ============================================
// PASSCODE SCREEN
// ============================================

const passcodeInput = document.getElementById('passcodeInput');
const passcodeError = document.getElementById('passcodeError');

passcodeInput.addEventListener('input', (e) => {
    const value = e.target.value;
    
    // Update indicators
    for (let i = 0; i < 6; i++) {
        const indicator = document.getElementById(`indicator${i}`);
        if (i < value.length) {
            indicator.classList.add('filled');
        } else {
            indicator.classList.remove('filled');
        }
    }

    // Check if correct passcode
    if (value === CONFIG.PASSCODE) {
        passcodeError.textContent = '';
        setTimeout(() => {
            transitionToScreen('envelopeScreen');
            playBackgroundMusic();
        }, 300);
    }
});

passcodeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (passcodeInput.value !== CONFIG.PASSCODE) {
            passcodeError.textContent = '❌ Incorrect passcode. Try again!';
            passcodeInput.value = '';
            document.querySelectorAll('.dot').forEach(d => d.classList.remove('filled'));
            passcodeInput.focus();
        }
    }
});

// Focus on page load
window.addEventListener('load', () => {
    passcodeInput.focus();
});

// ============================================
// SCREEN TRANSITIONS
// ============================================

function transitionToScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ============================================
// ENVELOPE INTERACTION
// ============================================

const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        triggerPetalAnimation();
    }, 600);
});

// ============================================
// PETAL ANIMATION
// ============================================

function triggerPetalAnimation() {
    transitionToScreen('petalsScreen');
    const petalsContainer = document.getElementById('petalsContainer');
    petalsContainer.innerHTML = '';

    // Generate falling petals
    const petalCount = 30;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = '🌷';
        
        const startX = Math.random() * 100;
        const duration = 2 + Math.random() * 1;
        const delay = i * 0.05;
        const rotation = Math.random() * 360;
        
        petal.style.left = startX + '%';
        petal.style.top = '-50px';
        petal.style.animation = `petalFall ${duration}s linear ${delay}s forwards`;
        petal.style.setProperty('--rotation', rotation + 'deg');
        
        petalsContainer.appendChild(petal);
    }

    // Generate sparkles
    const sparkleCount = 20;
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = '✨';
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;
        
        sparkle.style.left = startX + '%';
        sparkle.style.top = startY + '%';
        sparkle.style.setProperty('--tx', tx + 'px');
        sparkle.style.setProperty('--ty', ty + 'px');
        
        petalsContainer.appendChild(sparkle);
    }

    // Transition to sketchbook after animation
    setTimeout(() => {
        initializeSketchbook();
        transitionToScreen('sketchbookScreen');
    }, 2500);
}

// ============================================
// SKETCHBOOK INITIALIZATION
// ============================================

function initializeSketchbook() {
    state.currentPage = 0;
    renderPage(0);
}

function renderPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= CONFIG.PAGES.length) return;

    state.currentPage = pageIndex;
    const pageConfig = CONFIG.PAGES[pageIndex];

    // Render left page
    const leftPage = document.getElementById('leftPage');
    leftPage.classList.remove('turn-left', 'turn-right');
    leftPage.querySelector('.page-content').innerHTML = renderPageContent(pageConfig.left);

    // Render right page
    const rightPage = document.getElementById('rightPage');
    rightPage.classList.remove('turn-left', 'turn-right');
    rightPage.querySelector('.page-content').innerHTML = renderPageContent(pageConfig.right);

    // Update navigation
    updateNavigation();

    // Add animation
    setTimeout(() => {
        leftPage.style.animation = 'fadeInScale 0.6s ease';
        rightPage.style.animation = 'fadeInScale 0.6s ease';
    }, 50);
}

function renderPageContent(contentConfig) {
    let html = '';

    switch (contentConfig.type) {
        case 'letter':
            html = `
                <div>
                    <h2>${contentConfig.title}</h2>
                    <p class="letter-text">${CONFIG.LETTER}</p>
                    <p class="signature">With All My Love 💝</p>
                </div>
            `;
            break;

        case 'decoration':
            html = `
                <div>
                    <div class="bouquet" style="font-size: 3rem;">${contentConfig.emoji}</div>
                    <h2>${contentConfig.text}</h2>
                    <p style="margin-top: 30px; font-size: 1.1rem; color: #E8A8A8;">
                        Every moment with you is a treasure ✨
                    </p>
                </div>
            `;
            break;

        case 'photo':
            html = `
                <div>
                    <h2>${contentConfig.title}</h2>
                    <img src="${contentConfig.imageUrl}" alt="${contentConfig.title}">
                    <p>${contentConfig.caption}</p>
                </div>
            `;
            break;

        case 'text':
            html = `
                <div>
                    <h2>${contentConfig.title}</h2>
                    <p style="margin-top: 20px; font-size: 1.1rem; line-height: 1.8;">${contentConfig.text}</p>
                </div>
            `;
            break;

        case 'final':
            html = `
                <div>
                    <h2>${contentConfig.title}</h2>
                    <div class="bouquet">${contentConfig.emoji}</div>
                    <p class="final-message">${contentConfig.message}</p>
                </div>
            `;
            break;

        case 'celebration':
            html = `
                <div>
                    <div style="font-size: 2.5rem; margin-bottom: 20px; animation: float 2s ease-in-out infinite;">
                        ${contentConfig.emoji}
                    </div>
                    <p style="font-size: 1.1rem; line-height: 1.8;">${contentConfig.text}</p>
                </div>
            `;
            break;
    }

    return html;
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');

    prevBtn.disabled = state.currentPage === 0;
    nextBtn.disabled = state.currentPage === CONFIG.PAGES.length - 1;

    pageIndicator.textContent = `${state.currentPage + 1} / ${CONFIG.PAGES.length}`;
}

// ============================================
// PAGE NAVIGATION
// ============================================

document.getElementById('prevBtn').addEventListener('click', () => {
    if (state.currentPage > 0) {
        const leftPage = document.getElementById('leftPage');
        leftPage.classList.add('turn-right');
        setTimeout(() => {
            renderPage(state.currentPage - 1);
        }, 400);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (state.currentPage < CONFIG.PAGES.length - 1) {
        const leftPage = document.getElementById('leftPage');
        leftPage.classList.add('turn-left');
        setTimeout(() => {
            renderPage(state.currentPage + 1);
        }, 400);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (document.getElementById('sketchbookScreen').classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            document.getElementById('prevBtn').click();
        } else if (e.key === 'ArrowRight') {
            document.getElementById('nextBtn').click();
        }
    }
});

// ============================================
// AUDIO MANAGEMENT
// ============================================

const backgroundMusic = document.getElementById('backgroundMusic');

function playBackgroundMusic() {
    backgroundMusic.volume = 0.3;
    backgroundMusic.play().catch(() => {
        // Autoplay might be blocked by browser
        // User can click to enable audio
    });
}

// Allow user to enable/disable music on first interaction
document.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(() => {
            console.log('Audio playback not available');
        });
    }
});

// ============================================
// FINAL ANIMATIONS ON LAST PAGE
// ============================================

function triggerFinalCelebration() {
    const petalsContainer = document.getElementById('petalsContainer');
    if (!petalsContainer) return;

    petalsContainer.innerHTML = '';

    // Floating hearts
    const heartCount = 15;
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        
        const startX = Math.random() * 100;
        const duration = 4 + Math.random() * 2;
        const delay = i * 0.1;
        const drift = (Math.random() - 0.5) * 200;
        
        heart.style.left = startX + '%';
        heart.style.bottom = '-50px';
        heart.style.position = 'absolute';
        heart.style.animation = `heartFloat ${duration}s linear ${delay}s forwards`;
        heart.style.setProperty('--drift', drift + 'px');
        
        petalsContainer.appendChild(heart);
    }

    // Show celebration screen overlay
    const celebrationOverlay = document.createElement('div');
    celebrationOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
    `;
    
    document.body.appendChild(celebrationOverlay);

    // Create falling petals in celebration
    const finalPetals = 50;
    for (let i = 0; i < finalPetals; i++) {
        const petal = document.createElement('div');
        petal.textContent = '🌷';
        petal.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -50px;
            font-size: 1.5rem;
            pointer-events: none;
            animation: petalFall ${2 + Math.random() * 1}s linear ${i * 0.02}s forwards;
            --rotation: ${Math.random() * 360}deg;
        `;
        celebrationOverlay.appendChild(petal);
    }
}

// Observe when user reaches the final page
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (state.currentPage === CONFIG.PAGES.length - 1) {
            // User is on final page - we could trigger celebrations here if desired
        }
    });
});

// ============================================
// TOUCH GESTURES FOR MOBILE
// ============================================

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (document.getElementById('sketchbookScreen').classList.contains('active')) {
        if (touchStartX - touchEndX > 50) {
            // Swiped left - next page
            document.getElementById('nextBtn').click();
        }
        if (touchEndX - touchStartX > 50) {
            // Swiped right - previous page
            document.getElementById('prevBtn').click();
        }
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Log when page is ready
console.log('🌷 Romantic Wedding Website Loaded');
console.log('Passcode:', CONFIG.PASSCODE);
console.log('Total Pages:', CONFIG.PAGES.length);
