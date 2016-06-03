var fs = require('fs');
var babel = require('babel-core');
var expect = require('chai').expect;

describe('babel plugin class displayName', function () {

    it('should transform code', function () {
        this.timeout(10000);

        var output = babel.transformFileSync(__dirname + '/fixtures/SimpleClass.js', {
            presets: ['es2015'],
            plugins: [require.resolve('../build/index.js')]
        });

        var expectedOutput = fs.readFileSync(__dirname + '/fixtures/SimpleClass.es5.js').toString().trim();

        expect(output.code).to.equal(expectedOutput);
    });

});
