// Strict mode
"use strict";

// Matric number Input
let matricNumber = document.querySelector("#input-matrix");

// Inputed Matric Number
let inputedMatric = "";

// Check matric number button
let checkerButton = document.querySelector("#check-number");

// Reset button
let resetButton = document.querySelector("#reset");

// Displayed message
let message = document.querySelector("#message");

checkerButton.addEventListener("click", () => {
  matricNumber.value.length !== 8
    ? // If matrixNumber < 8
      (message.textContent = "Please matric is 8 digits")
    : /// If matrixNumber = 8 ///
      // Remove error messsage
      ((message.textContent = ""),
      // Set matric to inputed value
      (inputedMatric = matricNumber.value),
      /// If inputedMatric is even ///
      Number(inputedMatric) % 2 === 0
        ? (message.classList.remove("text-red-500"),
          message.classList.add("text-green-500"),
          (message.textContent = "Congratulations!!! You won the award 🎉"))
        : (message.classList.remove("text-green-500"),
          message.classList.add("text-red-500"),
          (message.textContent = "Sorry You didn't qualify for the award 😔")));
  matricNumber.value = "";
});

resetButton.addEventListener("click", () => {
  matricNumber.value = "";
  message.textContent = "";
  inputedMatric = "";
});
