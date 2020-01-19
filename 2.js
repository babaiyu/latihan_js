function validateEmail(email) {
    const reg = /\d+\S+@\S+\.\S+/;
    const result = reg.test(email);
    console.log(result);
}

validateEmail("3yourmail@mail.com");

function validatePassword(password) {
    const symbol = /[!@#\$%\^&\*]/g;
    const angka = /\d/g;
    const huruf = /[a-zA-z]/g;
    if (
        password.length === 9
        && password.match(symbol).length === 2
        && password.match(angka).length === 2
        && password.match(huruf).length === 5
    ) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

validatePassword('#words99!');
