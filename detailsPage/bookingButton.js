// Select all buttons with the class "button"
var buttons = document.querySelectorAll(".button");

// Loop through all buttons and add event listeners
buttons.forEach(function(button) {
    button.addEventListener("mouseover", whenHover);
    button.addEventListener("mouseout", whenNotHover);
    button.addEventListener("click", whenClicked);
});

function whenHover() {
    this.style.backgroundColor = "blue"; // Change background color on hover
}

function whenNotHover() {
    this.style.backgroundColor = "black"; // Revert background color when not hovered
}

function whenClicked(){
    // what to do when a button is clicked
    document.location='../bookingPage/booking.html';
}