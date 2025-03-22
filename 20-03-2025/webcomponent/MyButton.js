export class MyButton extends HTMLElement{
    constructor(){
        super();/// manda a llamar al metodo constructor de la clase padre
     this.color= "initial";
      this.attachShadow({ mode: 'open'});
 
    }

    static observedAttributes = ['color'];
///ciclo de vida de un web component
    connectedCallback(){
    
    
     console.log("hola ingrese al Dom");
     this.render();

    }

    disconnectedCallback(){

    }

    attributeChangedCallback(name,oldValue,newValue){
        if(name === 'color'){
            this.color = newValue;
            //const btn = this.shadowRoot.querySelector('button');
        }
        console.log(this.color);
    }

    render(){
        this.shadowRoot.innerHTML = 
       
        `
        <style>
        button{
        background-color: ${this.color};
        color:white;
        } 
       
       </style>
        
        <button>Hola</button> `;

        

    }
}
/////////

/*export class ImageCarousel extends HTMLElement {
    constructor() {
        super();
        this.index = 0;
        this.images = [];
        this.attachShadow({mode: 'open'});
    }

    static observedAttributes = ['images'];

    connectedCallback() {
        this.render(); // pintar mi componente con todo y shadow DOM
        // const btnLeft = this.shadowRoot.querySelector('#left');
        // const btnRight = this.shadowRoot.querySelector('#right');

        this.shadowRoot.querySelector('#left').addEventListener('click', () => {
            if(this.index > 0) {
                this.index--;
            }

            if(this.index === 0) {
                // this.buttonLeftDisabled = true;
                this.shadowRoot.querySelector('#left').setAttribute('disabled', 'false');
                this.shadowRoot.querySelector('#right').removeAttribute('disabled');
            }
            this.shadowRoot.querySelector('img').setAttribute('src', this.images[this.index]);
        });

        this.shadowRoot.querySelector('#right').addEventListener('click', () => {
            if(this.index < this.images.length - 1) {
                this.index++;
            }

            if(this.index === this.images.length - 1) {
                // this.buttonRightDisabled = true;
                this.shadowRoot.querySelector('#right').setAttribute('disabled', 'true');
                this.shadowRoot.querySelector('#left').removeAttribute('disabled');
            }
            this.shadowRoot.querySelector('img').setAttribute('src', this.images[this.index]);
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'images') {
            this.images = JSON.parse(newValue);
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                img {
                    height: 100px;
                    width: auto;
                }
                button  {
                    background-color: black;
                    color: white;
                    border: none;
                    border-radius: 3px;
                    margin: 1rem;
                }   
                button:hover {
                    background-color: grey;
                    cursor: pointer;
                }
                button[disabled] {
                    background-color: grey;
                }

                section {
                    display: flex;
                    justify-content: center;
                    align-items: center; 
                }
            </style>
            <br>
            <img src="${this.images[this.index]}">
            <section>
                <button id="left">\<</button>
                <button id="right">\></button>
            </section>
        `;
    }
}
*/

export class ImageCarousel extends HTMLElement {
    constructor() {
        super();
        this.index = 0;
        this.images = [];
        this.attachShadow({ mode: 'open' });
    }

    static observedAttributes = ['images', 'width', 'height'];

    connectedCallback() {
        this.render();
        this.attachEventListeners();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'images') {
            this.images = JSON.parse(newValue);
            this.index = 0; 
            this.updateImage();
        } 
        if (name === 'width' || name === 'height') {
            this.updateImageSize();
        }
    }

    attachEventListeners() {
        this.shadowRoot.querySelector('#left').addEventListener('click', () => this.navigate(-1));
        this.shadowRoot.querySelector('#right').addEventListener('click', () => this.navigate(1));
    }

    navigate(direction) {
        this.index += direction;
        this.shadowRoot.querySelector('#left').disabled = this.index === 0;
        this.shadowRoot.querySelector('#right').disabled = this.index === this.images.length - 1;

        this.updateImage();
    }

    
    updateImage() {
        const imgElement = this.shadowRoot.querySelector('img');
        if (this.images.length > 0) {
            imgElement.src = this.images[this.index];
        }
    }

    updateImageSize() {
        const imgElement = this.shadowRoot.querySelector('img');
        imgElement.style.width = this.getAttribute('width') || 'auto';
        imgElement.style.height = this.getAttribute('height') || '100px';
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                img {
                    width: ${this.getAttribute('width') || 'auto'};
                    height: ${this.getAttribute('height') || '100px'};
                    transition: all 0.3s ease-in-out;
                }
                button {
                    background-color: black;
                    color: white;
                    border: none;
                    border-radius: 3px;
                    margin: 1rem;
                    padding: 5px 10px;
                }   
                button:hover {
                    background-color: grey;
                    cursor: pointer;
                }
                button[disabled] {
                    background-color: grey;
                    cursor: not-allowed;
                }
                section {
                    display: flex;
                    justify-content: center;
                    align-items: center; 
                }
            </style>
            <br>
            <img src="">
            <section>
                <button id="left" disabled>\<</button>
                <button id="right">\></button>
            </section>
        `;

        this.updateImage();
    }
}


