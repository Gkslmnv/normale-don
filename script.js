const button = document.getElementById('normalButton');
const animationContainer = document.getElementById('animationContainer');

const daisies = ['🌼', '🌻', '🌸', '🌺', '🌷', '🌹', '💐', '🏵️'];
const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞'];
const allElements = [...daisies, ...hearts];

function createElement(x, y) {
    const element = document.createElement('div');
    element.className = 'emoji';
    element.textContent = allElements[Math.floor(Math.random() * allElements.length)];
    element.style.left = x + 'px';
    element.style.top = y + 'px';
    element.style.animationDelay = Math.random() * 2 + 's';
    element.style.animationDuration = (Math.random() * 4 + 3) + 's';
    
    animationContainer.appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 7000);
}

function createLoveText() {
    const loveText = document.createElement('h1');
    loveText.className = 'love-text';
    loveText.textContent = 'seni seviyorum berna';
    
    const container = document.querySelector('.container');
    container.insertBefore(loveText, button);
    
    loveText.style.opacity = '0';
    loveText.style.transform = 'scale(0.5)';
    
    setTimeout(() => {
        loveText.style.transition = 'all 1s ease-out';
        loveText.style.opacity = '1';
        loveText.style.transform = 'scale(1)';
    }, 100);
}

function fillScreenWithLove() {
    // İlk dalga: 80 adet
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createElement(x, y);
        }, i * 50);
    }
    
    // İkinci dalga: 60 adet (1 saniye sonra)
    setTimeout(() => {
        for (let i = 0; i < 60; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createElement(x, y);
            }, i * 40);
        }
    }, 1000);
    
    // Üçüncü dalga: 40 adet (2 saniye sonra)
    setTimeout(() => {
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createElement(x, y);
            }, i * 30);
        }
    }, 2000);
}

button.addEventListener('click', function() {
    createLoveText();
    fillScreenWithLove();
    
    // Butona efekt
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
    
    // Butonu tamamen gizle
    setTimeout(() => {
        button.style.transition = 'opacity 1s ease-out';
        button.style.opacity = '0';
        button.style.pointerEvents = 'none';
    }, 1000);
});

// Sayfa yüklendiğinde birkaç element göster
window.addEventListener('load', function() {
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                createElement(x, window.innerHeight);
            }, i * 600);
        }
    }, 1000);
});
