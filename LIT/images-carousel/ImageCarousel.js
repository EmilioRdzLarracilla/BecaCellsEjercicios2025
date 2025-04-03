import {LitElement, html, css} from 'lit'
export default class ImageCarousel extends LitElement {
    constructor(){
        super();
        this.images = []; //incializar el valor por defecto de las properties
        this.componentName  = '';
    }
    static properties = {
        images: {
            type: Array
        },
            componentName: {
                type: String
        }  
    };

    static styles = css`
        button {
            background-color: var(--btn-bg-color, black);
            color: var(--btn-bg-color, white);
            border: none;
            border-radius: 5px;

        }
    `;

    clickButton(){
        this.componentName = 'images';
        this.images =  [...this.images, 'URL'];
        this.dispatchEvent(new CustomEvent('click-btn-shadow',
            {
                bubbles: true,
                composed: true,
                detail: 0
            }
        ));
    }


    //ciclo de vida del render
    render(){
        return html`
            <h1>${this.componentName}</h1>
            <button value="click" @click=${this.clickButton}></button>
            <ul>
                ${this.images.map(image =>{
                    return html <li>`${image}</li>`;
                })}
            </ul>    
        `;
    }
}
