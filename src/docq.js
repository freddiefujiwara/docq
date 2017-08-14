import {JSDOM} from 'jsdom';

/**  
** main class of Yaboo(YAML task runner)
*/
export default class Docq {
  /**
   * @constructor
   * @param {query} query like document.querySelector
   */
  constructor(query,html = '') {
    this.query = query;
    this.html = html;
  }
  /**
   * run this.source
   */
  run() {
  }
}
