
console.log('En el formulario')

document.getElementById("button-info").addEventListener("submit", function (event) {

    event.preventDefault();
    let inputName = document.getElementById("input-nombre");
    let nombre = inputName.textContent;
    let inputEmail = document.getElementById("input-correo");
    let correo = inputEmail.textContent;
    let inputPhone = document.getElementById("input-telefono");
    let numero = inputPhone.textContent;

    // let datos  = [{ nombre }, { correo }, { numero }];

    console.log(datos);

});
