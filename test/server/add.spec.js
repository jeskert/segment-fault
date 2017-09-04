const add = require('../../src/server/add');
const expect = require('chai').expect;

describe('add test', function () {
    it('1 plus 1 should equals to 2', function () {
        expect(add(1, 1)).to.be.equal(2);
    });
});