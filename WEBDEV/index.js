let count = 0;

document.getElementById("resetbttn").onclick = function() {
    count = 0;
    updateCountLabel();
}

document.getElementById("increasebttn").onclick = function() {
    count += 1;
    updateCountLabel();
}

function updateCountLabel() {
    const countLabel = document.getElementById("countLabel");
    countLabel.innerHTML = count;

    countLabel.style.transform = 'scale(1.2)';
    setTimeout(() => {
        countLabel.style.transform = 'scale(1)';
    }, 200);

    
    createBubble();
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 30 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;


    bubble.style.left = `${Math.random() * 100}%`;

    document.querySelector('.bubbles').appendChild(bubble);

    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}