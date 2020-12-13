// Write your JavaScript code here!

function whenLoad() {
  var formSubmit = document.getElementById("launchForm");
  var pilotName = document.querySelector("input[name=pilotName]");
  var copilotName = document.querySelector("input[name=copilotName]");
  var fuelLevel = document.querySelector("input[name=fuelLevel]");
  var cargoMass = document.querySelector("input[name=cargoMass]");

  formSubmit.addEventListener("submit", (e) => {
    const hasNum = /\d/;

    if (pilotName.value == "") {
      window.alert("You must enter a name");
      e.preventDefault();
      return false;
    } else {
      document.querySelector("#faultyItems").style.visibility = "visible";
      
    }
    if (hasNum.test(pilotName.value)) {
      window.alert("Name must not have numbers");
      return false;
    }
    if (copilotName.value == "") {
      window.alert("You must enter a copilot name.");
      e.preventDefault();
    }
    if (hasNum.test(copilotName.value)) {
      window.alert("Name must not have numbers");
      return false;
    }

    if (fuelLevel.value == "") {
      window.alert("You must submit a fuel level.");
      e.preventDefault();
    }
    if (isNaN(fuelLevel.value)) {
      window.alert("Fuel   Level must be a number");
      return false;
    }
    if (cargoMass.value == "") {
      window.alert("You must submit a cargo mass.");
      e.preventDefault();
    }
    if (isNaN(cargoMass.value)) {
      window.alert("Caro Mass must be a number.");
      return false;
    }
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
