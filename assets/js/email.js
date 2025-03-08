(function() {
    emailjs.init("pa4bpXGI1b8x8tk0u");
})();

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const originalBtnText = submitBtn.innerHTML;

            submitBtn.innerHTML = 'Sending... <i class="uil uil-spinner"></i>';
            submitBtn.disabled = true;

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const now = new Date();
            const formattedDate = now.toLocaleString();

            console.log("Form Values:", { name, email, message, formattedDate });

            const templateParams = {
                name: name,
                email: email,
                message: message,
                date: formattedDate,
                from_name: name,
                from_email: email
            };

            emailjs.send('service_bkt3jc1', 'template_uzmn4ep', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response);
                    formStatus.innerHTML = 'Your message has been sent. Thank you!';
                    formStatus.className = 'form-status success';

                    contactForm.reset();

                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.disabled = false;

                        setTimeout(() => {
                            formStatus.innerHTML = '';
                            formStatus.className = 'form-status';
                        }, 5000);
                    }, 2000);
                })
                .catch(function(error) {
                    console.error('FAILED...', error);
                    formStatus.innerHTML = 'Oops! Something went wrong. Please try again.';
                    formStatus.className = 'form-status error';

                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
});
