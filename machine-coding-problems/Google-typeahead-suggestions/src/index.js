// import "./styles.css";
import { debounce, getSuggestions } from "./utils.js";

const input = document.querySelector("#search-box");
const suggestionBox = document.querySelector(".suggestionsListWrapper");

const clearSuggestions = () => {
  suggestionBox.classList.remove("suggestion-visible");
};

const renderItems = (list = []) => {
  const fragment = document.createDocumentFragment();
  list.forEach((item) => {
    const element = document.createElement("div");
    element.innerHTML = item;
    element.setAttribute("data-result", "data-list");
    fragment.appendChild(element);
  });
  suggestionBox.innerHTML = "";
  suggestionBox.appendChild(fragment);
};

const fetchResult = async (keyword) => {
  const response = await getSuggestions(keyword);
  if (response.length > 0) {
    suggestionBox.classList.add("suggestion-visible");
    renderItems(response);
  }
  console.log(response);
};

const handleInput = (e) => {
  const inputVal = e.target.value;
  if (inputVal) {
    fetchResult(inputVal);
  } else {
    clearSuggestions();
  }
};

const handleResult = (e) => {
  console.log(e.target.dataset);
  const { result } = e.target.dataset;
  if (result) {
    input.value = e.target.innerHTML;
    clearSuggestions();
  }
};

(() => {
  input.addEventListener("input", debounce(handleInput, 500));
  suggestionBox.addEventListener("click", handleResult);
})();
