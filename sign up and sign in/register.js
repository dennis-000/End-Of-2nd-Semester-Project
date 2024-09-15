document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const loader = document.getElementById('loader');
    const successMessage = document.getElementById('successMessage');
    const newsletterForm = document.getElementById('newsletterForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        subscribeNewsletter();
    });

    function validateForm() {
        let isValid = true;
        const fields = ['fullName', 'email', 'studentId', 'dob', 'gender', 'sports', 'experience'];

        fields.forEach(field => {
            const input = document.getElementById(field);
            const error = document.getElementById(`${field}Error`);
            if (!input.value) {
                isValid = false;
                error.innerHTML = '<i class="fas fa-exclamation-circle"></i> This field is required';
            } else {
                error.textContent = '';
            }
        });

        // Additional email validation
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            emailError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter a valid email address';
        }

        // reCAPTCHA validation
        const recaptchaResponse = grecaptcha.getResponse();
        const recaptchaError = document.getElementById('recaptchaError');
        if (recaptchaResponse.length === 0) {
            isValid = false;
            recaptchaError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please complete the reCAPTCHA';
        } else {
            recaptchaError.textContent = '';
        }

        return isValid;
    }

    function submitForm() {
        loader.style.display = 'block';
        form.style.opacity = '0.5';

        // Simulating an API call
        setTimeout(() => {
            loader.style.display = 'none';
            form.style.display = 'none';
            successMessage.style.display = 'block';
            successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Registration successful! Welcome to Pentecost University SRC Sports Academy.';
        }, 2000);
    }

    function subscribeNewsletter() {
        const emailInput = document.getElementById('newsletterEmail');
        const email = emailInput.value;

        // Simulating newsletter subscription
        alert(`Thank you for subscribing to our newsletter with email: ${email}`);
        emailInput.value = '';
    }
});