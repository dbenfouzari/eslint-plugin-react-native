import { ESLint } from "eslint";

describe("eslint-plugin-react-native", () => {
  it("should return an error with JavaScript file", async () => {
    const eslint = new ESLint();

    const result = await eslint.lintFiles(["example/index.js"]);

    expect(result).toEqual([
      {
        filePath: expect.any(String),
        messages: [
          {
            column: 32,
            endColumn: 45,
            endLine: 3,
            line: 3,
            message: "Cannot insert text children",
            nodeType: "JSXText",
            ruleId: "@dbenfouzari/react-native/no-child-string",
            severity: 2,
          },
          {
            column: 15,
            endColumn: 29,
            endLine: 5,
            line: 5,
            message: "Cannot insert text children",
            nodeType: "JSXText",
            ruleId: "@dbenfouzari/react-native/no-child-string",
            severity: 2,
          },
          {
            column: 15,
            endColumn: 19,
            endLine: 9,
            line: 9,
            message: "Cannot insert text children",
            nodeType: "Literal",
            ruleId: "@dbenfouzari/react-native/no-child-string",
            severity: 2,
          },
        ],
        errorCount: 3,
        warningCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        source: expect.any(String),
        usedDeprecatedRules: expect.any(Array),
      },
    ]);
  });

  it("should return an error with TypeScript file", async () => {
    const eslint = new ESLint();

    const result = await eslint.lintFiles(["example/index.tsx"]);

    expect(result).toEqual([
      {
        filePath: expect.any(String),
        messages: [
          {
            column: 32,
            endColumn: 45,
            endLine: 3,
            line: 3,
            message: "Cannot insert text children",
            nodeType: "JSXText",
            ruleId: "@dbenfouzari/react-native/no-child-string",
            severity: 2,
          },
          {
            column: 15,
            endColumn: 29,
            endLine: 5,
            line: 5,
            message: "Cannot insert text children",
            nodeType: "JSXText",
            ruleId: "@dbenfouzari/react-native/no-child-string",
            severity: 2,
          },
          {
            column: 15,
            endColumn: 19,
            endLine: 9,
            line: 9,
            message: "Cannot insert text children",
            nodeType: "Literal",
            ruleId: "@dbenfouzari/react-native/no-child-string",
            severity: 2,
          },
        ],
        errorCount: 3,
        warningCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        source: expect.any(String),
        usedDeprecatedRules: expect.any(Array),
      },
    ]);
  });
});
