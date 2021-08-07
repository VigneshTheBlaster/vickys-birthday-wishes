var audio = new Audio("https://dailyringtone.com/download/funny-happy-birthday-day-ringtone/mp3");

window.addEventListener('click',() => {
audio.play();
});

function start(){
    var clab= document.querySelector("#clab")
   clab.style.display = "block";
   document.getElementById("loader").style.background="trasparent";
   document.getElementById("loader").style.display="none";
   document.getElementById("loader").style.transition ="2s";
   document.getElementById("loader").innerHTML =" ";
}

setInterval(start, 1000);