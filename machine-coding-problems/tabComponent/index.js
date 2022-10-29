const tabs = document.querySelectorAll(".tabLink");
const content = document.querySelectorAll(".tabContent");
console.log(content);

console.log(tabs);

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (e) => {
    e.preventDefault();
    removeClass();
    tabs[i].classList.add("active");
    showContent(tabs[i].id);
    // console.log(tabs[i].id);
  });
}

function showContent(id) {
  for (let i = 0; i < content.length; i++) {
    if (content[i].id === id) {
      hideContent();
      if (content[i].style.display === "none") {
        content[i].style.display = "block";
      } else {
        content[i].style.display = "none";
      }
    }
  }
}

function hideContent() {
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
}

function removeClass() {
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}
