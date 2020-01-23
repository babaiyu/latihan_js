function maxParam(text) {
	let capital = []; // Menampung huruf Kapital
	let lower = []; // Menampung huruf Kecil
	let isPalindrome; // Untuk check apakah text tersebut adalah palindrom

	// Meleakukan checking palindrom
	var re = /[\W_]/g;
	var lowRegStr = text.toLowerCase().replace(re, '');
	var reverseStr = lowRegStr.split('').reverse().join('');
	isPalindrome = reverseStr === lowRegStr; // Hasil palindrom true | false

	// Mencari huruf kapital & huruf kecil
	const sort_arr = text.split('');
	for (i = 0; i < sort_arr.length; i++) {
		if (!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(sort_arr[i])) {
			if (sort_arr[i] === sort_arr[i].toLowerCase()) {
				lower.push(sort_arr[i]); // Memasukkan huruf kecil yang ditemukan ke dalam array lower
			} else if (sort_arr[i] === sort_arr[i].toUpperCase()) {
				capital.push(sort_arr[i]); // Memasukkan huruf kapital yang ditemukan ke dalam array capital
			}
		}
	}
	console.log(sort_arr);

	// Melakukan check untuk jenis palindrom yang ada pada text
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