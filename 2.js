function validateEmail(email) {
    // RegExp untuk email
    // \d+ -> untuk mencari digit angka (0-9)
    // \S+@ -> untuk mencari huruf dengan akhiran @ (yourname@)
    // \S+ -> untuk mencari huruf (mail)
    // \. -> untuk mencari . (.)
    // \S+ -> untuk mencari huruf (com)
    const reg = /\d+\S+@\S+\.\S+/;
    const result = reg.test(email); // Fungsi untuk testing RegExp -> dengan hasil boolean (true | false)
    console.log(result); // Menampilkan hasil dengan console.log()
}

validateEmail("3yourmail@mail.com");

function validatePassword(password) {
    // RegExp untuk validasi password
    const symbol = /[!@#\$%\^&\*]/g; // untuk mencari symbol
    const angka = /\d/g; // untuk mencari digit angka
    const huruf = /[a-zA-z]/g; // untuk mencari huruf
    if (
        password.length === 9 // ketika panjang password sama dengan 9
        && password.match(symbol).length === 2 // ketika jumlah symbolnya ada 2
        && password.match(angka).length === 2 // ketika jumlah angkanya ada 2
        && password.match(huruf).length === 5 // ketika jumlah hurugnya ada5
    ) {
        console.log(true); // Jika kondisi semua true, maka hasilnya true semua
        return true;
    } else {
        console.log(false); // Jika kondisi salah satu atau semua ada false, maka hasilnya false semua
        return false;
    }
}

validatePassword('#words99!');
