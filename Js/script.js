document.getElementById('contact-form').addEventListener('submit', function (event) {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;


function validateNotEmpty(value, fieldName) {
    if (value === '') {
        alert(`${fieldName} não pode estar vazio!`);
        return false;
    }
    return true;
}

function validateName(nome) {
    if (nome === '' || /[0-9]/.test(nome)) {
        alert('O nome não pode estar vazio e não deve conter números!');
        return false;
    }
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('O e-mail deve ser válido (por exemplo, exemplo@dominio.com)');
        return false;
    }
    return true;
}

function validateAssunto(assunto) {
    if (assunto.length > 50) {
        alert('O assunto não pode ter mais de 50 caracteres!');
        return false;
    }
    return true;
}


function validateMensagem(mensagem) {
    if (mensagem.length > 150) {
        alert('A mensagem não pode ter mais de 150 caracteres!');
        return false;
    }
    return true;
}
if (!validateNotEmpty(nome, 'Nome') ||
!validateNotEmpty(email, 'E-mail') ||
!validateNotEmpty(assunto, 'Assunto') ||
!validateNotEmpty(mensagem, 'Mensagem') ||
!validateName(nome) ||
!validateEmail(email) ||
!validateAssunto(assunto) ||
!validateMensagem(mensagem)) {
event.preventDefault();
return;
}
alert('Formulário enviado com sucesso!');
});