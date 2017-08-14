import chai from 'chai';
chai.should();
import Docq from '../src/docq';

describe('Docq test.', (suite) => {
  it('should have properties query,dom', () => {
    const dq = new Docq('<body id="body">','#body');
    dq.should.have.property('query').with.equal('#body');
    dq.should.have.property('dom').with.a('object');
    dq.dom.should.have.property('window').with.a('Window');
    dq.dom.window.should.have.property('document').with.a('Document');
    dq.dom.window.document.body.outerHTML
       .should.equal('<body id="body"></body>');
  });
  it('should have a function "run"', () => {
    const dq = new Docq('<body id="body"><div class="div">','.div');
    dq.should.have.property('run').with.a('function');
    const result = dq.run();
    result.should.be.a('string');
    result.should.equal('<div class="div"></div>');
  });
});
