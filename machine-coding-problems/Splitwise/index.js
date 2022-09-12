const amt = document.querySelector(".amt");
const person = document.querySelector(".person");
const split = document.querySelector(".btn-split");
const addPpl = document.querySelector(".btn-add");
const otputDiv = document.querySelector(".output");
console.log(split, person.value, amt.value);

var people = [{ id: 546, name: "jake", phone: 907, email: "abc@abc.com" }];

const displayPpl = (ppl, ul) => {
  if (ppl.length > 0) {
    ppl.map((item) => {
      const li = document.createElement("li");
      li.innerHTML = item;
      ul.appendChild(li);
    });
  }
};

addPpl.addEventListener("click", (e) => {
  e.preventDefault();
  if (person.value) {
    people.push(person.value);
    const ul = document.createElement("ul");
    otputDiv.appendChild(ul);
    displayPpl(people, ul);
  }
  person.value = "";
});
