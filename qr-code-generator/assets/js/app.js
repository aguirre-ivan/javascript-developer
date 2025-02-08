const qr_base = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=chau"
const qr = document.querySelector(".qr-generator__qr img");
const urlInput = document.querySelector(".qr-generator__url-input input");

urlInput.addEventListener("input", (e) => {
    qr.src = qr_base + e.target.value;
});


const form = document.querySelector(".qr-generator__url-input form");
const mainContainer = document.querySelector(".main-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    mainContainer.classList.add("show-qr");
});
