// Declarando uma constante de objetos chave-valor
const data = {
  "username": "teste",
  "password": "123",
  "email": "teste@gmail.com",
  "age": 22
}

// Declarando constantes para pegar os elementos por id do nosso documento HTML
const submitButton = document.getElementById("submit");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Adicionando evento ao nosso botão que foi declarado na constante acima
submitButton.addEventListener("click", function(event) {
  // Removendo ação default do botão
  event.preventDefault();

  // Criando condição para saber se o usuário não deixou em branco os valores do formulário
  if (username.value !== '' && password.value !== '') {
    // Criando condição para verificar se os dados que o usuário digitou são iguais ao da nossa constante de objetos 'data'
    if (username.value === data.username && password.value === data.password) {
      // Log no console dos dados que o usuário digitou
      console.log({
        username: username.value,
        password: password.value
      })

      // Limpando dados que o usuário digitou
      username.value = '';
      password.value = '';
    } else {
      // Log no console se os dados não forem iguais ao da nossa constante de objetos 'data'
      console.log({
        status: 401,
        message: 'Credenciais incorretas!'
      })
    }
  } else {
    // Log no console se o usuário não digitou as credenciais
    console.log({
      status: 401,
      message: 'Você não digitou suas credenciais!'
    })
  }
});