const steps = document.querySelectorAll(".register-form__step");
const nextButtons = document.querySelectorAll(".register-form__button--next");
const dots = document.querySelectorAll(".form-pagination__dot");
const stepInfo = document.querySelector(".form-pagination__step");
const checkboxItemsInput = document.querySelectorAll(".register-form__custom-checkbox input");

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

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            goToStep(i);
        });
    });

    nextButtons.forEach((button) => {
        button.addEventListener("click", nextStep);
    });

    checkboxItemsInput.forEach((checkboxInput) => {
        checkboxInput.addEventListener("change", () => {
            updateCheckboxItem(checkboxInput);
        });
    });

    showStep(currentStep);
});
