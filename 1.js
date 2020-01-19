function biodata(name, age) {
    const payload = {
        name: name,
        age: age,
        address: 'Jakarta, Indonesia',
        hobbies: ['Membaca', 'rebahan'],
        is_maried: false,
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
                major: 'RPL',
            },
        ],
        skills: [
            {
                skill_name: 'Javascript',
                level: 'advanced',
            },
            {
                skill_name: 'TypeScript',
                level: 'advanced',
            },
        ],
        interest_in_coding: true,
    };
    console.log(JSON.stringify(payload));
}

biodata('Bayu Permana', 19);