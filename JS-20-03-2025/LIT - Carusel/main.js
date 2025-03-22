import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class ImageCarousel extends LitElement {
    static styles = css`
        :host {
            display: block;
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
        }
        .carousel {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            flex-shrink: 0;
        }
        .controls {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
        }
        button {
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
    `;

    static properties = {
        images: { type: Array },
        currentIndex: { type: Number }
    };
    
    constructor() {
        super();
        this.images = [];
        this.currentIndex = 0;
    }
    
    connectedCallback() {
        super.connectedCallback();
        if (this.hasAttribute('images')) {
            this.images = JSON.parse(this.getAttribute('images'));
        }
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.requestUpdate();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.requestUpdate();
    }
    
    render() {
        return html`
            <section class="carousel" style="transform: translateX(-${this.currentIndex * 100}%);">
                ${this.images.map(img => html`<img src="${img}" alt="Carousel image">`)}
            </section>
            <section class="controls">
                <button @click="${this.prev}">&#10094;</button>
                <button @click="${this.next}">&#10095;</button>
            </section>
        `;
    }
}

customElements.define('image-carousel', ImageCarousel);