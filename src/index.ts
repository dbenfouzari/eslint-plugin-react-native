// const DOM_TAGS = [
//   "a",
//   "abbr",
//   "acronym",
//   "address",
//   "applet",
//   "area",
//   "article",
//   "aside",
//   "audio",
//   "b",
//   "base",
//   "basefont",
//   "bdi",
//   "bdo",
//   "big",
//   "blockquote",
//   "body",
//   "br",
//   "button",
//   "canvas",
//   "caption",
//   "center",
//   "cite",
//   "code",
//   "col",
//   "colgroup",
//   "data",
//   "datalist",
//   "dd",
//   "del",
//   "details",
//   "dfn",
//   "dialog",
//   "dir",
//   "div",
//   "dl",
//   "dt",
//   "em",
//   "embed",
//   "fieldset",
//   "figcaption",
//   "figure",
//   "font",
//   "footer",
//   "form",
//   "frame",
//   "frameset",
//   "h1 to h6",
//   "head",
//   "header",
//   "hr",
//   "html",
//   "i",
//   "iframe",
//   "img",
//   "input",
//   "ins",
//   "kbd",
//   "label",
//   "legend",
//   "li",
//   "link",
//   "main",
//   "map",
//   "mark",
//   "meta",
//   "meter",
//   "nav",
//   "noframes",
//   "noscript",
//   "object",
//   "ol",
//   "optgroup",
//   "option",
//   "output",
//   "p",
//   "param",
//   "picture",
//   "pre",
//   "progress",
//   "q",
//   "rp",
//   "rt",
//   "ruby",
//   "s",
//   "samp",
//   "script",
//   "section",
//   "select",
//   "small",
//   "source",
//   "span",
//   "strike",
//   "strong",
//   "style",
//   "sub",
//   "summary",
//   "sup",
//   "svg",
//   "table",
//   "tbody",
//   "td",
//   "template",
//   "textarea",
//   "tfoot",
//   "th",
//   "thead",
//   "time",
//   "title",
//   "tr",
//   "track",
//   "tt",
//   "u",
//   "ul",
//   "var",
//   "video",
//   "wbr",
// ];

// const SVG_TAGS = [
//   "a",
//   "animate",
//   "animateMotion",
//   "animateTransform",
//   "circle",
//   "clipPath",
//   "color-profile",
//   "defs",
//   "desc",
//   "discard",
//   "ellipse",
//   "feBlend",
//   "feColorMatrix",
//   "feComponentTransfer",
//   "feComposite",
//   "feConvolveMatrix",
//   "feDiffuseLighting",
//   "feDisplacementMap",
//   "feDistantLight",
//   "feDropShadow",
//   "feFlood",
//   "feFuncA",
//   "feFuncB",
//   "feFuncG",
//   "feFuncR",
//   "feGaussianBlur",
//   "feImage",
//   "feMerge",
//   "feMergeNode",
//   "feMorphology",
//   "feOffset",
//   "fePointLight",
//   "feSpecularLighting",
//   "feSpotLight",
//   "feTile",
//   "feTurbulence",
//   "filter",
//   "foreignObject",
//   "g",
//   "hatch",
//   "hatchpath",
//   "image",
//   "line",
//   "linearGradient",
//   "marker",
//   "mask",
//   "mesh",
//   "meshgradient",
//   "meshpatch",
//   "meshrow",
//   "metadata",
//   "mpath",
//   "path",
//   "pattern",
//   "polygon",
//   "polyline",
//   "radialGradient",
//   "rect",
//   "script",
//   "set",
//   "solidcolor",
//   "stop",
//   "style",
//   "svg",
//   "switch",
//   "symbol",
//   "text",
//   "textPath",
//   "title",
//   "tspan",
//   "unknown",
//   "use",
//   "view",
// ];

//#region Helpers
function isUpperCase(str) {
  return /^[A-Z_-]+$/.test(str);
}

// function isNativeDOMTag(str) {
//   return DOM_TAGS.includes(str);
// }

// function isSvgTag(str) {
//   return SVG_TAGS.includes(str);
// }

