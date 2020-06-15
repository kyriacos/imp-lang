const RESERVED = 'RESERVED';
const INT = 'INT';
const ID = 'ID';

export const TOKEN_EXPS = [
  [/[ \n\t]+]/, null],
  [/#[^\n]*/, null],
  [/\:=/, RESERVED],
  [/\(/, RESERVED],
  [/\)/, RESERVED],
  [/;/, RESERVED],
  [/\\+/, RESERVED],
  [/-/, RESERVED],
  [/\\*/, RESERVED],
  [/\//, RESERVED],
  [/<=/, RESERVED],
  [/</, RESERVED],
  [/>=/, RESERVED],
  [/>/, RESERVED],
  [/=/, RESERVED],
  [/!=/, RESERVED],
  [/and/, RESERVED],
  [/or/, RESERVED],
  [/not/, RESERVED],
  [/if/, RESERVED],
  [/then/, RESERVED],
  [/else/, RESERVED],
  [/while/, RESERVED],
  [/do/, RESERVED],
  [/end/, RESERVED],
  [/[0-9]+/, INT],
  [/[A-Za-z][A-Za-z0-9_]*/, ID],
];

export default class Lexer {
  constructor(characters) {
    this.characters = characters;
  }

  lex() {
    let position = 0;
    let tokens = [];

    while (position < this.characters.length) {
      let match = null;
      let regex = null;

      for (let [pattern, tag] of TOKEN_EXPS) {
        regex = new RegExp(pattern);
        match = regex.exec(this.characters.substring(position));

        if (match) {
          let text = match[0];
          if (tag) {
            let token = [text, tag];
            tokens.push(token);
          }
        }
      }
      if (!match) {
        throw new Error('Illegal character: ', this.characters[position]);
      } else {
        position = regex.lastIndex;
        if (position === 0) return tokens;
      }
    }

    return tokens;
  }
}
