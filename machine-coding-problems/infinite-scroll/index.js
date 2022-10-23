const container = document.querySelector(".container");

function loadImg(maximg = 10) {
  let i = 0;
  while (i < maximg) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = `${data.message}`;
        container.appendChild(img);
      });
    i++;
  }
}

loadImg();

window.addEventListener("scroll", () => {
  //   //   console.log(window.scrollY); //scrolled from top
  //   //   console.log(window.innerHeight); //visible part of screen
  //   console.log(document.documentElement.scrollHeight);
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImg();
  }
});
