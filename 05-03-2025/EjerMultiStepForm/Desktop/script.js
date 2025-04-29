document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle");
    const prices = document.querySelectorAll(".price");

    toggle.addEventListener("change", function () {
        prices.forEach(price => {
            if (toggle.checked) {
                price.textContent = `$${price.getAttribute("data-yearly")}/year`;
                if(!price.nextElementSibling || nextElementSiblking.classList.contains("extra-info")){
                    let monthsFree = document.createElement("p");
                    monthsFree.textContent = "2 months free";
                    monthsFree.classList.add("extra-info");
                    price.parentNode.appendChild(monthsFree);
                }
            } else {
                price.textContent = `$${price.getAttribute("data-monthly")}/mo`;
                if(price.nextElementSibling && price.nextElementSibling.classList.contains("extra-info"))
                    price.nextElementSibling.remove();
            }
        });
    });
});

document.querySelectedAll('.plan').forEach(plan => {
    plan.addEventListener('click', function() {
        document.querySelectedAll('.plan').forEach(p => p.classList.remove('selected'));
        
        this.classListlist.add('selected');
    });
});
