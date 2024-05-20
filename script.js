let start=document.querySelector("#start")
let pause=document.querySelector("#Pause")
let reset=document.querySelector("#reset")
let sec=0
let min=0
let hr=0
let display="off"
start.addEventListener("click", function(){
    start.style.backgroundColor="green"
    pause.style.backgroundColor="chocolate"
    if(display=="off"){
     display="on"
        timerCycle()
    }
})
function timerCycle(){
    if(display=="on"){
        sec=parseInt(sec)
        min=parseInt(min)
        hr=parseInt(hr)
        sec=sec+1
        if(sec==60){
            min=min+1
            sec=0
        }
        if(min==60){
            hr=hr+1
            min=0
            sec=0
        }
        if(hr==60){
            min=min+1
            sec=0
        }
        if(sec<10){
            sec="0"+sec
        }
        if(min<10){
            min="0"+min
        }
        if(hr<10){
            hr="0"+hr
        }
document.querySelector(".text").innerHTML=hr+":"+min+":"+sec
setTimeout("timerCycle()",1000)
}
}
function  changeToYellow(){
    reset.style.backgroundColor="yellow"
    reset.style.color="black"
    if(display=="on"){
        document.querySelector(".text").innerHTML="00:00:00"
        display="off"
    }
    else{
        document.querySelector(".text").innerHTML="00:00:00"
    }
    sec=0
    hr=0
    min=0
    setTimeout("changeToOrange()",500)
}
function changeToOrange(){
    reset.style.backgroundColor="chocolate"
reset.style.color="white"
}
reset.addEventListener("click",function(){
    start.style.backgroundColor="chocolate"
    Pause.style.backgroundColor="chocolate"
  changeToYellow()
})
pause.addEventListener("click",function(){
    pause.style.backgroundColor="red"
    start.style.backgroundColor="chocolate"
    if(display=="on"){
        display="off"
    }
})
