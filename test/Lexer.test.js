import test from 'ava';
import Lexer, { TOKEN_EXPS } from '../Lexer.js';

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

test('It lexes the test file correctly', t => {
  const impStr = `
  n := 5;
  p := 1;
  while n > 0 do
    p := p * n;
    n := n - 1
  end
  `;

  const l = new Lexer(impStr);
  t.snapshot(l.lex());
});
