// script.js - interactive features for the Himalayas website.
// Every function below is plain JavaScript: no libraries needed.

// ---- "Did you know?" facts shown on the home page ----
var facts = [
    "The word Himalaya comes from Sanskrit and means 'abode of snow'.",
    "The Himalayas stretch across five countries: Bhutan, China, India, Nepal, and Pakistan.",
    "Mount Everest, at 8,848.86 metres, is the tallest mountain on Earth.",
    "The Himalayas are still growing about 1 centimetre taller every year.",
    "More than 100 peaks in the Himalayas rise above 7,200 metres."
];

// Picks a random fact from the list and shows it on the page.
function showFact() {
    var index = Math.floor(Math.random() * facts.length); // random position in the array
    document.getElementById("fact-box").innerHTML = facts[index]; // put it in the page
}

// ---- Contact form check ----
// Runs when the form is submitted. Returns false so the page does not reload
// (there is no server to send the message to yet).
function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var output = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        output.style.color = "red";
        output.innerHTML = "Please fill in your name, email, and message.";
        return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        output.style.color = "red";
        output.innerHTML = "That email address does not look valid.";
        return false;
    }

    output.style.color = "green";
    output.innerHTML = "Thanks, " + name + "! Your message has been noted.";
    return false;
}

// ---- Footer year ----
// Writes the current year into the footer so it never goes out of date.
function setYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

// Run setYear as soon as the page finishes loading.
window.onload = setYear;
