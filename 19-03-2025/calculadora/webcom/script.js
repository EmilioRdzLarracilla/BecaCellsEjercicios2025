class calculadora extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
    <style>
    * { justify-content: center;  margin: 0; padding: 0; box-sizing: border-box;
     font-family: Arial, sans-serif; }
  
    .calculadora {
        background: #383638;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        display: grid;
        grid-template-rows: auto 1fr;
        width: 100%;
        gap: 10px;
        max-width: 400px; 
        min-height: 300px; 
    }

    .pantalla {
        background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    border-radius: 20%;
    }

    #mostrar {
        width: 100%;
    height: 50px;
    font-size: 2em;
    text-align: right;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
    background: #010101;
    color: rgb(255, 255, 255);
    border-radius: 10%;
    }

    .teclas {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
        flex-grow: 1;
        padding-bottom: 10px;
    }

    .btn {
    width: 60px;
    height: 60px;
    font-size: 1.5em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #666;
    color: white;
    border-radius: 20%;
    }

    .btn:hover { background: #257ce7; }
    .limpiar { background-color: red; }
    .operador { background: orange; }
    .igual { background: rgb(14, 31, 180);}
</style>

    
            <section class="calculadora">
                <br>
             <section class="pantalla">
                    <input type="text" id="mostrar" readonly>
              </section>
              <br>
             <section class="teclas">
                
             <button class="btn numero">7</button>
             <button class="btn numero">8</button>
             <button class="btn numero">9</button>
             <button class="btn operador">!</button>
             <button class="btn limpiar">C</button>
    
             <button class="btn numero">4</button>
             <button class="btn numero">5</button>
             <button class="btn numero">6</button>
             <button class="btn operador">√</button>
             <button class="btn operador">^</button>
    
             <button class="btn numero">3</button>
             <button class="btn numero">2</button>
             <button class="btn numero">1</button>
             <button class="btn operador">-</button>
             <button class="btn operador">+</button>
           
            
             <button class="btn numero">0</button>
             <button class="btn numero">00</button>
             <button class="btn operador">*</button>
             <button class="btn operador">÷</button>
             <button class="btn igual">=</button>
                    
             </section>   
         </section>    
   
        `;
    }

    connectedCallback() {
        const display = this.shadowRoot.querySelector('#mostrar');
        const buttons = this.shadowRoot.querySelectorAll('.btn');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;

                if (value === '=') {
                    try {
                        display.value = this.calcular(display.value);
                    } catch {
                        display.value = 'Error';
                    }
                } else if (value === 'C') {
                    display.value = '';
                } else {
                    display.value += value;
                }
            });
        });
    }

    calcular(expresion) {
   
        expresion = expresion.replace(/(\d+)!/g, (match, num) => `this.factorial(${num})`);
        expresion = expresion.replace(/√(\d+)/g, (match, num) => `this.raiz(${num})`);
        expresion = expresion.replace(/(\d+)\^(\d+)/g, (match, base, exp) => `this.potencia(${base},${exp})`);
        expresion = expresion.replace(/×/g, '*').replace(/÷/g, '/');

        return Function(`"use strict"; return (${expresion})`).call(this);
    }

    sumar(a, b) { return a + b; }
    restar(a, b) { return a - b; }
    multiplicar(a, b) { return a * b; }
    dividir(a, b) { return b !== 0 ? a / b : "Syntax Error"; }

    raiz = (a) => {
        if (a < 0) return "Syntax Error";
        let resultado = 0;
        for (let i = 0; i * i <= a; i++) {
            resultado = i;
        }
        return resultado;
    };
    factorial(n) {
        if (n < 0) return "Syntax Error";
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }

    potencia(a, b) {
        let resultado = 1;
        let esNegativo = b < 0;
        let exponente = Math.abs(b);

        for (let i = 1; i <= exponente; i++) {
            resultado *= a;
        }

        return esNegativo ? 1 / resultado : resultado;
    }
}

customElements.define('app-calculadora', calculadora);
