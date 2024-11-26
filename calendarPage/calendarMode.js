var monthButton = document.querySelector('#bymonth');
var weekButton = document.querySelector('#byweek');

monthButton.addEventListener("click", monthButtonClicked);
weekButton.addEventListener("click", weekButtonClicked);

function monthButtonClicked(){
    document.location='../calendarPage/calendarPage.html';
}

function weekButtonClicked(){
    document.location='../weeklyPage/weeklyCalendar.html';
}