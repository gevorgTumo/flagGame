let second = 10;

function getElement(id) {
    return document.getElementById(id);
  }
 
function timer() {
    setTimeout(finish, seconds * 1000);
     getElement("timer").innerHTML = seconds;
     let countdown = setInterval(function () {
       getElement("timer").innerHTML = second;
     }, 1000);
   }


let checkInterval = setInterval(check, 50);
timer();