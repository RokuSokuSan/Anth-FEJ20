/*
-------||||||-----||||||------||||||-----||||||------||||||-------
-------|||||| The King is dead! Long live the King!  ||||||-------
-------||||||-----||||||------||||||-----||||||------||||||-------
[Author: Anthony Norman],
[Producer: Anthony Norman],
[Costumes: I dunno?]
*/




//Laborationer från lektion 6

// Start Laboration 7

/* Skapa två stycken variabler av typen Number.
Skriv sedan ut i consolen resultaten av fäljande:
- Nummer 1 + Nummer 2,
- Nummer 1 – Numemr 2,
- Nummer 1 * Nummer 2.
*/
let noOne = 1;
let noTwo = 2;
console.log('Nummer', noOne, "+", 'Nummer', noTwo);
console.log('Nummer', noOne, "-", 'Nummer', noTwo);
console.log('Nummer', noOne, "*", 'Nummer', noTwo);


// “ <Nummer1> plus <Nummer2> är: <summan> “.
console.log('Nummer', noOne, "+", 'Nummer', noTwo, 'är', (noOne + noTwo));


const robot = 
    {
        firstName: 'Terminator', 
        lastName:'Illbeback',
        modelVersion:'T-800',
        age: 150
    }
console.log('Hello! I`m looking for Sarah Connor. My name is',
 robot.firstName +'',robot.lastName,
 'model', robot.modelVersion+'.','I have been looking for', robot.age, 'years!');
// End laboration 7

// Start laboration 8
/*
- Skapa en Array med 5 olika namn i.
- Ta bort den sista posten i din array.
- Ändra namnet på plats 2 (tank på att arrayer är 0 baserade)
- Lägg till ‘Joakim’ som ett namn i din array
- Sortera arrayen i bokstavsordning.
- Ta reda på vilken index plats ‘Joakim’ har
- Ta bort ‘Joakim’ igen
- Loopa igenom din array och logga varje namn i consolen
*/

const personas1 = [
    'Ylva', 'Micaela', 'Jacob', 'Ellinore', 'Anthony'
]
 
personas1.pop()
console.log('Tar bort den sista posten i Arrayen: ' +  personas1);
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
const personas2 = [
    'Ylva', 'Micaela', 'Jacob', 'Ellinore', 'Anthony'
]
 
personas2[1] = ' Rutger'
console.log('Ändra namnet på plats 2 i Arrayen: ' +  personas2);
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
const personas3 = [
    'Ylva', 'Micaela', 'Jacob', 'Ellinore', 'Anthony'
]
 
personas3.unshift('Joakim')
console.log('Lägger till Joakim som nummer 0 Arrayen: ' +  personas3);
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

const personas4 = [
    'Ylva', 'Micaela', 'Jacob', 'Ellinore', 'Anthony'
]

   console.log('Sortera Arrayen i Alfabetisk ordning: ' + personas4.sort()) 


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
 
console.log('Vilken indexering har Joakim?:' + personas3.indexOf('Joakim'));
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

const personas5 = [
    'Ylva', 'Micaela', 'Jacob', 'Ellinore', 'Anthony'
]

for(let i = 0; i < 5; i++){
    console.log(i, personas5[i])
}

// End Laboration 8

// Start Labortion 9
/*
Du ska i denna laborationsuppgift göra följande:
Den här övningen går ut på att du ska skriva om nedan angivna funktioner till
“ES6 arrow functions” ( => ).
Kontrollera även i consolen att du inte får några felmeddelanden och att allting fungerar som det
ska.
*/
// Funktion 1:
const hello = hello => {
 console.log(`Hello ${hello} world`);
}
hello(`HELLO!!!!!`);
// Funktion 2:
const greet = name => console.log(`Hej ${name} hur mår du?`); greet(`Anthony`);

// // Funktion 3:
const calc = (numberOne = 0, numberTwo = 0) => numberOne + numberTwo;
let sumOfcalc = calc(10, 15);
console.log(sumOfcalc);

// // Funktion 4:
const tip = (summaAv = 0, procentAv = 0) => summaAv + summaAv* procentAv;

let total = tip(200,0.15);
console.log(total);



