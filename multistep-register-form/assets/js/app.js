const steps = document.querySelectorAll(".register-form__step");
const nextButtons = document.querySelectorAll(".register-form__button--next");
const submitButton = document.querySelector(".register-form__button--submit");
const dots = document.querySelectorAll(".form-pagination__dot");
const stepInfo = document.querySelector(".form-pagination__step");
const checkboxItemsInput = document.querySelectorAll(".register-form__custom-checkbox input");
const allInputs = document.querySelectorAll("input");

const summaryName = document.getElementById("summaryName");
const summaryEmail = document.getElementById("summaryEmail");
const summaryTopics = document.getElementById("summaryTopics");

document.addEventListener("DOMContentLoaded", function () {
    let currentStep = 0;

    function showStep(index) {
        let fill_dot = true;

        steps.forEach((step, i) => {
            step.classList.toggle("register-form__step--active", i === index);
        });

        dots.forEach((dot, i) => {
            if (i === index) {
                fill_dot = false;
            }
            dot.classList.toggle("form-pagination__dot--filled", fill_dot);
            dot.classList.toggle("form-pagination__dot--current", i === index);
        });

        if (index === steps.length - 1) {
            updateSummary();
        }

        stepInfo.textContent = `Step ${index + 1} of ${steps.length}`;
    }

    function nextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function goToStep(index) {
        let selectedDot = dots[index];
        if (selectedDot.classList.contains("form-pagination__dot--filled")) {
            currentStep = index;
            showStep(currentStep);
        }
    }

    function updateCheckboxItem(checkboxInput) {
        let inputParent = checkboxInput.closest(".register-form__custom-checkbox");
        inputParent.classList.toggle("register-form__custom-checkbox--checked");
    }

    function updateSummary() {
        // Update name
        let nameInput = document.getElementById("name");
        summaryName.textContent = nameInput.value;

        // Update email
        let emailInput = document.getElementById("email");
        summaryEmail.textContent = emailInput.value;

        // Update topics
        let checkedItems = document.querySelectorAll(".register-form__custom-checkbox--checked");
        summaryTopics.innerHTML = "";
        checkedItems.forEach((item) => {
            let li = document.createElement("li");
            li.textContent = item.querySelector("input").value;
            summaryTopics.appendChild(li);
        });

        if (summaryTopics.children.length === 0) {
            summaryTopics.textContent = "No topics selected";
        }
    }

    function successRegistration() {
        alert("Registration successful!");
        resetAllInputs();
        updateSummary();
        currentStep = 0;
        showStep(currentStep);
    }

    function resetAllInputs() {
        allInputs.forEach((input) => {
            if (input.type === "checkbox") {
                input.checked = false;
            } else {
                input.value = "";
            }
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            goToStep(i);
        });
    });

    nextButtons.forEach((button) => {
        button.addEventListener("click", nextStep);
    });

    submitButton.addEventListener("click", successRegistration);

    checkboxItemsInput.forEach((checkboxInput) => {
        checkboxInput.addEventListener("change", () => {
            updateCheckboxItem(checkboxInput);
        });
    });

    showStep(currentStep);
});
