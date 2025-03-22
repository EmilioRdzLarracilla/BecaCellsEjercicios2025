export default class MyButton extends HTMLElement {
  constructor() {
    super(); /*  hace referencia al metodo constructor de 
    la clase padre */
    this.attachShadow({ mode: "open" }); /* generaer un subarbol del dom */
    this.color = "";
  }

  render() {
    this.shadowRoot.innerHTML = `

    <style>
    button{
    padding:1rem;
    margin-bottom:2rem;
    font-size:2rem;
    border-radius:10px;
    border-style:none;
    background-color:${this.color};
    }

   

    
    </style>

    <button>click me</button>
    `;
  }

  static observedAttributes = ["color"];

  /* saber cuales son los atributos que van a ser observados */

  connectedCallback() {
    console.log("me agregaron al dom");
    this.render();
  }

  disconnectedCallback() {
    console.log("me quitaron del dom");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    /* nos ayuda a manejar el cambio de las variables observadas */

    if (name === "color") {
      this.color = newValue;
      console.log(this.color);
    }
  }
}