// const blacklistAttrs = ["placeholder", "alt", "aria-label", "value"];
// function isAllowedDOMAttr(tag, attr) {
//   if (isSvgTag(tag)) return true;
//   if (isNativeDOMTag(tag)) {
//     return !blacklistAttrs.includes(attr);
//   }
//   return false;
// }

// function generateFullMatchRegExp(source) {
//   if (source instanceof RegExp) {
//     return source;
//   }
//   //   if (typeof source !== "string") {
//   //     console.error("generateFullMatchRegExp: expect string but get", source);
//   //     return new RegExp();
//   //   }
//   // allow dot ahead
//   return new RegExp(`(^|\\.)${source}${source.endsWith("$") ? "" : "$"}`);
// }
//#endregion

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  rules: {
    "no-child-string": {
      meta: {
        docs: {
          description: "Cannot insert text children",
          category: "Best Practices",
          recommended: true,
        },
        // schema: [
        //   {
        //     type: "object",
        //     properties: {
        //       ignore: {
        //         type: "array",
        //         // string or regexp
        //       },
        //       ignoreAttribute: {
        //         type: "array",
        //         items: {
        //           type: "string",
        //         },
        //       },
        //       ignoreCallee: {
        //         type: "array",
        //         // string or regexp
        //       },
        //       ignoreProperty: {
        //         type: "array",
        //         items: {
        //           type: "string",
        //         },
        //       },
        //       ignoreComponent: {
        //         type: "array",
        //         items: {
        //           type: "string",
        //         },
        //       },
        //       markupOnly: {
        //         type: "boolean",
        //       },
        //       onlyAttribute: {
        //         type: "array",
        //         items: {
        //           type: "string",
        //         },
        //       },
        //       validateTemplate: {
        //         type: "boolean",
        //       },
        //     },
        //     additionalProperties: false,
        //   },
        // ],
      },

      create(context) {
        // variables should be defined here
        const {
          parserServices,
          options: [option],
        } = context;
        const whitelists = [
          /^[0-9!-/:-@[-`{-~]+$/, // ignore not-word string
          ...((option && option.ignore) || []),
        ].map((item) => new RegExp(item));

        const message = "Cannot insert text children";
        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------
        const report = (node) => {
          const errorValue =
            node.type === "TemplateLiteral"
              ? `TemplateLiteral: ${node.expressions[0].name}`
              : node.value.trim();

          const formattedErrorValue =
            errorValue.length > 0
              ? `Raw text \`${errorValue}\``
              : "Whitespace(s)";

          context.report({
            node,
            message: `${formattedErrorValue} cannot be used as children`,
          });
        };

        function match(str) {
          return whitelists.some((item) => item.test(str));
        }

        // const popularCallee = [
        //   /^i18n(ext)?$/,
        //   "t",
        //   "require",
        //   "addEventListener",
        //   "removeEventListener",
        //   "postMessage",
        //   "getElementById",
        //   //
        //   // ─── VUEX CALLEE ────────────────────────────────────────────────────────────────
        //   //
        //   "dispatch",
        //   "commit",
        //   // ────────────────────────────────────────────────────────────────────────────────

        //   "includes",
        //   "indexOf",
        //   "endsWith",
        //   "startsWith",
        // ];

        // const validCalleeList = [
        //   ...popularCallee,
        //   ...((option && option.ignoreCallee) || []),
        // ].map(generateFullMatchRegExp);

        // function isValidFunctionCall({ callee }) {
        //   // let calleeName = callee.name;
        //   if (callee.type === "Import") return true;

        //   const sourceText = context.getSourceCode().getText(callee);

        //   return validCalleeList.some((item) => {
        //     return item.test(sourceText);
        //   });
        // }

        // const ignoredObjectProperties = (option && option.ignoreProperty) || [];

        const ignoredClassProperties = ["displayName"];

        // const ignoredAttributes = (option && option.ignoreAttribute) || [];
        // const userJSXAttrs = [
        //   "className",
        //   "styleName",
        //   "style",
        //   "type",
        //   "key",
        //   "id",
        //   "width",
        //   "height",

        //   ...ignoredAttributes,
        // ];
        // function isValidAttrName(name) {
        //   if (option && option.onlyAttribute) {
        //     // only validate those attributes in onlyAttribute option
        //     return !option.onlyAttribute.includes(name);
        //   }
        //   return userJSXAttrs.includes(name);
        // }

        // Ignore the Trans component for react-i18next compatibility
        let ignoredComponents = ["Trans"];
        if (option && option.ignoreComponent)
          ignoredComponents = ignoredComponents.concat(option.ignoreComponent);

        function hasValidElementName(node) {
          let currentNode = node;
          while (
            currentNode &&
            currentNode.parent &&
            currentNode.parent.openingElement &&
            currentNode.parent.openingElement.name
          ) {
            if (
              ignoredComponents.includes(
                currentNode.parent.openingElement.name.name
              )
            ) {
              return true;
            }
            currentNode = currentNode.parent;
          }
          return false;
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
        const visited = new WeakSet();

        // function getNearestAncestor(node, type) {
        //   let temp = node.parent;
        //   while (temp) {
        //     if (temp.type === type) {
        //       return temp;
        //     }
        //     temp = temp.parent;
        //   }
        //   return temp;
        // }

        function isString(node) {
          return typeof node.value === "string";
        }

        const { esTreeNodeToTSNodeMap, program } = parserServices;
        let typeChecker;
        if (program && esTreeNodeToTSNodeMap)
          typeChecker = program.getTypeChecker();

        function validateLiteral(node) {
          // visited and passed linting
          if (visited.has(node)) return;
          const trimed = node.value.trim();
          if (!trimed) return;

          // const { parent } = node;

          // allow statements like const a = "FOO"
          if (isUpperCase(trimed)) return;

          if (match(trimed)) return;

          //
          // TYPESCRIPT
          //

          if (typeChecker) {
            const tsNode = esTreeNodeToTSNodeMap.get(node);
            const typeObj = typeChecker.getTypeAtLocation(tsNode.parent);

            // var a: 'abc' = 'abc'
            if (typeObj.isStringLiteral()) {
              return;
            }

            // var a: 'abc' | 'name' = 'abc'
            if (typeObj.isUnion()) {
              const found = typeObj.types.some((item) => {
                if (item.isStringLiteral() && item.value === node.value) {
                  return true;
                }
              });
              if (found) return;
            }
          }
          // • • • • •

          console.log(node);

          report(node);
        }

        // onlyAttribute would turn on markOnly
        const markupOnly =
          option && (option.markupOnly || !!option.onlyAttribute);

        const scriptVisitor = {
          //
          // ─── EXPORT AND IMPORT ───────────────────────────────────────────
          //

          "ImportExpression Literal"(node) {
            // allow (import('abc'))
            visited.add(node);
          },

          "ImportDeclaration Literal"(node) {
            // allow (import abc form 'abc')
            visited.add(node);
          },

          "ExportAllDeclaration Literal"(node) {
            // allow export * from 'mod'
            visited.add(node);
          },

          "ExportNamedDeclaration > Literal"(node) {
            // allow export { named } from 'mod'
            visited.add(node);
          },
          // ─────────────────────────────────────────────────────────────────

          //
          // ─── JSX ─────────────────────────────────────────────────────────
          //

          "JSXElement > Literal"(node) {
            scriptVisitor.JSXText(node);
          },

          "JSXExpressionContainer > Literal:exit"(node) {
            if (markupOnly) {
              validateLiteral(node);
            }
          },

          "JSXAttribute > Literal:exit"(node) {
            if (markupOnly) {
              // const {
              //   name: { name: attrName },
              // } = getNearestAncestor(node, "JSXAttribute");
              validateLiteral(node);
            }
          },

          "JSXAttribute Literal"(node) {
            visited.add(node);
            // const parent = getNearestAncestor(node, "JSXAttribute");
            // const attrName = parent.name.name;

            // // allow <MyComponent className="active" />
            // if (isValidAttrName(attrName)) {
            //   visited.add(node);
            //   return;
            // }

            // const jsxElement = getNearestAncestor(node, "JSXOpeningElement");
            // const tagName = jsxElement.name.name;
            // if (isAllowedDOMAttr(tagName, attrName)) {
            //   visited.add(node);
            // }
          },

          // @typescript-eslint/parser would parse string literal as JSXText node
          JSXText(node) {
            const trimed = node.value.trim();
            visited.add(node);

            if (hasValidElementName(node)) {
              return;
            }

            if (!trimed || match(trimed)) {
              return;
            }

            report(node);
          },
          // ─────────────────────────────────────────────────────────────────

          //
          // ─── TYPESCRIPT ──────────────────────────────────────────────────
          //

          "TSLiteralType Literal"(node) {
            // allow var a: Type['member'];
            visited.add(node);
          },
          // ─────────────────────────────────────────────────────────────────

          "ClassProperty > Literal"(node) {
            const { parent } = node;

            if (
              parent.key &&
              ignoredClassProperties.includes(parent.key.name)
            ) {
              visited.add(node);
            }
          },

          "VariableDeclarator > Literal"(node) {
            // allow statements like const A_B = "test"
            // if (isUpperCase(node.parent.id.name)) visited.add(node);
            visited.add(node);
          },

          "VariableDeclarator > ArrayExpression > Literal"(node) {
            // allow statements like const A_B = ["test"]
            // const declarator = getNearestAncestor(node, "VariableDeclarator");
            // if (isUpperCase(declarator.id.name)) visited.add(node);
            visited.add(node);
          },

          "Property > Literal"(node) {
            visited.add(node);

            // const { parent } = node;
            // // if node is key of property, skip
            // if (parent.key === node) visited.add(node);

            // if (ignoredObjectProperties.includes(parent.key.name)) {
            //   visited.add(node);
            // }

            // // name if key is Identifier; value if key is Literal
            // // dont care whether if this is computed or not
            // if (isUpperCase(parent.key.name || parent.key.value))
            //   visited.add(node);
          },

          "BinaryExpression > Literal"(node) {
            const {
              parent: { operator },
            } = node;

            // allow name === 'Android'
            if (operator !== "+") {
              visited.add(node);
            }
          },

          "AssignmentPattern > Literal"(node) {
            // allow function bar(input = 'foo') {}
            visited.add(node);
          },

          "CallExpression Literal"(node) {
            // const parent = getNearestAncestor(node, "CallExpression");
            // if (isValidFunctionCall(parent)) visited.add(node);
            visited.add(node);
          },

          "SwitchCase > Literal"(node) {
            visited.add(node);
          },

          "MemberExpression > Literal"(node) {
            // allow Enum['value']
            visited.add(node);
          },

          TemplateLiteral(node) {
            if (!option || !option.validateTemplate) {
              return;
            }
            const { quasis = [] } = node;
            quasis.some(({ value: { raw } }) => {
              const trimed = raw.trim();
              if (!trimed) return;
              if (match(trimed)) return;
              report(node);
              return true; // break
            });
            // const trimed = node.value.trim();
          },

          "Literal:exit"(node) {
            if (markupOnly) {
              return;
            }
            // validateLiteral(node);
            visited.add(node);
          },
        };

        function wrapVisitor() {
          Object.keys(scriptVisitor).forEach((key) => {
            const old = scriptVisitor[key];
            scriptVisitor[key] = (node) => {
              // all visitors ends with Literal except TemplateLiteral
              if (key !== "TemplateLiteral") {
                // make sure node is string literal
                if (!isString(node)) return;
              }

              old(node);
            };
          });
        }

        wrapVisitor();

        return (
          (parserServices.defineTemplateBodyVisitor &&
            parserServices.defineTemplateBodyVisitor(
              {
                VText(node) {
                  scriptVisitor["JSXText"](node);
                },
                "VExpressionContainer CallExpression Literal"(node) {
                  scriptVisitor["CallExpression Literal"](node);
                },
                "VExpressionContainer Literal:exit"(node) {
                  scriptVisitor["Literal:exit"](node);
                },
              },
              scriptVisitor
            )) ||
          scriptVisitor
        );
      },
    },
  },
};
