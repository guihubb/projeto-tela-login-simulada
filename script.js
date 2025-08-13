const loginForm = document.getElementById('form')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const messageElement = document.getElementById('messagem')

form.addEventListener('submit', function(event){
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // --- LÓGICA DE AUTENTICAÇÃO SIMULADA ---
    //Comparação de valores fixos
    if(username === 'usuario' && password === "1234"){
        messageElement.textContent = "Login bem-sucedido! Redirecionando..."
        messageElement.className = "message success"
    } else {
        messageElement.textContent = "Usuário ou senha inválidos"
        messageElement.className = "message error"
    }
})