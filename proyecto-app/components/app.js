import { LitElement, html, css } from "https://cdn.jsdelivr.net/npm/lit@3.1.0/+esm";


class App extends LitElement {
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
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contenedor-tarjetas {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px; 
        justify-content: center;
        width: 100%;
    }

    .tarjeta {
        width: 350px; 
        height: 350px;
        display: flex;
        background-size: cover; 
        background-position: center; 
        background-repeat: no-repeat; 
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        color: black;
    }

    h5{
        text-decoration: underline;
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
            <h1>Mis Cuentas</h1>
        <article class=tarjeta style="background-image: url('/img/Imagen de WhatsApp 2025-03-23 a las 21.52.49_ecd038ec.jpg');">

        </article>
        <br>
        <article class=tarjeta style="background-image: url('/img/Imagen de WhatsApp 2025-03-23 a las 21.53.10_ca201b9c.jpg');">

        </article>
        <br>
        <article class=tarjeta style="background-image: url('/img/Imagen de WhatsApp 2025-03-23 a las 21.53.23_c924ef97.jpg');">
        
        </article>
            <h5>Cargar mas</h5>
        </section>

        `;
    }
}

customElements.define('app-user', App);
