import createHtmlElement from "create-html-element";

// Regex taken from S/O: https://stackoverflow.com/a/30281147
// const regex = () => (/\B@([a-z0-9](?:-?[a-z0-9]){0,38})/gi);
const regex = new RegExp("\\B@([a-z0-9](?:-?[a-z0-9]){0,38})", "gi");

const linkify = (match, options) => {
  const username = match.replace(/^@/, "");
  const href = `https://github.com/${username}`;

  return createHtmlElement({
    name: "a",
    // First `href` is needed for the `href` attribute to be the first attribute on the `a` tag
    attributes: {
      href: "",
      ...options.attributes,
      href, // eslint-disable-line no-dupe-keys
    },
    text: typeof options.value === "undefined" ? match : undefined,
    html: typeof options.value === "undefined" ? undefined : options.value,
  });
};

export default function linkifyUsernames(input, options) {
  options = {
    attributes: {},
    ...options,
  };

  return input.replace(regex, match => linkify(match, options));
}
