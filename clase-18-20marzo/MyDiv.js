export default class MyDiv extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `

    <style>
    div{
    background-color:black;
    color:white;
    width:100px;
    height:100px;
    display:flex;
    flex-flow:column nowrap;
    align-items:center;
    justify-content:center;}
    </style>
    <div>soy un div</div>`;
  }
}
