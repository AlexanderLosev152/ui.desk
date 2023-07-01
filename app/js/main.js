// burger
function myFunction() {
  var x = document.getElementById("menu_nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// добавление и удаление класса.
const boxes = document.querySelectorAll(".menu_button");

for (const box of boxes) {
  box.addEventListener("click", function handleClick() {
    box.classList.toggle("menu_active");
  });
}

