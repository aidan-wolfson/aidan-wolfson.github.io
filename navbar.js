var button0 = document.querySelector("#button0"); 		// landing page
var button1 = document.querySelector("#button1"); 		// movie details page
var button2 = document.querySelector("#button2");		// calendar page
var button3 = document.querySelector("#button3"); 		// account page
var button4 = document.querySelector("#button4");		// accessibility

button0.addEventListener("click", navButtonClicked);
button1.addEventListener("click", navButtonClicked);
button2.addEventListener("click", navButtonClicked);
button3.addEventListener("click", navButtonClicked);
button4.addEventListener("click", navButtonClicked);

function navButtonClicked()
{
    if(this.id == "button0"){
        document.location='../index.html'
    }
    if(this.id == "button1"){
        document.location='../detailsPage/detailspage.html'
    } else if(this.id == "button2"){
        // calendar
        document.location='../calendarPage/calendarpage.html'
    } else if(this.id == "button3"){
        // account page
        document.location='../userPage/userpage.html'
    } else if(this.id == "button4"){
        document.location='../accessibilityPage/accessibility.html'
    }
}