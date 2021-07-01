var countTimer = new Date('July 20,2021 11:59:59').getTime();

var x = setInterval(function() {
   var currentTime = new Date().getTime();

   var distance = countTimer - currentTime;

   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);


   var timer1 = document.querySelector('#timer1');
   var timer2= document.querySelector('#timer2');
   var timer3= document.querySelector('#timer3');
   var timer4 = document.querySelector('#timer4');

    timer1.innerHTML = `${days} days`;
    timer2.innerHTML = `${hours} hours`;
    timer3.innerHTML = `${minutes} minutes`;
    timer4.innerHTML = `${seconds} seconds`;

    

//    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//    + minutes + "m " + seconds + "s ";
 
   // If the count down is finished, write some text
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("demo").innerHTML = "EXPIRED";
   }
 }, 1000);

var submitId = document.querySelector('#submitButton');

submitId.addEventListener("click", myButton);
function myButton() {
    var text = "Thank you!";
    // submitId.appendChild(text);
    submitId.innerText = `${text}`;
}