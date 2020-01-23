function maxParam(text, words) {
	const theSplit = text.split(''); // Memisahkan setiap huruf menjadi value pada Array baru
	let sort_arr = theSplit.slice().sort(); // Mengurutkan Array theSplit dari yang terkecil

	let result = []; // Menampung hasil akhir

	// Membuat perulangan untuk mencari huruf pada text yang sesuai dengan words
	for (i = 0; i < sort_arr.length; i++) {
		if (sort_arr[i] === words) {
			result.push(sort_arr[i]); // Apabila ketemu, maka akan langsung dimasukkan ke dalam Array Result
		}
	}

	if (result.length === 0) {
		console.log('Not found') // Jika tidak ditemukan kata yang sama pada text
	} else {
		console.log(`Found ${result.length} ${words}`); // Jika ada huruf yang sama, akan menampilkan pesan tersebut
	}
	console.log(theSplit);
}

maxParam("javascript", "x");