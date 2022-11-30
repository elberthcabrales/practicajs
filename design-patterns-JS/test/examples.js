const expect = require('chai').expect;

const { asynchronousTest } = require('../src/examples/event-loop/interviewBigthcove');

describe('Asynchronous function testing', () => {

  it('sanity', () => {
      asynchronousTest()
  });

});
