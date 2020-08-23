module.exports = {
  rules: {
    "no-child-string": {
      create: function (context) {
        return {
          VariableDeclaration(node) {
            node.declarations?.forEach((declaration) => {
              declaration.init?.body?.children?.forEach((child) => {
                if (child?.type === "Literal" || child?.type === "JSXText") {
                  context.report({
                    node: child,
                    message: "Cannot insert text children",
                  });
                }
              });
            });
          },
          FunctionDeclaration(node) {
            if (node.body?.body) {
              node.body.body.forEach((bodyElm) => {
                if (bodyElm?.argument?.type === "JSXElement") {
                  bodyElm?.argument?.children?.forEach((child) => {
                    if (
                      child?.type === "Literal" ||
                      child?.type === "JSXText"
                    ) {
                      context.report({
                        node: child,
                        message: "Cannot insert text children",
                      });
                    }
                  });
                }
              });
            }
          },
        };
      },
    },
  },
};
