function validateEmail(email) 
{
    const re = /\d+\S+@\S+\.\S+/;
    const result = re.test(email);
    console.log(result);
    return result;
}


function validatePassword(password) {
    const re = /^.(?=.{9,})*(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W\D]).*$/
    const result = re.test(password);
    console.log(result);
}

validateEmail('1bayuputra@9agmail.com');
validatePassword('#words99!a');