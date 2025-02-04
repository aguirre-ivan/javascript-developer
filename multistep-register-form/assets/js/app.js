const steps = document.querySelectorAll(".register-form__step");
const nextButtons = document.querySelectorAll(".register-form__button--next");
const dots = document.querySelectorAll(".form-pagination__dot");

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
    }
    
    function nextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }
    
    nextButtons.forEach((button) => {
        button.addEventListener("click", nextStep);
    });
});
