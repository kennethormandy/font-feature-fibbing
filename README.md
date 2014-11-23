# Font Feature Affecting

A quick check—is the `font-feature-settings` CSS property supported?

This is (somewhat intentionally) simple—you will find out whether or not `font-feature-settings` is supported, but not _what_ `font-feature-settings` find out _what_. It’s primarily concerned with seeing through Safari’s lies on the former subject.

## Getting started

If you’re using [Browserify](browserify.org), first install the project:

```sh
npm install kennethormandy/font-feature-affecting
```

Then, `require` it and do something based on the result.

```js
var supportsFontFeatureSettings = require('supportsFontFeatureSettings');

if(!supportsFontFeatureSettings()) {
  // Add a class to `<html>`
  document.documentElement.className += ' is-withoutFontFeatureSettings';
}
```

If you’re not using a module system, you can also dropin the [font-feature-affecting.js](dist/font-feature-affecting.js) file with a similar result:

```html
<script src="font-feature-affecting.js"></script>
<script>
  if(!supportsFontFeatureSettings()) {
    // Vent to the user
    alert('ugh I really wish you could see these ligatures');
  }
</script>
```

In this case you’ll almost definitely want to include it with whatever other build process you’re using to include `font-feature-affecting.js` in your main JavaScript file.

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014 [Kenneth Ormandy](http://kennethormandy.com)
