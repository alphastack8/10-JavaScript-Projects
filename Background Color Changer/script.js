// Get all buttons inside #parents div
const buttons = document.querySelectorAll('#parents button');

// Loop through each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the id of clicked button and use it as color
        const color = button.id;
        document.body.style.backgroundColor = color;
    });
});