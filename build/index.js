"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var types = _ref.types;
    var template = _ref.template;

    return {
        visitor: {
            ClassDeclaration: function ClassDeclaration(path) {
                var buildDisplayName = template("CLASS_NAME.displayName = DISPLAY_NAME;");
                var ast = buildDisplayName({
                    CLASS_NAME: types.identifier(path.node.id.name),
                    DISPLAY_NAME: types.stringLiteral(path.node.id.name)
                });

                path.insertAfter(ast);
            }
        }
    };
};