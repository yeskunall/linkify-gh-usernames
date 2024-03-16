import test from "ava";

import linkifyUsernames from "./index.js";

test("main", t => {
  t.is(
    linkifyUsernames("Hi @yeskunall!"),
    'Hi <a href="https://github.com/yeskunall">@yeskunall</a>!',
  );
});

test("`attributes` option", t => {
  t.is(
    linkifyUsernames("Ping @yeskunall and @21kb!", {
      attributes: {
        class: "github",
        target: "_blank",
      },
    }),
    'Ping <a href="https://github.com/yeskunall" class="github" target="_blank">@yeskunall</a> and <a href="https://github.com/21kb" class="github" target="_blank">@21kb</a>!',
  );
});

test("`value` option", t => {
  t.is(
    linkifyUsernames("Hi @yeskunall!", {
      value: "@21kb",
    }),
    'Hi <a href="https://github.com/yeskunall">@21kb</a>!',
  );
});
