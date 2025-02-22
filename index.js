const { AtRule, Declaration } = require("postcss");

module.exports = () => {
  return {
    postcssPlugin: "view-transition",
    Once(root) {
      const atRule = new AtRule({ name: "view-transition" });
      const decl = new Declaration({ prop: "navigation", value: "auto" });
      atRule.append(decl);
      root.append(atRule);
    },
  };
};
module.exports.postcss = true;
