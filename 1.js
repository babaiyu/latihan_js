
function biodata(name, age) {
    const biodataAsli = {
        name: name,
        age: age,
        address: "Jakarta Selatan, Indonesia",
        hobbies: ['Membaca', 'Berenang', 'Ngoding', 'Rebahan'],
        is_married: false,
        list_school: [
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
        skills: [
            {
                skill_name: 'Memasak',
                level: 'beginner',
            },
            {
                skill_name: 'Membaca',
                level: 'expert',
            },
        ],
        interest_in_coding: true
    };
    
    const dataJSON = JSON.stringify(biodataAsli);
    return dataJSON;
}

console.log(biodata("Budi Setyawan", 19));