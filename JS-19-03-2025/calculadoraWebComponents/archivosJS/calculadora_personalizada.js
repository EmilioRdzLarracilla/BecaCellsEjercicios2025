

class CalculadoraPersonalizada extends HTMLElement{
    constructor() {
        super();

        this.num1 = "";
        this.num2 = "";
        this.operador = "";
        this.operando = false;

        //shadowDOM
        this.attachShadow({mode: "open"});

        this.shadowRoot.innerHTML = `
            <style>

                .calculadora {
                    background-color: #534c87;
                    color: #f1f0f3;
                    width: 350px;
                    max-width: 100%;
                    padding: 1.5rem;
                    border-radius: 1rem;
                    display: grid;
                    gap: 0.5rem;
                }

                .pantalla {
                    grid-column: 1 / -1;
                    background-color: #0c0350;
                    padding: 1.5rem;
                    font-size: 2rem;
                    text-align: right;
                    border-radius: 0.5rem;
                    margin-bottom: 1rem;
                    font-family: sans-serif;
                    font-weight: 600;
                }

                .botones {
                    display: grid;
                    grid-template-columns:  repeat(4,1fr);
                    gap: 0.5rem;
                }

                .btn {
                    background-color: #534c87;
                    color: #f1f0f3;
                    border: 0;
                    padding: 1.5rem 0.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0.5rem;
                    cursor: pointer;
                }

                .btn:hover {
                    background-color: #0c0350;
                }

                #igual {
                    background-color: #2005ee;
                }

                #igual:hover {
                    background-color: #2005ee00;
                }

            </style>

            <section class="calculadora">
                <section class="pantalla">0</section>
                <section class="botones">
                    <button id="c" class="btn">C</button>
                    <button id="borrar" class="btn">←</button>
                    <button class="btn" data-value="/">/</button>
                    <button class="btn" data-value="*">*</button>
                    <button class="btn" data-value="7">7</button>
                    <button class="btn" data-value="8">8</button>
                    <button class="btn" data-value="9">9</button>
                    <button class="btn" data-value="-">-</button>
                    <button class="btn" data-value="4">4</button>
                    <button class="btn" data-value="5">5</button>
                    <button class="btn" data-value="6">6</button>
                    <button class="btn" data-value="+">+</button>
                    <button class="btn" data-value="1">1</button>
                    <button class="btn" data-value="2">2</button>
                    <button class="btn" data-value="3">3</button>
                    <button class="btn" data-value="%">%</button>
                    <button class="btn" data-value=".">.</button>
                    <button id="cero" class="btn" data-value="0">0</button>
                    <button class="btn" data-value="^">^</button>
                    <button id="igual" class="btn" data-value="=">=</button>
                </section>
            </section>
        `;

        // referencias del ShadowDOM
        this.pantalla = this.shadowRoot.querySelector(".pantalla");
        this.botones = this.shadowRoot.querySelectorAll(".btn");

        // evento para los botones
        this.botones.forEach(boton => boton.addEventListener("click", () => this.clickBorrarCIgual(boton)));

    }

    actualizarPantalla(valor){
        this.pantalla.textContent =valor;
    }

    limpiarPantalla() {
        this.num1 = "";
        this.num2 = "";
        this.operador = "";
        this.operando = "";
        this.actualizarPantalla("0");
    }

    borraUltimo() {
        if(!this.operando){
            this.num1 = this.num1.slice(0, -1) || "0";
            this.actualizarPantalla(this.num1);
        } else {
            this.num2 = this.num2.slice(0, -1) || "";
            this.actualizarPantalla(this.num2 || this.num1);
        }
    }

    clickBorrarCIgual(boton){
        const valor = boton.textContent;
        const actions = {
            c: () => this.limpiarPantalla(),
            borrar: () => this.borraUltimo(),
            igual: () => this.clickIgual()
        }; 
        if (actions[boton.id]) return actions[boton.id]();
        if (this.operaciones[valor]) return this.clickOperador(valor);
        this.clickNumero(valor);
    }
    
    clickIgual(){
        if (this.num1 && this.operador && this.num2) {
            const resultado = this.operaciones[this.operador](Number(this.num1), Number(this.num2));
            this.actualizarPantalla(resultado);
            this.num1 = "";
            this.num2 = "";
            this.operando = "";
            this.operador = false;
        }
    }

    clickOperador(valor){
        if(this.num1 && !this.operando){
            this.operador = valor;
            this.operando = true;
        }
    }

    clickNumero(valor) {
        if(!this.operando) {
            this.num1 = this.num1 === "0" ? valor : this.num1 + valor; 
            this.actualizarPantalla(this.num1);
        } else {
            this.num2 = this.num2 === "0" ? valor : this.num2 + valor;
            this.actualizarPantalla(this.num2)
        }
    }

    operaciones = {
        "+": (n1, n2) => n1 + n2,
        "-": (n1, n2) => n1 - n2,
        "*": (n1, n2) => n1 * n2,
        "/": (n1, n2) => n2 !== 0 ? n1 / n2 : "error",
        "^": (n1, n2) => Math.pow(n1, n2),
        "%": (n1, n2) => n1 % n2
    };

}

customElements.define("calculadora-personalizada", CalculadoraPersonalizada);