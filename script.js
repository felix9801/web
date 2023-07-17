document.addEventListener("DOMContentLoaded", function () {
  const fizzBuzzContainer = document.getElementById("fizzbuzz-container");

  // FizzBuzz logic
  for (let i = 1; i <= 100; i++) {
    let content = i;

    if (i % 3 === 0 && i % 5 === 0) {
      content = "FizzBuzz";
    } else if (i % 3 === 0) {
      content = "Fizz";
    } else if (i % 5 === 0) {
      content = "Buzz";
    }

    const fizzBuzzItem = document.createElement("div");
    fizzBuzzItem.classList.add("fizzbuzz-item");
    fizzBuzzItem.textContent = content;
    fizzBuzzContainer.appendChild(fizzBuzzItem);
  }
});