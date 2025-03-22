export class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = '<button>CLICK ME</button>';


        //template en el DOM
        const template = document.getElementById('tpl');
        const templateContent = template.contentEditable.cloneNode(true);
      
        /*
        const buttons = ['+', '-', '*', '/'];
        buttons.forEach(button => {
            this.shadowRoot.innerHTML += `<button>${button}</button>`;
        });*/

        this.shadowRoot.appendChild(templateContent);
    }

    static get observedAttributes() {
        return ['color'];
    }

    connectedCallback() {
        console.log("me agregaron al DOM");
        this.render();
    }

    disconnectedCallback() {
        console.log("me quitaron del DOM");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'color') {
            this.render();
            //const btn = this.shadowRoot.querySelector('button');
            //btn.style.backgroundColor = newValue;
        }
    }

    render(){
        const button = this.shadowRootquerySelector('button');
        if(button) {
            button.style.backgroundColor = this.getAttribute('color') || 'initial';
        }
    }
}


export class ImageCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['width', 'height', 'images'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'width' || name === 'height' || name === 'images') {
            this.render();
        }
    }

    render() {
        const width = this.getAttribute('width');
        const height = this.getAttribute('height');
        const images = JSON.parse(this.getAttribute('images') || '[]');

        this.shadowRoot.innerHTML = `
            <style>
                .carousel {
                    width: ${width}px;
                    height: ${height}px;
                    overflow: hidden;
                    position: relative;
                }
                .carousel img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            </style>
            <section class="carousel">
                ${images.map(image => `<img src="${image}" alt="carousel image">`).join('')}
            </section>
        `;
    }
}