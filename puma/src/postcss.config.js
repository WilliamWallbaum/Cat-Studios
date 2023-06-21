module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: 2,
    }),
    require("postcss-import"),
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-nesting"),
    require("postcss-nested-vars"),
    require("postcss-simple-vars"),
  ],
};
