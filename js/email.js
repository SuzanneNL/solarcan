function sendMail(contactForm) {
    emailjs.send("gmail", "solarcan", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    sweetalertclick();
    return false;  // To block from loading a new page
}

function sweetalertclick(){
    swal("", "Your message has been sent!", "success");
}