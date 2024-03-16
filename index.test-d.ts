import { expectType } from "tsd";

import linkifyUsernames from "./index.js";

expectType<string>(linkifyUsernames("Ping @yeskunall and @21kb!", {}));

expectType<string>(
  linkifyUsernames("Ping @yeskunall and @21kb!", {
    attributes: {
      class: "unicorn",
      multiple: ["a", "b"],
      number: 1,
      exclude: false,
      include: true,
    },
  }),
);
