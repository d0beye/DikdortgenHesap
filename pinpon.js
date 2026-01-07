    
    var canvas = document.getElementById("pinponCanvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(getRandomInt(800), getRandomInt(400), 5, 0, 2 * Math.PI);
        ctx.stroke();

        function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const svgNS = "http://www.w3.org/2000/svg";

// 1. Create the SVG container
const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", "800");
svg.setAttribute("height", "400");
svg.style.border = "1px solid #0c0808ff";

// 2. Create the Circle element
const circle = document.createElementNS(svgNS, "circle");
circle.setAttribute("id", "ball");

// 3. Set SVG-specific attributes
circle.setAttribute("cx", getRandomInt(800));    // Center X
circle.setAttribute("cy", getRandomInt(400));    // Center Y
circle.setAttribute("r", "5");      // Radius
circle.setAttribute("fill", "blue"); // Color

// 4. Assembly
svg.appendChild(circle);
document.body.appendChild(svg);

window.addEventListener("keydown", (event) => { 
   
const element = document.getElementById('ball'); // or any SVG element
const bbox = element.getBBox();

console.log(`X: ${bbox.x}, Y: ${bbox.y}`);
console.log(`Width: ${bbox.width}, Height: ${bbox.height}`);
  
  
      if (event.code === "KeyD") {
      console.log("D key was pressed.");
      circle.setAttribute("cx", parseInt(circle.getAttribute("cx")) + 5);
    }
      if (event.code === "KeyA") {
      console.log("A key was pressed."); 
      circle.setAttribute("cx", parseInt(circle.getAttribute("cx")) - 5);
    }
  
      if (event.code === "KeyW") {
      console.log("W key was pressed."); 
      circle.setAttribute("cy", parseInt(circle.getAttribute("cy")) - 5);
    }

      if (event.code === "KeyS") {
      console.log("S key was pressed."); 
      circle.setAttribute("cy", parseInt(circle.getAttribute("cy")) + 5);
    }
   }
  );
  