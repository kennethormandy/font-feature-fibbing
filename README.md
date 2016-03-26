[![Font Feature Fibbing logo](examples/logo.png)](https://github.com/kennethormandy/font-feature-fibbing)

***

# Font Feature Fibbing

Hey, do you support the `font-feature-settings` CSS property? Safari, look—I know you’re lying!

This module is (somewhat intentionally) simple—you will find out whether or not `font-feature-settings` is supported, but not _what_ `font-feature-settings` specifically. Its primary target is Safari v9.0 and lower, which misrepresented whether or not it actually exposed `font-feature-settings` to front-end designers and developers.

## Getting started

If you’re using [Browserify](http://browserify.org), first install the project:

```sh
npm install --save font-feature-fibbing
```

Then, `require` it and do something based on the result.

```js
var supportsFontFeatureSettings = require('font-feature-fibbing');

if (!supportsFontFeatureSettings()) {
  // Add a class to `<html>`
  document.documentElement.className += ' is-withoutFontFeatureSettings';
}
```

If you’re not using a module system, you can also dropin the [font-feature-fibbing.js](dist/font-feature-fibbing.js) file with a similar result:

```html
<script src="font-feature-fibbing.js"></script>
<script>
  if (!supportsFontFeatureSettings()) {
    // Vent to the user
    alert('ugh I really wish you could see these ligatures');
  }
</script>
```

In this case you’ll almost definitely want to include it with whatever other build process you’re using to include `font-feature-fibbing.js` in your main JavaScript file.

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014–2016 [Kenneth Ormandy](http://kennethormandy.com)
