module.exports = {
  plugins: [
    require("postcss-import"), // Plugin transform `@import` rules by inlining content. | https://github.com/postcss/postcss-import
    // require("postcss-nested"), // PostCSS plugin to unwrap nested rules closer to Sass syntax. | https://github.com/postcss/postcss-nested
    // require("postcss-extend-rule"), // PostCSS Extend Rule lets you use the @extend at-rule and Functional Selectors in CSS, following the speculative CSS Extend Rules Specification. | https://github.com/csstools/postcss-extend-rule
    // require("postcss-advanced-variables"), // $variables, @if, @else, @for, @each, @mixin, @include, and @content | https://github.com/csstools/postcss-advanced-variables
    // require("postcss-preset-env")({
    //   stage: 2, // Specifies the stage of CSS features to enable
    // }), // Plugin for using future CSS features | https://preset-env.cssdb.org/features/
    // require("autoprefixer"), // Plugin for adding vendor prefixes to CSS rules
    // require("postcss-atroot"), // The @at-root causes one or more rules to be emitted at the root of the document, rather than being nested beneath their parent selectors | https://github.com/OEvgeny/postcss-atroot
    // require("cssnano"), // Plugin for minifying CSS
  ],
};
