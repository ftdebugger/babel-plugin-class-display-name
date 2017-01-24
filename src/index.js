export default function ({types, template}) {
    return {
        visitor: {
            ClassDeclaration: {
                enter(path) {
                    let buildDisplayName = template(`CLASS_NAME.displayName = DISPLAY_NAME;`);
                    
                    let ast = buildDisplayName({
                        CLASS_NAME: types.identifier(path.node.id.name),
                        DISPLAY_NAME: types.stringLiteral(path.node.id.name)
                    });

                    let parent = path.parentPath,
                        prev = path;

                    while(!parent || (parent.node.type !== 'Program' && parent.node.type !== 'BlockStatement')) {
                        prev = parent;
                        parent = parent.parentPath;
                    }

                    if (parent) {
                        prev.insertAfter(ast);
                        // parent.pushContainer('body', ast);
                    }
                }
            }
        }
    };
}
