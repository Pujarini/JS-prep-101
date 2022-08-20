const url = document.getElementById("url");
const size = document.getElementById("size").value;
const btn = document.getElementById("generate-btn");
const spinner = document.getElementById("spinner");
const qr = document.getElementById("qrcode");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  clearQr();
  console.log(url.value, size);
  if (url.value === "") {
    alert("enter url");
  } else {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      generateQRCode(url.value, size);
    }, 1000);
  }
});

const generateQRCode = (url, size) => {
  console.log(url, size);
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

const showSpinner = () => {
  spinner.style.display = "block";
};

const hideSpinner = () => {
  spinner.style.display = "none";
};

const clearQr = () => {
  qr.innerHTML = "";
};

hideSpinner();
