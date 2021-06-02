// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const input=require("readline-sync");

let astrounautCount = Number(input.question("How many astronauts?"))

let date = "Monday 2019-3-18";
let time = "10:05:04 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 100;
let weatherStatus = "clear";

let dashedLine = "-------------------------------------";


// Write code to generate the LC04 report here:
console.log(dashedLine + 
"\n" + ">LC04-LAUNCH CHECKLIST" + 
"\n" + dashedLine + 
"\n" + "Date: " + date + 
"\n" + "Time: " + time +
"\n");

console.log(dashedLine +
"\n" + ">ASTRONAUT INFO" +  
"\n" + dashedLine +
"\n" + "*count: " + astronautCount + 
"\n" + "*status: " + astronautStatus+
"\n");

console.log(dashedLine + 
"\n"+ ">FUEL DATA" +
"\n" + dashedLine +
"\n" +"*Fuel temp celsius: " + fuelTempCelsius +
"\n" +"*Fuel level:" + fuelLevel+ "%" +
"\n");

console.log(dashedLine +
"\n" + ">MASS DATA" +
"\n" + dashedLine +
"\n" + "*Crew mass: " + crewMassKg + " kg" +
"\n" + "*Fuel mass: " + fuelMassKg + " kg" +
"\n" + "*Shuttle mass: " + shuttleMassKg + " kg" +
"\n" + "*Total mass: " + totalMassKg + " kg" +
"\n" ); 

console.log(dashedLine + 
"\n" + ">FLIGHT PLAN" + 
"\n" + dashedLine +
"\n" + "*weather: " + weatherStatus +
"\n");

console.log(dashedLine + 
"\n" + ">OVERALL STATUS" + 
"\n" + dashedLine +
"\n" + "*Clear for takeoff: YES");


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.