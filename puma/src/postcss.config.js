module.exports = {
  plugins: [
    require("@csstools/postcss-oklab-function"),
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-each-variables"),
    require("postcss-import"),
    require("postcss-insert"),
    require("postcss-nested"),
    require("postcss-preset-env")({
      stage: 2,
    }),
    require("postcss-simple-vars"),
  ],
};
