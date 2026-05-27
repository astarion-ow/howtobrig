const card = document.querySelector('.psychube');

const psychubeR = document.querySelector('.psychube-r');
const psychubeA = document.querySelector('.psychube-a');
const psychubeL = document.querySelector('.psychube-lly-to-me');

const bubbleR   = document.querySelector('.psychube-circle-r');
const bubbleA   = document.querySelector('.psychube-circle-a');

const psychubeImage = document.querySelector('.psychube-image');

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

card.addEventListener('mousemove',(e) => {
    const rect = card.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    targetX = (mouseX - centerX) / centerX;
    targetY = (mouseY - centerY) / centerY;
});

function animate(){
    //smoothing
    currentX += (targetX - currentX) * 0.07;
    currentY += (targetY - currentY) * 0.07;

    //layered motion
    psychubeR.style.transform = `translateX(-50%) translate(${currentX * 3.5}px, ${currentY * 3.5}px)`;
    psychubeA.style.transform = `translateX(-50%) translate(${currentX * 14}px, ${currentY * 14}px)`;
    psychubeL.style.transform = `translateX(-50%) translate(${currentX * 9.8}px, ${currentY * 9.8}px)`;

    bubbleR.style.transform = `translateX(-50%) translate(${currentX * 4.2}px, ${currentY * 4.2}px)`;
    bubbleA.style.transform = `translateX(-50%) translate(${currentX * 12.6}px, ${currentY * 12.6}px)`;

    psychubeImage.style.transform = `translate(${currentX * -1.4}px, ${currentY * -1.4}px)`;

    requestAnimationFrame(animate);
}

function handleOrientation(event){
    //left/right tilt
    const gamma = event.gamma;

    //front/back tilt
    const beta = event.beta;

    targetX = gamma / 30;
    targetY = beta / 30;
}

window.addEventListener(
    'deviceorientation',
    handleOrientation
);

const isMobile =
    window.DeviceOrientationEvent &&
    'ontouchstart' in window;

if (isMobile) {
    window.addEventListener(
        'deviceorientation',
        handleOrientation
    );
}
else {
    card.addEventListener(
        'mousemove',
        animate()
    );
}
