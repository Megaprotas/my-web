function sendMail(contactForm) {
    emailjs.send("eddy", "my_own_website", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "content": contactForm.content.value
    })
    .then(
        function(response) {
            document.getElementById("con-form").reset();
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}

function submitForm() {
    document.con-form.submit();
    document.con-form.reset();
    }