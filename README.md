# IMP language interpreter

This is a basic implementation of an IMP language interpreter in Javascript. 
It's a toy language and i did this so i could play around with Parser Combinators.

It's not a complete implementation..


# Usage
```js
npm install
npm run test

node index.js test.imp
```

# The Language
## Assignment Statements
```
x := 1
```

## Conditional Statements
```
if x = 1 then
  y := 2
else
  y := 3
 end
```

## While loops
```
while x < 10 do
  x := x + 1
end
```

## Compound Statements (separated by semicolons)
```
x := 1;
y := 2
```

## Example
```
```

# TODO
- [] Improve readme
- [] Improve tests
- [] Add example
- [] Add support for Booleans

# References/Resources
- [IMP (programming language)](https://en.wikipedia.org/wiki/IMP_(programming_language))
- [Simple interpreter from scratch in Python](http://www.jayconrod.com/posts/37/)