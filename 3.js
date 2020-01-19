function checkHex(input) {
    var check, len;
    if (typeof input == 'string') {
        if (input[0] === "#") {
            len = input.length;
            if (len === 4 || len === 7) {
                input = input.toLowerCase();
                check = '#' + ('00000000' + parseInt(input.substr(1), 16).toString(16)).substr(1 - len);
                const result = check === input;
                console.log(input, result);
                return `Format Hex Code ${result}`;
            }
        }
    }
    console.log(input, result);
    return `Format Hex Code ${result}!`
}

console.log(checkHex('#abc123'));