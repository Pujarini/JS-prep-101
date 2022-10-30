// import { ndata } from "./data/normalData";

const container = document.querySelector(".container");
const ndata = [
  {
    startTime: "00:00",
    endTime: "01:30",
    color: "#f6be23",
    title: "#TeamDevkode",
  },
  {
    startTime: "4:30",
    endTime: "7:30",
    color: "#f6501e",
    title: "#TeamDevkode",
  },
  {
    startTime: "12:00",
    endTime: "13:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "9:00",
    endTime: "10:00",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "16:00",
    endTime: "19:00",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "20:30",
    endTime: "22:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
];

console.log(container);

function createDays(event) {
  console.log(event.endTime - event.startTime);
  var result = []; // Results will go here
  //   var nowHour = new Date().getHours(); // Get current hour of the day

  // Loop from current hour number to 23
  for (var i = 0; i < 24; i++) {
    result.push(i + ": 00 ");
  }

  result.forEach((item) => {
    const day = document.createElement("div");
    day.classList.add("day");
    day.innerHTML = item;
    // console.log(day.innerHTML);
    container.appendChild(day);
  });
}
function createEvents() {
  ndata.forEach((item) => {
    createDays(item);
  });
}

createEvents();

// createDays();
