export class MyTemplate extends HTMLElement {
  constructor() {
    super();
    this.link = "";
    let template = document.getElementById("cuadro-texto");
    let templateContent = template.content;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(templateContent.cloneNode(true));
  }

  static observedAttributes = ["link"];

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "link") {
      this.link = newValue;
      console.log(this.link);
    }s
  }

  connectedCallback() {
    this.shadowRoot.querySelector("img").setAttribute("src", this.link);
  }
}
