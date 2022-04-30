var currentHour = moment().hour();
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var saveBtn = document.querySelectorAll(".saveBtn");
console.log(currentHour);

document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do YYYY");
for (var i = 0; i < 9; i++) {
  if (currentHour === hour[i]) {
    console.log(i);
    document.getElementById(i).classList.add("present");
  }
  if (currentHour > hour[i]) {
    console.log(i);
    document.getElementById(i).classList.add("past");
  }
  if (currentHour < hour[i]) {
    console.log(i);
    document.getElementById(i).classList.add("future");
  }
