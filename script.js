document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos');
    } else {
        document.body.innerHTML = '<h1>Login realizado com sucesso</h1>';
    }
});
