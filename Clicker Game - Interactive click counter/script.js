document.addEventListener("click", (e) => {
    // 1. Naya element banayein
    const circle = document.createElement("div");
    circle.classList.add("click-circle");

    // 2. Mouse ki position set karein
    const x = e.clientX;
    const y = e.clientY;
    
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    // 3. Screen par add karein
    document.body.appendChild(circle);

    // 4. Memory bachane ke liye 5 second baad element ko delete kar dein
    setTimeout(() => {
        circle.remove();
    }, 5000);
});