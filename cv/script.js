var form = document.querySelector("#login");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var usuario = document.querySelector("#usuario").value;
        var password = document.querySelector("#password").value;

        if (usuario === "Nestor" && password === "1234") {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "cv.html";
        } else {
            document.querySelector("#error").textContent = "El usuario o contraseña son incorrectos";
        }
    });
}

if (window.location.pathname.includes("cv.html")) {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }

    document.querySelector("#salir").addEventListener("click", function(){
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html";;
    });
};