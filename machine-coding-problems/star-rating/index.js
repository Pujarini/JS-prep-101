const allstars = document.querySelectorAll(".star");
const starOutput = document.querySelector(".star_number");

allstars.forEach((item, i) => {
  item.addEventListener("click", () => {
    let current_rating = i + 1;
    allstars.forEach((star, k) => {
      if (current_rating >= k + 1) {
        console.log(star, k + 1, i + 1);
        let icon = star.querySelector("i");
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      } else {
        let icon = star.querySelector("i");
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
      }

      starOutput.innerHTML = `You gave ${i + 1} ${
        i + 1 > 1 ? "stars" : "star"
      } `;
    });
  });
});
