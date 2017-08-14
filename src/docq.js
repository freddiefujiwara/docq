import {JSDOM} from 'jsdom';

/**  
** main class of Yaboo(YAML task runner)
*/
export default class Docq {
  /**
   * @constructor
   * @param {string} html target html string
   * @param {string} query like document.querySelector
   */
  constructor(html = '' , query = '') {
    this.dom = new JSDOM(html);
    this.query = query;
  }
  /**
   * run this.source
   * @return {string} output
   */
  run() {
    return this.dom.window.document.querySelector(this.query).outerHTML;
  }
}
