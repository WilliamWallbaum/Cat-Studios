module.exports = {
  plugins: [
    [
      require("postcss-preset-env"),
      {
        stage: 2,
      },
      require("postcss-import"),
      require("autoprefixer"),
      require("cssnano"),
      require("postcss-nesting"),
    ],
  ],
};
