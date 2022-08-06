// Nigerian Shows
const nigerian = document.getElementById("nigerian");

// American Shows
const american = document.getElementById("american");

// message
const message = document.getElementById("message");

// Done button
const doneBtn = document.getElementById("done");

function redirect() {
  location.replace("./dstv.html");
}

doneBtn.addEventListener("click", () => {
  nigerian.checked || american.checked
    ? (message.classList.remove("text-red-600"),
      message.classList.add("text-green-500"),
      (message.textContent = "Done"),
      message.classList.remove("hidden"),
      redirect())
    : message.classList.remove("hidden");
});
