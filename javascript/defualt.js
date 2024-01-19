const defualt = document.querySelectorAll(".default");
const button = document.querySelector("button.fa-wrapper");
const navigationContainer = document.querySelector("ul.list-items");
const closeButton = document.querySelector("li.close-button");
// console.log(button, navigationContainer, closeButton);
defualt.forEach((even) => {
  even.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
button.addEventListener("click", () => {
  navigationContainer.classList.toggle("display-none");
});
closeButton.addEventListener("click", () => {
  navigationContainer.classList.add("display-none");
});
