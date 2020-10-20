// Start Laboration 10
// Skapa en funktion som tar in bredd, längd och höjd som parametrar och ger tillbaka volymen
// av en kub som svar:
// “funktion(bredd, längd, höjd)”



const cube = (cubeWidht = 0, cubeLenght= 0, cubeHeight= 0) => 
    cubeWidht * cubeLenght * cubeHeight;
    let cubeVolume = cube(10, 15, 20);
    console.log('Volymen av kuben är', cubeVolume, 'cm3');
// - Skapa en funktion som tar in en diameter som parameter och ger tillbaka arean på en cirkel som svar:
// “funktion(diameter)”
// Testa dina funktioner genom att skriva ut svaren i consolen.
const circle = (diameter=0) => diameter / 2;
    let areaOf= circle(500)*circle(500)*Math.PI;
    console.log('The area of the diameter is:', areaOf)
//End laboration 10


// Start laboration 11
// I den här uppgiften ska du skapa en hemsida som visar dagens datum och den aktuella tiden.
// Du ska skapa ett grafiskt gränssnitt med html och css men hur det ska se ut väljer du själv. För att
// hämta tid och datum bör du använda dig av Date objektet som finns inbyggt i Javascript men du får
// själv söka information om hur du använder detta.
// Tänk på att klockan ska uppdateras 1 gång i sekunden så att det alltid visar rätt!
//