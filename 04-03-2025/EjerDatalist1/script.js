function redirectToCarPage() {
    let inputValue = document.getElementById("listCar").value.trim().toLowerCase();
    let options = document.querySelectorAll("#cars option");

    let selectedOption = Array.from(options).find(option => option.value.toLowerCase() === inputValue);

    if (selectedOption) {
        let url = selectedOption.getAttribute("data-url");
        if (url) {
            window.open(url, "_blank");
        }
    } 
}

document.getElementById("searchButton").addEventListener("click", redirectToCarPage);

document.getElementById("listCar").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        redirectToCarPage();
    }
});