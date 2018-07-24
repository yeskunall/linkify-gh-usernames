# linkify-gh-usernames [![Build Status](https://travis-ci.com/yeskunall/linkify-gh-usernames.svg?token=spivxcgb7rpR2xs6dNUP&branch=master)](https://travis-ci.com/yeskunall/linkify-gh-usernames)

> Linkify GitHub usernames

## Install

```
$ npm install linkify-gh-usernames
```

## Usage

```js
const linkifyUsernames = require('linkify-gh-usernames');

linkifyUsernames('Hi @yeskunall and welcome to the @nisostech org! Feel free to look around! 👀', {
  attributes: {
      class: 'github',
      target: '_blank'
    }
});
//=> 'Hi <a href="https://github.com/yeskunall" class="github" target="_blank">@yeskunall</a> and welcome to the <a href="https://github.com/nisostech" class="github" target="_blank">@nisostech</a> org! Feel free to look around! 👀
```

## API

### linkifyUsernames(input, [options])

#### input

Type: `string`

Text containing valid GitHub username.

#### options

Type: `Object`

##### attributes

Type: `Object`

HTML attributes to add to the link.

##### value

Type: `string`<br>
Default: The URL

Set a custom HTML value for the link.

## Related

- [linkify-issues](https://github.com/sindresorhus/linkify-issues) - Linkify GitHub issue references
- [linkify-urls](https://github.com/sindresorhus/linkify-urls) - Linkify URLs in text
