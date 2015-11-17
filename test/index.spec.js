var fs = require('fs');
var babel = require('babel-core');
var expect = require('chai').expect;

describe('babel plugin class displayName', function () {

    it('should transform code', function () {
        var output = babel.transformFileSync(__dirname + '/fixtures/SimpleClass.js', {
            plugins: [require.resolve('../src/index.js')]
        });

        var expectedOutput = fs.readFileSync(__dirname + '/fixtures/SimpleClass.es5.js').toString().trim();

        expect(output.code).to.equal(expectedOutput);
    });

});
