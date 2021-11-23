var hour = 0
var minute = 0
var second = 0
var milisecond = 0

var timer = false;

function startBtn(){
    timer = true
    stopWatch();
}

function stopBtn(){
    timer = false
}

function resetBtn(){
    timer = false

    hour = 0
    minute = 0
    second = 0
    milisecond = 0

    document.getElementById("hour").innerHTML = "00"
    document.getElementById("minute").innerHTML = "00"
    document.getElementById("second").innerHTML = "00"
    document.getElementById("milisecond").innerHTML = "00"
}

function stopWatch(){
    if(timer == true){

        milisecond = milisecond+1

        if(milisecond == 100){
            second = second+1
            milisecond = 0
        }

        if(second == 60){
            minute = minute+1
            second = 0
        }

        if(minute == 60){
            hour = hour+1
            minute = 0
            second = 0
        }

        var hourString = hour
        var minuteString = minute
        var secondString = second
        var milisecondString = milisecond

        if(hour < 10){
            hourString = "0" + hourString
        }

        if(minute < 10){
            minuteString = "0" + minuteString
        }

        if(second < 10){
            secondString = "0" + secondString
        }

        if(milisecond < 10){
            milisecondString = "0" + milisecondString
        }
        


        document.getElementById("hour").innerHTML = hourString;
        document.getElementById("minute").innerHTML = minuteString;
        document.getElementById("second").innerHTML = secondString;
        document.getElementById("milisecond").innerHTML = milisecondString;


        setTimeout("stopWatch()" , 10);
    }
}

function lightmode(){
    var body = document.getElementsByTagName("body")
    var timeContainer = document.getElementsByTagName("div")
    var buttons = document.getElementsByTagName("button")


    buttons[0].style.backgroundColor = "whitesmoke"
    buttons[0].style.color = "black"
    buttons[0].style.border = "2px solid black"

    buttons[1].style.backgroundColor = "whitesmoke"
    buttons[1].style.color = "black"
    buttons[1].style.border = "2px solid black"

    buttons[2].style.backgroundColor = "whitesmoke"
    buttons[2].style.color = "black"
    buttons[2].style.border = "2px solid black"

    buttons[3].style.backgroundColor = "whitesmoke"
    buttons[3].style.color = "black"
    buttons[3].style.border = "none"

    buttons[4].style.backgroundColor = "whitesmoke"
    buttons[4].style.color = "black"
    buttons[4].style.border = "none"


    timeContainer[1].style.color = "black"
    body[0].style.backgroundColor = "whitesmoke"
}

function darkmode(){
    var body = document.getElementsByTagName("body")
    var timeContainer = document.getElementsByTagName("div")
    var buttons = document.getElementsByTagName("button")


    buttons[0].style.backgroundColor = "black"
    buttons[0].style.color = "whitesmoke"
    buttons[0].style.border = "2px solid whitesmoke"

    buttons[1].style.backgroundColor = "black"
    buttons[1].style.color = "whitesmoke"
    buttons[1].style.border = "2px solid whitesmoke"

    buttons[2].style.backgroundColor = "black"
    buttons[2].style.color = "whitesmoke"
    buttons[2].style.border = "2px solid whitesmoke"

    buttons[3].style.backgroundColor = "black"
    buttons[3].style.color = "whitesmoke"
    buttons[3].style.border = "none"

    buttons[4].style.backgroundColor = "black"
    buttons[4].style.color = "whitesmoke"
    buttons[4].style.border = "none"


    timeContainer[1].style.color = "whitesmoke"
    body[0].style.backgroundColor = "black"
}