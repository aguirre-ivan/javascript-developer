const form = document.querySelector(".qr-generator__url-input form");
const mainContainer = document.querySelector(".main-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    mainContainer.classList.add("show-qr");
});
