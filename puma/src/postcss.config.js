module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        stage: 2,
      },
      "postcss-import",
      "autoprefixer"
    ],
  ],
};
