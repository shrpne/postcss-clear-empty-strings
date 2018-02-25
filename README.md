# PostCSS Clear Empty Strings [![Build Status][ci-img]][ci]

[PostCSS] plugin remove declarations with empty values, except `content` property.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/shrpne/postcss-clear-empty-strings.svg
[ci]:      https://travis-ci.org/shrpne/postcss-clear-empty-strings

If you use CSS framework like [Bootstrap](https://getbootstrap.com/) or [Uikit](https://getuikit.com/), you can override their variables with empty string to remove declaration which use that variable.

```scss
/* Bootstrap scss source */
h1, .h1 { font-size: $h1-font-size; }
h2, .h2 { font-size: $h2-font-size; }
h3, .h3 { font-size: $h3-font-size; }
h4, .h4 { font-size: $h4-font-size; }
h5, .h5 { font-size: $h5-font-size; }
h6, .h6 { font-size: $h6-font-size; }

/* Your scss variables */
$h1-font-size: 32px;
$h2-font-size: 24px;
$h3-font-size: 16px;
$h4-font-size: "";
$h5-font-size: "";
$h6-font-size: "";

/* css output generated from scss */
h1, .h1 { font-size: 32px; }
h2, .h2 { font-size: 24px; }
h3, .h3 { font-size: 16px; }
h4, .h4 { font-size: ""; }
h5, .h5 { font-size: ""; }
h6, .h6 { font-size: ""; }

/* postcss-clear-empty-string */
h1, .h1 { font-size: 32px; }
h2, .h2 { font-size: 24px; }
h3, .h3 { font-size: 16px; }
h4, .h4 { }
h5, .h5 { }
h6, .h6 { }

/* minify */
h1,.h1{font-size:32px}h2,.h2{font-size:24px}h3,.h3{font-size:16px}
```


## Usage

```js
postcss([ require('postcss-clear-empty-strings') ])
```

See [PostCSS] docs for examples for your environment.
