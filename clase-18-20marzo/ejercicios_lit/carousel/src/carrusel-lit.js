import { LitElement, css, html } from "lit";

export class CarouselLit extends LitElement {
  static properties = {
    arrayURL: { type: String },
    count: { type: Number },
    arrayClean: { type: Array },
    width: { type: String },
    height: { type: String },
  };

  static styles = css`
    .container {
      border: thin solid black;
      margin: 3rem auto;
      width: 50%;
      padding: 3rem;
      display: flex;
      gap: 3rem;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    }

    button {
      font-size: 2rem;
      padding: 0.5rem 1rem;
      border-style: none;
      background-color: yellowgreen;
    }

    .disabled {
      border: thin solid black;
      color: black;
      background-color: red;
    }

    .buttons {
      display: flex;
      flex-flow: row;
      gap: 4rem;
    }
    .image {
      border-radius: 1rem;
      transition: all ease 0.5s;
    }

    .image:hover {
      transform: scale(1.15);
    }
  `;
  constructor() {
    super();
    this.count = 0;
    this.arrayURL = "";
    this.arrayClean = [];
    this.width = "";
    this.heigh = "";
  }

  render() {
    this.arrayClean = JSON.parse(this.arrayURL);
    return html` <section class="container">
      <section>
        <img class="image" src=${this.arrayClean[this.count]} />
      </section>
      <article class="buttons">
        <button   class="left" @click=${this._handleLeft}>&#11013</button>
        <button  class="right" @click=${this._handleRight}>&#10145</button>
      </article>
    </section>`;
  }

  _handleRight() {
    if (this.count < this.arrayClean.length - 1) {
      this.count++;
      this.shadowRoot.querySelector("img").animate(
        [
          // fotogramas clave
          { opacity: 0 },
          { opacity: 1 },
        ],
        {
          // opciones de sincronización
          duration: 500,
          iterations: 1,
        }
      );
    }
    if (this.count === this.arrayClean.length - 1) {
      this.shadowRoot.querySelector(".left").classList.remove("disabled");
      this.shadowRoot.querySelector(".right").classList.add("disabled");
    }
  }

  _handleLeft() {
    if (this.count > 0) {
      this.shadowRoot.querySelector("img").animate(
        [
          // fotogramas clave
          { transform: "rotate(0deg) scale(0)", opacity: 0 },
          { transform: "rotate(360deg) scale(1)", opacity: 1 },
        ],
        {
          // opciones de sincronización
          duration: 500,
          iterations: 1,
        }
      );
      this.count--;
    }
    if (this.count === 0) {
      this.shadowRoot.querySelector(".left").classList.add("disabled");
      this.shadowRoot.querySelector(".right").classList.remove("disabled");
    }
  }
}

customElements.define("carousel-lit", CarouselLit);
