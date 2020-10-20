// Start laboration 11
// I den här uppgiften ska du skapa en hemsida som visar dagens datum och den aktuella tiden.
// Du ska skapa ett grafiskt gränssnitt med html och css men hur det ska se ut väljer du själv. För att
// hämta tid och datum bör du använda dig av Date objektet som finns inbyggt i Javascript men du får
// själv söka information om hur du använder detta.
// Tänk på att klockan ska uppdateras 1 gång i sekunden så att det alltid visar rätt!
//

const myInterval = setInterval(() => { 
    timer()
 }, 1000);
  
 function dater(){
    const myDate = new Date();
    const date =myDate.setUTCDate();
    document.getElementById("datum").innerHTML = myDate;
    // console.log(time)
 }
 function timer() {
    const myTime = new Date();
    const time = myTime.toLocaleTimeString();
    document.getElementById("clock").innerHTML = myTime;
    // console.log(time)
};
 