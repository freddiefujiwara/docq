import {JSDOM} from 'jsdom';

/**  
** main class of Yaboo(YAML task runner)
*/
export default class Docq {
  /**
   * @constructor
   * @param {string} html target html string
   * @param {string} query like document.querySelector
   * @param {string} type (outer|inner|text)
   */
  constructor(html = '', query = '', type = 'outer') {
    this.dom = new JSDOM(html);
    this.query = query;
    this.type = type;
  }
  /**
   * run this.source
   * @return {string} output
   */
  run() {
    const element = this.dom.window.document.querySelector(this.query);
    if ('inner' === this.type) {
        return element.innerHTML;
    } else if ('text' === this.type) {
        return element.textContent;
    } else if ('value' === this.type) {
        return element.getAttribute('value');
    }
    return element.outerHTML;
  }
}
