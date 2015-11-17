# babel-plugin-class-display-name [![Build Status](https://travis-ci.org/ftdebugger/babel-plugin-class-display-name.svg?branch=master)](https://travis-ci.org/ftdebugger/babel-plugin-class-display-name)

Add displayName property to class constructors to prevent it lost during minification

## Installation

```sh
$ npm install babel-plugin-class-display-name
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["class-display-name"]
}
```

### Via CLI

```sh
$ babel --plugins class-display-name script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["class-display-name"]
});
```
