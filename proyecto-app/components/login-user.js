import { LitElement, html, css } from "https://cdn.jsdelivr.net/npm/lit@3.1.0/+esm";


class LoginUser extends LitElement {
    static styles = css`
    :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: Arial, sans-serif;
        
        color: white;
    }

    form {
        width: 350px;
        height: 450px;
        background-image: url("/img/Libreria_Lightstream_RGB-03.png");
        background-size: cover; 
        background-position: center; 
        text-align: center;
        padding: 20px;
        border-radius: 15px;
    }

    input {
        width: 90%; 
        padding: 10px;
        margin: 10px 0;
        border: 1px solid gray;
        border-radius: 5px;
        display: block;
        font-size: 16px;
    }

    input[type="submit"] {
        width: 50%;
        background: #1c5c9f;
        color: white;
        border: none;
        margin-left: 80px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background 0.3s ease; 
    }

    input[type="submit"]:hover {
        background: #144a7f;
    }
`;

    constructor() {
        super();
        this.userData = []; 
    }

    
    async firstUpdated() {
            const response = await fetch('../userData.json');
            this.userData = await response.json();
    }

    // Método para validar usuario y contraseña
    validateUser() {
        const formData = new FormData(this.shadowRoot.querySelector("form"));
        const username = formData.get("user").trim();
        const password = formData.get("pass").trim();

        const userFound = this.userData.find(user => 
            user.user === username && user.pass === password
        );

        if (userFound) {
            alert(`¡Bienvenido!`);
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    }

    render() {
        return html`
        <form @submit="${this.validateUser}">
            <label>Usuario
                <input type="text" name="user" required>
            </label>

            <label>Contraseña
                <input type="password" name="pass" required>
            </label>

            <input type="submit" value="Iniciar sesión">
        </form>`;
    }
}

customElements.define('login-user', LoginUser);
