const createHtmlElement = require('create-html-element');

// Regex taken from S/O: https://stackoverflow.com/a/30281147
const regex = () => (/\B@([a-z0-9](?:-?[a-z0-9]){0,38})/gi);

const linkify = (match, options) => {
  const username = match.replace(/^@/, '');
  const href = `https://github.com/${username}`;

  return createHtmlElement({
    name: 'a',
    attributes: Object.assign({href: ''}, options.attributes, {href}),
    text: typeof options.value === 'undefined' ? match : undefined,
    html: typeof options.value === 'undefined' ? undefined : options.value
  });
};

module.exports = (input, options) => {
  options = Object.assign({
    attributes: {}
  }, options);

  return input.replace(regex(), match => linkify(match, options));
};
