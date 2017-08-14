import chai from 'chai';
chai.should();
import Docq from '../src/docq';

describe('Docq test.', (suite) => {
  it('should have properties filename', () => {
    const dq = new Docq('#body', '<body id="body">');
    dq.should.have.property('query').with.equal('#body');
    dq.should.have.property('html').with.equal('<body id="body">');
  });
  it('should have a function "run"', () => {
    const dq = new Docq('#body', '<body id="body">');
    dq.should.have.property('run').with.a('function');
    dq.run();
  });
});
