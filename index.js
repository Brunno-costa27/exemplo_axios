const axios = require('axios');
var dados;

// Exemplo com método get
// axios.get("https://api.github.com/users/techtuxbr").then(function(resposta){
//     console.log(resposta.data.id);
// }).catch(function(error){
//     if(error){
//         console.log(error);
//     }
// })


//Exemplo com método post
// axios.post("https://jsonplaceholder.typicode.com/posts").then(function(resposta){
//     console.log(resposta);
// })

//Exemplo com método post passando dados para a api
// axios.post("https://minha.api.io/registrar/user", {email : "exemplo@gmail.com", senha: "12345"})



//Exemplo co function atribuindo dados para uma variável
function usuarioGithub(){

    return axios.get("https://api.github.com/users/techtuxbr")
}

dados = usuarioGithub();

dados.then(function(resposta){
    console.log(resposta.data);
})