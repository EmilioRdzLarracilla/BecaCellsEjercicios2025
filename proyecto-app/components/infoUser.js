import { LitElement, html, css } from "https://cdn.jsdelivr.net/npm/lit@3.1.0/+esm";


class InfoUser extends LitElement {
    static styles = css`
    :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: Arial, sans-serif;
        color: white;
    }

    .container {
        width: 350px;
        height: 500px;
        background-image: url("/img/Libreria_Lightstream_RGB-03.png");
        background-size: cover; 
        background-position: center; 
        text-align: center;
        padding: 20px;
        border-radius: 15px;
    }    

    img{
        border-radius: 100px;
    }

    button{
        padding: 8px;
       border: none;
        border-radius: 15px;
        cursor: pointer;
        transition: 300ms;
    }

    button:hover{
        background-color: gray;
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

    
    render() {
        return html`
        <section class="container">
        <img src="/img/user.jpg" width="250px" height="200px">
        <p>Saldo disponible <h3>$100.83</h3></p>
        <br>
            <button>Enviar</button>
            <button>Pagar Servicio</button>
            <button>Retiro Sin tarjeta</button>
            <button>... Mas</button>
            <br>
            <h2>Credito al instante</h2>
            <img src="https://media.tenor.com/mxct8WgaoLQAAAAi/regalo.gif" width="200px" height="120px">
        </section>

        `;
    }
}

customElements.define('info-user', InfoUser);
