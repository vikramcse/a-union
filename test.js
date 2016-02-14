var expect = require('chai').expect;
var union = require('./index.js');

describe('tests for array union', function () {
  it('should return unique array', function () {
    expect(union([1, 2, 3], [4, 2, 1], [2, 11])).to.eql([1, 2, 3, 4, 11]);
  });

  it('should return unique array of strings', function () {
    expect(union(['a', 'a', 'b', 'a'], ['c', 'a', 'd'], ['a', 'b', 'c', 'd'])).to.eql(['a', 'b', 'c', 'd']);
  });
});
