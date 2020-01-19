function maxParam(text) {
    let capital = [];
    let lower = [];
    let isPalindrome;

    var re = /[\W_]/g;
    var lowRegStr = text.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    isPalindrome = reverseStr === lowRegStr;

    const sort_arr = text.split('');
    for (i = 0; i < sort_arr.length; i++) {
        if (!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(sort_arr[i])) {
            if (sort_arr[i] === sort_arr[i].toLowerCase()) {
                lower.push(sort_arr[i]);
            } else if (sort_arr[i] === sort_arr[i].toUpperCase()) {
                capital.push(sort_arr[i]);
            }
        }
    }
    console.log(sort_arr);

    console.log(isPalindrome);
    if (!isPalindrome) {
        return 'Bukan Palindrom';
    } else {
        if (capital.length === 1) {
            return 'Palindrom Kapital';
        } else if (lower === 1) {
            return 'Palindrom Kecil'
        } else if (capital.length > 1 && lower.length > 1) {
            return 'Palindrom Mix'
        } else if (capital.length !== 0 || lower.length !== 0) {
            return 'Palindrom Murni'
        } else if (!isPalindrome) {
            return 'Bukan Palindrom';
        }
    }
}

console.log(maxParam("Malam"));