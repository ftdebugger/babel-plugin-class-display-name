//var template = require('babel-template');

module.exports = function (babel) {
    var types = babel.types,
        template = babel.template,
        Plugin = babel.Plugin;

    return new Plugin('class-display-name', {
        visitor: {
            ClassDeclaration: function (path, parent, scope, file) {
                var className = path.id.name;

                var ast = babel.parse(className + '.displayName = ' + JSON.stringify(className) + ';');
                var expression = ast.program.body[0];

                //parent._paths[0].insertAfter(expression);
                file.ast.program.body.push(expression);
            }
        }
    });
};
