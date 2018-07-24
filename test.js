import test from 'ava';

import m from '.';

test('main', t => {
  t.is(m('Hi @yeskunall!'), 'Hi <a href="https://github.com/yeskunall">@yeskunall</a>!');

  t.is(m('Hi @yeskunall!', {
    value: '@nisostech'
  }), 'Hi <a href="https://github.com/yeskunall">@nisostech</a>!');

  t.is(m('Ping @yeskunall and @nisostech!', {
    attributes: {
      class: 'github',
      target: '_blank'
    }
  }),
  'Ping <a href="https://github.com/yeskunall" class="github" target="_blank">@yeskunall</a> and <a href="https://github.com/nisostech" class="github" target="_blank">@nisostech</a>!');
});
