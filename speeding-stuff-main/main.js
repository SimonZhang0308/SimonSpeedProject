// Caught Speeding CS10 Review

// Variables to store HTML Elements
let determineBtn = document.getElementById("determine-btn");
let driverSpeedInput = document.getElementById("driver-speed");
let speedLimitInput = document.getElementById("speed-limit");
let outputSpan = document.getElementById("output");

// Add Event Listener to Calculate Button
determineBtn.addEventListener("click", determineBtnClicked);

// calculate and display severity of speeding ticket



function determineBtnClicked() {
  // Input
  let driverSpeed = +driverSpeedInput.value;
  let speedLimit = +speedLimitInput.value;
  // Output
  determineTicket(driverSpeed, speedLimit);
}

function determineTicket(driverSpeed, speedLimit) {
  // Process
  if (driverSpeed >= speedLimit + 20) {
    outputSpan.innerHTML = "BIG TICKET";
  } else if (driverSpeed > speedLimit) {
    outputSpan.innerHTML = "SMALL TICKET";
  } else {
    outputSpan.innerHTML = "NO TICKET";
  }
}
