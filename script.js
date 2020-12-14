// Write your JavaScript code here!

function whenLoad() {

  //set variables to DOM elements
  var formSubmit = document.getElementById("launchForm");
  var pilotName = document.querySelector("input[name=pilotName]");
  var copilotName = document.querySelector("input[name=copilotName]");
  var fuelLevel = document.querySelector("input[name=fuelLevel]");
  var cargoMass = document.querySelector("input[name=cargoMass]");
  
  //listens for user to click submit button and then validates input
  formSubmit.addEventListener("submit", (e) => {
    const hasNum = /\d/;
    const faultyForms = document.getElementById('faultyItems');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.getElementById('launchStatus');
    

    //validate pilotName input if valid update DOM
    if (pilotName.value == "") {
      window.alert("You must enter a name");
    }else if (hasNum.test(pilotName.value)) {
      window.alert("Name must not have numbers"); 
    }else{
      pilotStatus.textContent = `${pilotName.value} is ready for launch`;
      pilotStatus.style.color = 'green';
    }

    //validate copilotName input if valid update DOM
    if (copilotName.value == "") {
      window.alert("You must enter a copilot name.");
    }else if (hasNum.test(copilotName.value)) {
      window.alert("Name must not have numbers"); 
    }else {
      copilotStatus.textContent = `${copilotName.value} is ready for launch`;
    }

    //valdate fuel level input if valid update DOM
    if (fuelLevel.value == "") {
      window.alert("You must submit a fuel level.");
    }else if (isNaN(fuelLevel.value)) {
      window.alert("Fuel Level must be a number");  
    }else if(fuelLevel.value < 10000){
      fuelStatus.textContent = `${fuelLevel.value} lit. is below acceptable level of 10,000 lit.`;
      fuelStatus.style.color = 'goldenrod';
      launchStatus.style.color = 'red';
      launchStatus.textContent = 'Shuttle not ready for launch';
      
    }else {
      fuelStatus.textContent = `${fuelLevel.value} is acceptable for launch`;//TODO ^^^^
    }

    //validate cargoMass input if valid update DOM low enough
    if (cargoMass.value == "") {
      window.alert("You must submit a cargo mass.");      
    }else if (isNaN(cargoMass.value)) {
      window.alert("Caro Mass must be a number.");     
    }else if(cargoMass.value > 10000){
      cargoStatus.textContent = `${cargoMass.value} kg is above acceptable level of 10,000 kg`;
      cargoStatus.style.color = 'goldenrod';
      launchStatus.style.color = 'red';
      launchStatus.textContent = 'Shuttle not ready for launch';
      
    }else {
      if(pilotStatus.textContent.includes('ready')){
        cargoStatus.textContent = `${cargoMass.value} kg is acceptable for launch`;
        launchStatus.style.color = 'green';
        launchStatus.textContent = 'Ready for launch!';
      }
    }

    
    e.preventDefault();
    
    faultyForms.style.visibility = 'visible';
    
  });
}
window.onLoad = whenLoad();

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
