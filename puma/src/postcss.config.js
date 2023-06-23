module.exports = {
  plugins: [
    require("@csstools/postcss-oklab-function").default, // Plugin for using the Oklab color space function in CSS
    require("autoprefixer"), // Plugin for adding vendor prefixes to CSS rules
    require("cssnano"), // Plugin for minifying CSS
    require("postcss-import"), // Plugin for handling CSS imports
    require("postcss-extend-rule"), // Plugin for extending CSS rules
    require("postcss-advanced-variables"), // Plugin for using advanced variables in CSS
    require("postcss-preset-env")({
      stage: 2, // Specifies the stage of CSS features to enable
    }), // Plugin for using future CSS features
    require("postcss-atroot"), // Plugin for nesting rules inside the :root selector
    require("postcss-property-lookup"), // Plugin for looking up and using properties defined in other rules
    require("postcss-nested"), // Plugin for writing nested CSS rules
    require("postcss-simple-vars"), // Plugin for using simple variables in CSS,
    require("postcss-for"), // Plugin for using @for loops in CSS
  ],
};
