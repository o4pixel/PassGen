function generatePassword(length = 12, options = { upper: true, lower: true, numbers: true, symbols: true }) {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+{}[]<>?';
    
    let allChars = '';
    if (options.upper) allChars += upperChars;
    if (options.lower) allChars += lowerChars;
    if (options.numbers) allChars += numberChars;
    if (options.symbols) allChars += symbolChars;
    
    if (allChars.length === 0) {
        throw new Error('At least one character type must be selected.');
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    return password;
}

// Example usage
console.log(generatePassword(16, { upper: true, lower: true, numbers: true, symbols: false }));
