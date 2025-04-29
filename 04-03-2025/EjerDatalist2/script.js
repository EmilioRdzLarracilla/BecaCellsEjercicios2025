const input = document.querySelector('#predictiveInput');
let text = '';
const urlToSearch = {
    "porsche 911": "https://www.carwow.es/porsche",
    "maserati mc20": "https://www.carwow.es/maserati/mc20",
    "bmw m2": "https://www.carwow.es/bmw/m2",
    "civic type r": "https://www.carwow.es/honda/civic-type-r",
    "toyota gr yaris": "https://www.carwow.es/toyota/gr-yaris",
    "ford mustang": "https://www.carwow.es/ford/mustang-fastback",
    "alpine a110": "https://www.carwow.es/alpine",
    "bmw m4": "https://www.carwow.es/bmw/m4-competition",
    "hyundai 20n": "https://www.carwow.es/hyundai/i20-n",
    "gr supra": "https://www.carwow.es/toyota/gr-supra"
}
let filterList = [];
input.addEventListener('input', ({data}) => {
    text += data;
    filterList = urlToSearch.filter((element) => {
        return element === text || element.includes(text);
    });
    if (filterList.length > 0){
        const ul = document.createElement('ol');
        filterList.forEach((option) => {
            const li = document.createElement('li');
            li.innerText = option;
            ul.appendChild(li);
            document.body.appendChild(ul);
        });
    }
})

document.getElementById("searchButton").addEventListener("click", redirectToCarPage);

document.getElementById("listCar").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        redirectToCarPage();
    }
})