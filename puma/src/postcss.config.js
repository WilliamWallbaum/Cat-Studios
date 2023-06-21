module.exports = {
  plugins: [
    require("@csstools/postcss-oklab-function"),
    require("@csstools/postcss-sass"),
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-each-variables"),
    require("postcss-import"),
    require("postcss-insert"),
    require("postcss-nested-vars"),
    require("postcss-nesting"),
    require("postcss-preset-env")({
      stage: 2,
    }),
    require("postcss-simple-vars"),
  ],
};
