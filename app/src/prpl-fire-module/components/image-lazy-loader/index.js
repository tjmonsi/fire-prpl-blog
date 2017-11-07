import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

const getTransitionEvent = (el) => {
  const transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'Transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };

  for (var t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
};

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
      const height = thumbnailImage.getBoundingClientRect().height || image.getBoundingClientRect().height;
      image.style.marginTop = parseInt(((height + 3.5) * -1), 10) + 'px';
      image.style.position = 'absolute';
      image.classList.add('new');
      const transition = getTransitionEvent(image);
      this.appendChild(image);
      setTimeout(() => {
        image.classList.remove('new');
      });

      if (transition) {
        this._timeOut = setTimeout(() => {
          image.style.marginTop = null;
          image.style.position = null;
          this.removeChild(thumbnailImage);
          image.removeEventListener(transition, fn);
        }, 1050);
        const fn = () => {
          image.style.marginTop = null;
          image.style.position = null;
          this.removeChild(thumbnailImage);
          image.removeEventListener(transition, fn);
          clearTimeout(this._timeOut);
        };
        image.addEventListener(transition, fn);
      }
    };
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
