export class MyCalculadora extends HTMLElement{
    constructor(){
        super();/// manda a llamar al metodo constructor de la clase padre
        this.attachShadow({ mode: 'open'});
         //const template = document.querySelector('#tpl');
        // const contenido =  template.textContent.cloneNode(true);
    
    }
    static observedAttributes = [];

    connectedCallback(){
        

    }

    disconnectedCallback(){

    }


}
