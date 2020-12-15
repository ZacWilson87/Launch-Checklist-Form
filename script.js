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
    const faultyForms = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let allReady = 0;
    var missionTarget = document.getElementById("missionTarget");

    //validate pilotName input if valid update DOM
    if (pilotName.value == "") {
      window.alert("You must enter a name");
      pilotStatus.style.color = "goldenrod";
      pilotStatus.textContent = "Pilot not ready to launch";
    } else if (hasNum.test(pilotName.value)) {
      window.alert("Name must not have numbers");
      pilotStatus.style.color = "goldenrod";
      pilotStatus.textContent = "Pilot not ready to launch";
    } else {
      pilotStatus.textContent = `${pilotName.value} is ready for launch`;
      pilotStatus.style.color = "green";
      allReady++;
    }

    //validate copilotName input if valid update DOM
    if (copilotName.value == "") {
      window.alert("You must enter a copilot name.");
      copilotStatus.style.color = "goldenrod";
      copilotStatus.textContent = "Copilot not ready to launch";
    } else if (hasNum.test(copilotName.value)) {
      window.alert("Name must not have numbers");
      copilotStatus.style.color = "goldenrod";
      copilotStatus.textContent = "Copilot not ready to launch";
    } else {
      copilotStatus.textContent = `${copilotName.value} is ready for launch`;
      copilotStatus.style.color = "green";
      allReady++;
    }

    //valdate fuel level input if valid update DOM
    if (fuelLevel.value == "") {
      window.alert("You must submit a fuel level.");
      fuelStatus.style.color = "goldenrod";
      fuelStatus.textContent = "Fuel not good for launch";
    } else if (isNaN(fuelLevel.value)) {
      window.alert("Fuel Level must be a number");
      fuelStatus.style.color = "goldenrod";
      fuelStatus.textContent = "Fuel not good for launch";
    } else if (fuelLevel.value < 10000) {
      fuelStatus.textContent = `${fuelLevel.value} lit. is below acceptable level of 10,000 lit.`;
      fuelStatus.style.color = "goldenrod";
      launchStatus.style.color = "red";
      launchStatus.textContent = "Shuttle not ready for launch";
    } else {
      fuelStatus.textContent = `${fuelLevel.value} is acceptable for launch`;
      fuelStatus.style.color = "green";
      allReady++;
    }

    //validate cargoMass input if valid update DOM low enough
    if (cargoMass.value == "") {
      window.alert("You must submit a cargo mass.");
      cargoStatus.style.color = "goldenrod";
      cargoStatus.textContent = "cargo not good for launch";
    } else if (isNaN(cargoMass.value)) {
      window.alert("Caro Mass must be a number.");
      cargoStatus.style.color = "goldenrod";
      cargoStatus.textContent = "cargo not good for launch";
    } else if (cargoMass.value > 10000) {
      cargoStatus.textContent = `${cargoMass.value} kg is above acceptable level of 10,000 kg`;
      cargoStatus.style.color = "goldenrod";
      launchStatus.style.color = "red";
      launchStatus.textContent = "Shuttle not ready for launch";
    } else {
      cargoStatus.textContent = `${cargoMass.value} kg is acceptable for launch`;
      cargoStatus.style.color = "green";
      allReady++;
    }
    // if all checks are good then set launchStatus to 'ready...'
    if (allReady == 4) {
      launchStatus.style.color = "green";
      launchStatus.textContent = "Ready for launch!";
    }

    e.preventDefault();

    faultyForms.style.visibility = "visible";
    fetch("https://handlers.education.launchcode.org/static/planets.json")
      .then((res) => {
        return res.json();
      })
      .then(function (destination) {
        console.log(destination);
        let randoDest = Math.floor(Math.random() * 5);
        missionTarget.innerHTML = `<h2>Mission Destination</h2>
        <ol>
           <li>Name: ${destination[randoDest].name}</li>
           <li>Diameter: ${destination[randoDest].diameter}</li>
           <li>Star: ${destination[randoDest].star}</li>
           <li>Distance from Earth: ${destination[randoDest].distance}</li>
           <li>Number of Moons: ${destination[randoDest].moons}</li>
        </ol>
        <img src="${destination[randoDest].image}">`;
      });
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
