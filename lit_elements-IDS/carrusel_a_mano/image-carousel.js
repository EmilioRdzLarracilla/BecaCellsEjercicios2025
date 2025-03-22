import { LitElement, css, html } from "lit";

export class ImageCarousel extends LitElement {
  static properties = {
    images: { type: Array },
    text: { type: String },
  };

  static styles = css`
    h1 {
      font-family: courier;
    }
  `;

  constructor() {
    super();
    this.images;
    this.text = "";
  }

  render() {
    return html`
      <h1>que paso banda saken ${this.text}</h1>
      <button @click="${this.click}">mensaje</button>
    `;
  }

  click() {
    this.text = "el toque";
  }
}
