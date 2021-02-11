"use strict";
window.addEventListener("DOMContentLoaded", loop);
const arr = [];
let counter = 0;

console.log(arr);

function loop() {
  console.clear();
  // run loop every 1 second, add one to counter
  setTimeout(loop, 1000);
  counter++;
  if (arr.length != 9) {
    // adds new element to the begging of the array
    arr.unshift(counter);
  } else {
    arr.unshift(counter);
    // deletes element from the end of the array
    arr.pop();
  }
  console.log(arr);
}
