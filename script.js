const card = document.getElementById('card')
const heart1 = document.getElementById('heart1')
const heart2 = document.getElementById('heart2')
const input = document.getElementById("input")
const form = document.getElementById('form')
const number = Math.floor(Math.random() * 100000000)
input.id = number
let currentImageIndex = 0;
const totalImages = 17;

function answer() {
    const text = input.value.trim().toLowerCase();
    const error = document.getElementById('error');
    
    if (text.includes('no')) {
        input.value = '';
        error.innerHTML = 'Not what I wanted to hear!<br>I will ask you AGAIN:';
    } else if (text.includes('maybe')) {
        input.value = '';
        error.innerHTML = 'Make it a Yes, Make it a Yes<br> Pleeeeaaaase:';
    } else if (text.includes('yes')) {
        input.value = '';
        error.innerHTML = 'As you should :)!';
        
        // Fade out card and form
        setTimeout(() => {
            card.style.animation = 'fade 3s ease-in-out forwards';
            form.style.animation = 'fade 3s ease-in-out forwards';
        }, 1000);
        
        setTimeout(() => {
            card.style.display = 'none';
            form.style.display = 'none';

            // Show Arabic text
            document.getElementById('text-container').style.display = 'block';
        }, 3000);
    } else {
        input.value = '';
        error.innerHTML = "It's a yes or no type of question!";
    }
}

// Show Persian text after clicking Arabic text
function showTranslation() {
    document.getElementById("arabic-text").style.display = "none";
    document.getElementById("persian-text").style.display = "block";
}

// Start the slideshow after clicking Persian text
function startSlideshow() {
    document.getElementById("text-container").style.animation = "fade 2s ease-in-out forwards";

    setTimeout(() => {
        document.getElementById("text-container").style.display = "none";
        document.getElementById("slides").style.display = "block";
        showNextImage();
        setInterval(showNextImage, 8000);
    }, 2000);
}

    else {
        input.value = ''
        error.innerHTML = "It's a yes or no type of question!"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".heart-container");
    const numHearts = 50; // Adjust number of hearts

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement("i");
        heart.classList.add("heart-emoji", Math.random() > 0.5 ? "fas" : "far", "fa-heart");
        heart.style.top = Math.random() * 90 + "vh";
        heart.style.left = Math.random() * 90 + "vw";
        heart.style.fontSize = Math.random() * 2 + 1 + "rem";
        heart.style.animationDuration = Math.random() * 4 + 3 + "s";
        container.appendChild(heart);
    }
});
