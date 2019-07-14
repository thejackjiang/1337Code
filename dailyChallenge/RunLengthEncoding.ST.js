/*
Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.
*/

function runLengthEncoder (str) {
    if (!str) throw new Error('No string provided');
    let char = str[0];
    let charCount = 1;
    let encodedString = '';

    for (let i = 1; i < str.length; i++) {
        if (char !== str[i]) {
            encodedString += `${charCount}${char}`;
            char = str[i];
            charCount = 1;
        } else {
            charCount++;
        }
    }

    encodedString += `${charCount}${char}`;

    return encodedString;
}

// runLengthEncoder('AAAABBBCCDAA') // 4A3B2C1D2A
// runLengthEncoder('ABC') // 1A1B1C
// runLengthEncoder('ABCC') // 1A1B2C
// runLengthEncoder('A') // 1A
// runLengthEncoder('AA') // 2A
// runLengthEncoder(null) // Error

