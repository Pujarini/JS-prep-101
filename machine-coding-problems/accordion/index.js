const accord = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");
console.log(accord);

for (let i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", () => {
    accord[i].classList.toggle("active");
    var panel = accord[i].nextElementSibling;
    hideContent();
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function hideContent() {
  for (i = 0; i < panel.length; i++) {
    panel[i].style.display = "none";
  }
}
