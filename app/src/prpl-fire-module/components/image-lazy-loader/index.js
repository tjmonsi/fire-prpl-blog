import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Component extends Element {
  static get is () { return 'image-lazy-loader'; }

  static get properties () {
    return {
      src: {
        type: String,
        observer: '_loadImage'
      }
    };
  }

  _loadImage (img) {
    const thumbnailImage = this.querySelector('img');
    const image = document.createElement('img');
    image.src = img;
    image.onload = () => {
      this.appendChild(image);
      thumbnailImage.classList.add('hidden');
      setTimeout(() => {
        this.removeChild(thumbnailImage);
      }, 1000);
    };
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
