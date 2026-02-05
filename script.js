const button = document.getElementById('normalButton');
const animationContainer = document.getElementById('animationContainer');

const daisies = ['🌼', '🌻', '🌸', '🌺', '🌷', '🌹', '💐', '🏵️'];
const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞'];
const allElements = [...daisies, ...hearts];

// "Seni seviyorum" farklı dillerde
const loveMessages = [
    'Seni seviyorum', 'I love you', 'Je t\'aime', 'Te amo', 'Ich liebe dich',
    'Ti amo', '愛してる', '사랑해', 'Jeg elsker dig', 'Eu te amo',
    'Я тебя люблю', 'Te quiero', 'Ik hou van jou', 'S\'agapó',
    'Jag älskar dig', 'Miluji tě', 'Ljubim te', 'Szeretlek',
    'Te iubesc', 'Aš tave myliu', 'Kocham cię', 'Я тебе кохаю',
    'Elskar deg', 'Rakastan sinua', 'Jeg elsker deg', 'Amo te',
    'Eu amo-te', 'Te am', 'Szeretlek', 'Я тебя люблю',
    'Ik hou van jou', 'Te quiero', '愛してる', '사랑해'
];

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

function createLoveTextElement(x, y) {
    const textElement = document.createElement('div');
    textElement.className = 'love-text-small';
    textElement.textContent = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    textElement.style.left = x + 'px';
    textElement.style.top = y + 'px';
    textElement.style.animationDelay = Math.random() * 2 + 's';
    textElement.style.animationDuration = (Math.random() * 5 + 4) + 's';
    
    animationContainer.appendChild(textElement);
    
    setTimeout(() => {
        textElement.remove();
    }, 9000);
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
    // Yüzlerce "seni seviyorum" mesajı
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createLoveTextElement(x, y);
        }, i * 30);
    }
    
    // Kalpler ve papatyalar
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createElement(x, y);
        }, i * 40);
    }
    
    // İkinci dalga: daha fazla mesaj
    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createLoveTextElement(x, y);
            }, i * 25);
        }
    }, 1500);
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
