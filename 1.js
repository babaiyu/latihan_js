// Membuat fungsi dengan parameter
function biodata(nama, umur) {
    
    // Membuat variable untuk menampung Data dalam bentuk Javascript Object
    const biodataAsli = {
        name: nama, // Menampilkan value dari parameter nama di key name
        age: umur, // Menampilkan value dari parameter umur di key age
        address: "Jakarta Selatan, Indonesia", // Type data String
        hobbies: ['Membaca', 'Berenang', 'Ngoding', 'Rebahan'], // Type data Array String (Array yang isi valunya semua string)
        is_married: false, // Type data Boolean (true | false)
        list_school: [ // Type data Array of Object
            {
                name: 'SD',
                year_in: '2006',
                year_out: '2012',
                major: null,
            },
            {
                name: 'SMP',
                year_in: '2012',
                year_out: '2015',
                major: null,
            },
            {
                name: 'SMK',
                year_in: '2015',
                year_out: '2018',
                major: "Rekayasa Perangkat Lunak",
            },
        ],
        skills: [ // Type data Array of Object
            {
                skill_name: 'Memasak',
                level: 'beginner',
            },
            {
                skill_name: 'Membaca',
                level: 'expert',
            },
        ],
        interest_in_coding: true // Type data Boolean (true | false)
    };
    
    // Mengkonversi dari object di Javascript ke format JSON
    const dataJSON = JSON.stringify(biodataAsli);
    return dataJSON; // Mengembalikan nilai dari fungsi biodata.
}

// Menampilkan hasil dari fungsi biodata melalui console.log
console.log(biodata("Budi Setyawan", 19));