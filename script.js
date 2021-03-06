const currentTime = document.querySelector('.time__currentTime');
const currentDay = document.querySelector('.time__currentDay')
function changeTime() {
    const time = new Date();
    const hour = time.getHours();
    const amOrPm = (hour >= 12) ? "PM" : "AM";
    const minute = time.getMinutes();
    const second = time.getSeconds();
    if(hour >= 12){
        currentTime.innerHTML = `${Math.abs(hour - 12)} ${amOrPm} : ${minute}M : ${second}s`;
    }
    else{
        currentTime.innerHTML = `${hour} ${amOrPm} : ${minute}M : ${second}s`;
    }
    
}
function changeDay() {
    const time = new Date().getDay();
    switch (time) {
        case 0:
            currentDay.innerHTML = 'Sunday';
            break;
        case 1:
            currentDay.innerHTML = 'Monday';
            break;
        case 2:
            currentDay.innerHTML = 'Tuesday';
            break;
        case 3:
            currentDay.innerHTML = 'Wednesday';
            break;
        case 4:
            currentDay.innerHTML = 'Thursday';
            break;
        case 5:
            currentDay.innerHTML = 'Friday';
            break;
        case 6:
            currentDay.innerHTML = 'Saturday';
            break;
        default:
            console.log("Saturday");
    }
}

// setInterval(changeDay,1000);
// setInterval(changeTime, 1000);
setInterval(() =>{
    changeDay();
    changeTime();
},1000)
