import { HTMLAttributes } from "create-html-element";

export interface Options {
  /**
   * HTML attributes to add to the link.
   * */
  readonly attributes?: HTMLAttributes;
  /**
   * Set a custom HTML value for the link.
   */
  readonly value?: string;
}

/**
 *
 * Linkify GitHub usernames
 *
 * @param string - A string containing valid GitHub username.
 *
 * @example
 * ```
 * import linkifyUsernames from "linkify-gh-usernames";
 *
 * linkifyUsernames("@yeskunall-bot mentioned @yeskunall-", {
 *  attributes: {
 *  class: "unicorn",
 *  multiple: ["a", "b"],
 *  number: 1,
 *  exclude: false,
 *  include: true
 *  }
 * });
 *
 * // => '<a href="https://github.com/yeskunall-bot" class="unicorn" multiple="a b" number="1" include>@yeskunall-bot</a> mentioned <a href="https://github.com/yeskunall" class="unicorn" multiple="a b" number="1" include>@yeskunall</a>'
 * ```
 */
export default function linkifyUsernames(
  input: string,
  options?: Options,
): string;

export { HTMLAttributes } from "create-html-element";
