document.getElementById("yes-btn").addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="secret-container">
            <h1 class="question">Then tell me.</h1>
        </div>
    `;
});

document.getElementById("no-btn").addEventListener("click", function() {
    window.location.href = "login.html";
});

// Floating doodles
const doodles = ["❤️", "⭐", "💌", "🌸", "💖", "🎀"];
const doodleContainer = document.querySelector(".doodle-container");

function createDoodle() {
    const doodle = document.createElement("div");
    doodle.classList.add("doodle");
    doodle.innerText = doodles[Math.floor(Math.random() * doodles.length)];

    doodle.style.left = Math.random() * 100 + "vw";
    doodle.style.animationDuration = Math.random() * 3 + 3 + "s";
    doodle.style.fontSize = Math.random() * 15 + 20 + "px";

    doodleContainer.appendChild(doodle);

    setTimeout(() => {
        doodle.remove();
    }, 5000);
}

// Generate doodles every 800ms
setInterval(createDoodle, 800);

// Play background music
window.addEventListener("load", function() {
    let music = document.getElementById("bg-music");

    // Try to play music (some browsers require user interaction)
    music.play().catch(() => {
        console.log("Autoplay blocked. Adding play button.");
        showMusicButton();
    });
});

// Show play button if autoplay is blocked
function showMusicButton() {
    let btn = document.createElement("button");
    btn.innerText = "Play Music";
    btn.classList.add("play-music-btn");

    btn.onclick = function() {
        document.getElementById("bg-music").play();
        btn.remove();
    };

    document.body.appendChild(btn);
}

document.getElementById("yes-btn").addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="secret-container">
            <h1 class="question">Then tell me.</h1>
        </div>
    `;
});

document.getElementById("no-btn").addEventListener("click", function() {
    window.location.href = "login.html";
});

// Play music when the user interacts
const music = document.getElementById("bg-music");

document.addEventListener("click", function() {
    if (music.paused) {
        music.play().catch(err => console.log("Autoplay blocked:", err));
    }
});