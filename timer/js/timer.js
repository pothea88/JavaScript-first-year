var timer = () => {
    let day = new Date();
    let hours = (day.getHours() % 12).toString();
    let minutes = day.getMinutes().toString();
    let seconds = day.getSeconds().toString();
    let days = day.getDay();
    let displayDay = "";

    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }
    let result = document.getElementById('timer');
    if (day.getHours() < 12) {
        result.innerHTML = hours + ":" + minutes + ":" + seconds + "AM";
    } else {
        result.innerHTML = hours + ":" + minutes + ":" + seconds + "PM";
    }
    if (hours == 12) {
        result.innerHTML = hours + ":" + minutes + ":" + seconds + "PM";
    }

   
    switch (days) {
        case 0:
            displayDay = "Sunday";
            break;
        case 1:
            displayDay = "Monday";
            break;
        case 2:
            displayDay = "Tuesday";
            break;
        case 3:
            displayDay = "Wednesday";
            break;
        case 4:
            displayDay = "Thursday";
            break;
        case 5:
            displayDay = "Friday";
            break;
        case 6:
            displayDay = "Saturday";
            break;
    }
    let month = day.getMonth();
    switch (month) {
        case 0:
            displayMonth = "January";
            break;
        case 1:
            displayMonth = "February";
            break;
        case 2:
            displayMonth = "March";
            break;
        case 3:
            displayMonth = "April";
            break;
        case 4:
            displayMonth = "May";
            break;
        case 5:
            displayMonth = "June";
            break;
        case 6:
            displayMonth = "July";
            break;
        case 7:
            displayMonth = "August";
            break;
        case 8:
            displayMonth = "September";
            break;
        case 9:
            displayMonth = "October";
            break;
        case 10:
            displayMonth = "November";
            break;
        case 11:
            displayMonth = "December"
    }
    let message = document.getElementById('message');
    if (day.getHours < 12){
        message.innerHTML = "Good Morning Pothea";
    }else {
        message.innerHTML = "Good Afternoon Pothea";
    }
    let dater = document.getElementById('dater');
    dater.innerHTML = displayDay + " " + "/" +" "+ displayMonth + " " + "/" + " " + day.getFullYear();
}
setInterval(timer, 1000);
