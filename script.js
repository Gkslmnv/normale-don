const giftBox = document.getElementById('giftBox');
const giftLid = document.querySelector('.gift-lid');
const animationContainer = document.getElementById('animationContainer');

const flowers = ['🌸', '🌺', '🌷', '🌹', '🌻', '🌼', '💐', '🏵️'];
const loveMessages = ['Seni seviyorum berna', 'I love you berna', 'Te amo berna', 'Je t\'aime berna'];

let clickCount = 0;
const requiredClicks = 3;
let isOpened = false;

function createFlower(x, y) {
    const element = document.createElement('div');
    element.className = 'emoji';
    element.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    element.style.left = x + 'px';
    element.style.top = y + 'px';
    element.style.animationDelay = Math.random() * 2 + 's';
    element.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    animationContainer.appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 5000);
}

function createLoveText(x, y) {
    const textElement = document.createElement('div');
    textElement.className = 'love-text-small';
    textElement.textContent = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    textElement.style.left = x + 'px';
    textElement.style.top = y + 'px';
    textElement.style.animationDelay = Math.random() * 1 + 's';
    textElement.style.animationDuration = (Math.random() * 4 + 3) + 's';
    
    animationContainer.appendChild(textElement);
    
    setTimeout(() => {
        textElement.remove();
    }, 7000);
}

function openGiftBox() {
    if (isOpened) return;
    
    isOpened = true;
    giftLid.classList.add('open');
    
    // 350 çiçek ve mesaj fırlat
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // 250 çiçek
    for (let i = 0; i < 250; i++) {
        setTimeout(() => {
            const angle = (Math.PI * 2 * i) / 250;
            const radius = Math.random() * 300 + 100;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            createFlower(x, y);
        }, i * 10);
    }
    
    // 100 seni seviyorum mesajı
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const angle = (Math.PI * 2 * i) / 100;
            const radius = Math.random() * 250 + 150;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            createLoveText(x, y);
        }, i * 15);
    }
    
    // Kutuyu gizle
    setTimeout(() => {
        giftBox.style.transition = 'opacity 1s ease-out';
        giftBox.style.opacity = '0';
    }, 2000);
}

giftBox.addEventListener('click', function() {
    if (isOpened) return;
    
    clickCount++;
    
    // Titreme efekti
    giftBox.classList.add('shake');
    setTimeout(() => {
        giftBox.classList.remove('shake');
    }, 500);
    
    // Gerekli tık sayısına ulaşıldığında kutuyu aç
    if (clickCount >= requiredClicks) {
        setTimeout(() => {
            openGiftBox();
        }, 600);
    }
    
    // Her tıkta birkaç çiçek fırlat (ipucu)
    if (clickCount < requiredClicks) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = window.innerHeight - 100;
                createFlower(x, y);
            }, i * 100);
        }
    }
});

// Sayfa yüklendiğinde birkaç çiçek göster
window.addEventListener('load', function() {
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                createFlower(x, window.innerHeight);
            }, i * 800);
        }
    }, 1000);
});
