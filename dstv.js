//Strict mode
"use strict";

// Continue button
const continueBtn = document.getElementById("continue");

// Input feild
const inputedAge = document.getElementById("age");

// message
const message = document.getElementById("message");

inputedAge.textContent = "";

function redirect() {
  location.replace("./dstv-shows.html");
}

continueBtn.addEventListener("click", () => {
  let userAge = parseInt(inputedAge.value);
  userAge >= 16
    ? (message.classList.remove("text-red-500", "text-green-500"),
      message.classList.add("text-green-500"),
      (message.textContent = "Access Granted"),
      redirect())
    : (message.classList.remove("text-green-500", "text-red-500"),
      message.classList.add("text-red-500"),
      (message.textContent =
        "❌ Access not Granted, You must be 16 years or older"));
  inputedAge.value = "";
});

// document.addEventListener("keypress", (e) => {
//   let key = e.key;
//   console.log(key);
//   //   key = "Enter"
//   //     ? ((message.textContent = "Access Granted"), chooseChannel())
//   //     : (message.classList.remove("text-green-500"),
//   //       message.classList.add("text-red-500"),
//   //       (message.textContent =
//   //         "❌ Access not Granted, You must be 16 years or older"));
//   inputedAge.value = "";
// });
