import test from 'ava';
import Lexer, { TOKEN_EXPS, TYPES } from '../Lexer.js';

const { RESERVED, INT, ID } = TYPES;

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

test('ID', t => {
  const l = new Lexer('abc');
  t.deepEqual(l.lex(), [['abc', ID]]);
});

test('INT', t => {
  const l = new Lexer('12');
  t.deepEqual(l.lex(), [['12', INT]]);
});

test(':=', t => {
  const l = new Lexer(':=');
  t.deepEqual(l.lex(), [[':=', RESERVED]]);
});

test('empty', t => {
  const l = new Lexer('');
  t.deepEqual(l.lex(), []);
});

test('whitespace', t => {
  const l = new Lexer(' ');
  t.deepEqual(l.lex(), []);
});

test('space between', t => {
  const l = new Lexer('abc def');
  t.deepEqual(l.lex(), [
    ['abc', ID],
    ['def', ID],
  ]);
});

test('tab', t => {
  const l = new Lexer('\t');
  t.deepEqual(l.lex(), []);
});

test('newline', t => {
  const l = new Lexer('\n');
  t.deepEqual(l.lex(), []);
});

test('n := 1', t => {
  const l = new Lexer('n := 1');
  t.deepEqual(l.lex(), [
    ['n', ID],
    [':=', RESERVED],
    ['1', INT],
  ]);
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
