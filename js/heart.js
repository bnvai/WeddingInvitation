function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 2 + Math.random() * 3 + 's';
    heart.style.opacity = Math.random();
    const size = Math.floor(Math.random() * 16) + 16;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    document.querySelector('.heart-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(() => {
    if (Math.random() < 0.7) {
        createHeart();
    }
}, 500);
