// 1. First, define the stats element so JS can find it
// Make sure you have <div id="stats-display"></div> in your HTML!
const statsDisplay = document.getElementById("stats-display");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const svgNS = "http://www.w3.org/2000/svg";
const width = 800;
const height = 400;
const radius = 5;

// 2. Create the SVG container
const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", width);
svg.setAttribute("height", height);
svg.style.border = "1px solid #0c0808ff";
svg.style.display = "block"; // Keep it centered/block

// 3. Create the Circle element
const circle = document.createElementNS(svgNS, "circle");
circle.setAttribute("id", "ball");
circle.setAttribute("r", radius);
circle.setAttribute("fill", "blue");

// 4. Set Initial Position
let posX = width / 2;
let posY = height / 2;
circle.setAttribute("cx", posX);
circle.setAttribute("cy", posY);

// 5. Assembly - Put it in the container
svg.appendChild(circle);
const gameContainer = document.getElementById("game-container");
if(gameContainer) {
    gameContainer.appendChild(svg);
} else {
    document.body.appendChild(svg);
}

// 6. Physics Variables
let vx = 0; 
let vy = 0; 
let isMoving = false;

function update() {
    if (isMoving) {
        posX += vx;
        posY += vy;

        if (posX - radius <= 0 || posX + radius >= width) {
            vx *= -1;
            posX = (posX - radius <= 0) ? radius : width - radius;
        }
        if (posY - radius <= 0 || posY + radius >= height) {
            vy *= -1;
            posY = (posY - radius <= 0) ? radius : height - radius;
        }

        circle.setAttribute("cx", posX);
        circle.setAttribute("cy", posY);
    }
    requestAnimationFrame(update);
}

update();

window.addEventListener("keydown", (event) => {
    if (event.code === "KeyE") {
        const randomSpeed = Math.random() * 10 + 5;
        const randomAngle = Math.random() * Math.PI * 2;
        const degrees = Math.round(randomAngle * (180 / Math.PI));

        // CHECK: Only update text if the element actually exists
        if (statsDisplay) {
            statsDisplay.innerText = `Speed: ${randomSpeed.toFixed(2)} | Angle: ${degrees}°`;
        }

        vx = Math.cos(randomAngle) * randomSpeed;
        vy = Math.sin(randomAngle) * randomSpeed;

        posX = Math.floor(Math.random() * (width - radius * 2)) + radius;
        posY = Math.floor(Math.random() * (height - radius * 2)) + radius;
        
        isMoving = true;

        if (window.moveTimeout) clearTimeout(window.moveTimeout);
        
        window.moveTimeout = setTimeout(() => {
            isMoving = false;
            vx = 0;
            vy = 0;
        }, 5000);
    }
});