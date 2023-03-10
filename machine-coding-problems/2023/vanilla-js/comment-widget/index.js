const comment = document.getElementById("comment__input");
const addBtn = document.getElementById("add__comment__btn");
const replyContainer = document.querySelector(".reply__box");
const replyBtn = document.querySelector(".reply__btn");
console.log(replyBtn);

let commentText = "";

comment.addEventListener("input", (e) => {
  console.log(e.target.value);
});

addBtn.addEventListener("click", (e) => {
  console.log(comment.value);
  const newComment = document.createElement("div");
  newComment.innerHTML = `<p>${comment.value}<p><button class="reply__btn">Reply</button>`;
  replyContainer.appendChild(newComment);
  comment.value = "";
  /**
   * create a div with comment value
   */
});

replyBtn.addEventListener("click", (e) => {
  console.log("clicked");
});
