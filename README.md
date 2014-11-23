[![Font Feature Fibbing logo](examples/logo.png)](https://github.com/kennethormandy/font-feature-fibbing)

***

# Font Feature Fibbing

Hey, do you support the `font-feature-settings` in CSS? Safari, look—I know you’re lying!

This module is (somewhat intentionally) simple—you will find out whether or not `font-feature-settings` is supported, but not _what_ `font-feature-settings` specifically. It’s primarily concerned with seeing through Safari tendency to twisting the truth on the former subject.

## Getting started

If you’re using [Browserify](browserify.org), first install the project:

```sh
npm install kennethormandy/font-feature-fibbing
```

Then, `require` it and do something based on the result.

```js
var supportsFontFeatureSettings = require('supportsFontFeatureSettings');

if(!supportsFontFeatureSettings()) {
  // Add a class to `<html>`
  document.documentElement.className += ' is-withoutFontFeatureSettings';
}
```

If you’re not using a module system, you can also dropin the [font-feature-fibbing.js](dist/font-feature-fibbing.js) file with a similar result:

```html
<script src="font-feature-fibbing.js"></script>
<script>
  if(!supportsFontFeatureSettings()) {
    // Vent to the user
    alert('ugh I really wish you could see these ligatures');
  }
</script>
```

In this case you’ll almost definitely want to include it with whatever other build process you’re using to include `font-feature-fibbing.js` in your main JavaScript file.

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014 [Kenneth Ormandy](http://kennethormandy.com)
