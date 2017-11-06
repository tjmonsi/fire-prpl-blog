import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';
const bannerImage = 'https://firebasestorage.googleapis.com/v0/b/prpl-fire-blog.appspot.com/o/project-related-images%2Foriginal%2F4269497619_7232f17793_z%20(1).jpg?alt=media&token=62aeeca8-aca5-4b35-9aea-da32de9d7b89';

class Page extends Element {
  static get is () { return 'landing-page'; }

  static get properties () {
    return {
      bannerImage: {
        type: String,
        readOnly: true,
        value: bannerImage
      }
    };
  }
}

!customElements.get(Page.is)
  ? customElements.define(Page.is, Page)
  : console.warn(`${Page.is} is already defined`);
