# Random Password Generator

A simple JavaScript-based random password generator that allows customization of character types.

## Features
- Generate passwords of any length.
- Options to include/exclude uppercase letters, lowercase letters, numbers, and symbols.

## Installation
No installation required. Just copy and use the script.

## Usage
### Example
```js
console.log(generatePassword(16, { upper: true, lower: true, numbers: true, symbols: false }));
```

### Function Parameters
```js
generatePassword(length, options)
```
- `length`: (Number) The length of the password.
- `options`: (Object) Specifies the types of characters to include.
  - `upper`: Include uppercase letters (default: true)
  - `lower`: Include lowercase letters (default: true)
  - `numbers`: Include numbers (default: true)
  - `symbols`: Include symbols (default: true)

### Example Output
```
G5bT7rQv2KjN4xPq
```

## License
This project is open-source and free to use.

