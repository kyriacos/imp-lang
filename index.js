import fs from 'fs';
import Lexer from './Lexer.js';

const file = fs.readFileSync(process.argv[2]);
const lexer = new Lexer(file.toString());

console.log(lexer.lex());
