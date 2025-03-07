document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("forms");
const user = "saulrodriguezsk";
const pass = "1234*567";
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let username =  document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let dialog = document.getElementById("dialog");
    if( username === user && password === pass) {
        window.location.href = "cv.html";
    } else {
        dialog.showModal(); // show sialog only if the data is incorrect
    }
    form.reset()
});
});