

// =================== Emai Setup




const form = document.querySelector(".contact1-form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");

const subject = document.getElementById("subject");
const mess = document.getElementById("message");
// Email validation regex
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate email
    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }


    // Check if Email.send function is available (replace with your own email sending method)
    if (!window.Email) {
    alert("Error: Please include the Email.send library in your code.");
    return;
}

// Format the body message using template literals
const bodyMessage = `Full Name: ${fullName.value}<br>
Email: ${email.value}<br>
Subject: ${subject.value}<br>
Message: ${mess.value}`;

// Send email using the Email.send function (replace with your own script)
Email.send({
    // Modify these details according to your email service
    Host: "emailHost",
    Username: "youremail.com",
    Password: "password",
    To: 'youremail.com',
    From: 'youremail.com',
    Subject: subject.value,
    Body: bodyMessage
}).then(
    message => alert(message)
).catch(error => console.error(error)); // Handle any errors

e.preventDefault();
});