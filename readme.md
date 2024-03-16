# linkify-gh-usernames

> Linkify GitHub usernames

## Install

> [!NOTE]
> This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

```
$ npm install linkify-gh-usernames
```

## Usage

```js
import linkifyUsernames from "linkify-gh-usernames";

linkifyUsernames(
  "Hi @yeskunall and welcome to the @21kb org! Feel free to look around!",
  {
    attributes: {
      class: "github",
      target: "_blank",
    },
  },
);
//=> 'Hi <a href="https://github.com/yeskunall" class="github" target="_blank">@yeskunall</a> and welcome to the <a href="https://github.com/21kb" class="github" target="_blank">@21kb</a> org! Feel free to look around!
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

Type: `string`<br> Default: The URL

Set a custom HTML value for the link.

## Related

- [linkify-issues](https://github.com/sindresorhus/linkify-issues) - Linkify
  GitHub issue references
- [linkify-urls](https://github.com/sindresorhus/linkify-urls) - Linkify URLs in
  text
