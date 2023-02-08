// js button clicker

let color = 'white';
function changeColor() {
    // if statement to change the background color
    if (color == 'white') {
        document.body.style.backgroundColor = "lightpink";
    }
    else {
        document.body.style.backgroundColor = 'white';
    }
    color = document.body.style.backgroundColor;
}