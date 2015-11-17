export default function ({types, template}) {
    return {
        visitor: {
            ClassDeclaration: function (path) {
                let buildDisplayName = template(`CLASS_NAME.displayName = DISPLAY_NAME;`);
                let ast = buildDisplayName({
                    CLASS_NAME: types.identifier(path.node.id.name),
                    DISPLAY_NAME: types.stringLiteral(path.node.id.name)
                });

                path.parentPath.insertAfter(ast);
            }
        }
    };
}
