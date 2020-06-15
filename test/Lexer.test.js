import test from 'ava';
import { TOKEN_EXPS } from '../Lexer.js';

test('Regular Expression Patterns compile correctly', t => {
  const macro = (t, input, _) =>
    t.notThrows(() => {
      new RegExp(input);
    });

  TOKEN_EXPS.forEach(([pattern, _]) => {
    macro(t, pattern);
  });
  t.pass();
});
