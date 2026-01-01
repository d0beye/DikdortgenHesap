function calc() {
    let length = document.getElementById("height");
    let width = document.getElementById("width");
    let len = parseFloat(length.value);
    let wid = parseFloat(width.value);
    let area = len * wid;
    let perimeter = 2 * (len + wid);
    let inertia = (len * Math.pow(wid, 3)) / 12;
    let inertia2 = (wid * Math.pow(len, 3)) / 12;
    console.log(`Area of the rectangle: ${area}`); 
    console.log(`Perimeter of the rectangle: ${perimeter}`);
    console.log(`Inertia Y of the rectangle: ${inertia}`);
    console.log(`Inertia X of the rectangle: ${inertia2}`); 
    document.getElementById("area").innerText = area.toFixed(2);
    document.getElementById("perimeter").innerText = perimeter.toFixed(2);
    document.getElementById("inertiaY").innerText = inertia.toFixed(2);
    document.getElementById("inertiaX").innerText = inertia2.toFixed(2);
}