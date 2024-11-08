/* Atividade 1: Alterar Cor ao Clicar */
 
// let quadrado = document.getElementById (`quadrado`);
// let quadrado2 = document.getElementById (`quadrado2`);
// let quadrado3 = document.getElementById (`quadrado3`);
 
// quadrado.addEventListener(`click`, function(){
 
//      quadrado.style.backgroundColor = `blue`;
// })
 
// quadrado2.addEventListener(`click`, function(){
 
//     quadrado2.style.backgroundColor = `blue`;
// })
 
// quadrado3.addEventListener(`click`, function(){
   
//     quadrado3.style.backgroundColor = `blue`;
 
// })


// Atividade 2: Contador de Cliques

// const botao = document.getElementById('botao');
// const resetar = document.getElementById(`resetar`)
// let clickCounter = 0;

// botao.addEventListener('click', function(){
//     botao.textContent = "Contar Cliques";
//     quantidade.textContent = `Quantidade de Cliques: ${++clickCounter}`;
// });
// resetar.addEventListener('click', function() {
//     clickCounter = 0;
//     quantidade.textContent = `Quantidade de Cliques: ${clickCounter}`;
// });


//Atividade 3: Mostrar/Ocultar Texto

// let botao = document.getElementById("botao");
// let texto = document.getElementById("texto");
// let visivel = false; // visivel é usada para armazenar o estado de visibilidade do texto, sendo false inicialmente 

// botao.addEventListener("click", function() {
//     if (visivel) {
//         // Ocultar o texto
//         texto.style.display = "none";
//         botao.innerText = "Mostrar/Ocultar"; 
//     } else {
//         // Mostrar o texto
//         texto.style.display = "block";
//         botao.innerText = "Mostrar/Ocultar"; 
//     }
//     // Alterar o estado da variável booleana
//     visivel = !visivel;
// });


// Atividade 4: Alterar Texto com Prompt

// let texto =  document.getElementById(`texto`);
// let botao =  document.getElementById(`botao`);

// botao.addEventListener(`click`, function(){
//         let novoTexto=prompt ("digite um novo texto")
//         console.log (novoTexto)
//         texto.innerText = novoTexto; 

//     })


// Atividade 5: Mudança de Texto ao Precionar Tecla
 
// document.addEventListener ( "keydown", function(event){
//     const mensagem = document.getElementById("mensagem");
//     mensagem.innerText = `Você precionou a tecla: ${event.key}`
// })


// Atividade 6: Eleições Municipais

// let voto = document.getElementById('voto')
// let ariana = document.getElementById('ariana')
// let mensagem = document.getElementById('mensagem')

// ariana.style.display = "none"
// theWeeknd.style.display = "none"
// mensagem.style.display = "none"


// voto.addEventListener('click', function(){
//         let texto = prompt("Qual seu voto? (10 - Ariana Grande, 20 - The Weeknd)")
//         if (texto == 10){
//             ariana.style.display = "block"
//             mensagem.innerText = "Ariana Grande"
//             mensagem.style.display = "block"
//             let confirma = prompt("Confirmar seu voto?").toLowerCase()
//                 if(confirma == "sim"){
//                     alert("Você votou na Ariana Grande!")
//                 }
//                 else{
//                     alert("Vote novamente.")
//                     ariana.style.display = "none"
//                     mensagem.style.display = "none"
//                 }
    
//         }
//         else if(texto == 20){
//             mensagem.innerText = "The Weeknd"
//             ariana.style.display = "none"
//             theWeeknd.style.display = "block"
//             let confirma = prompt("Confirmar seu voto?").toLowerCase()
//             if(confirma == "sim"){
//                 alert("Você votou no The Weeknd!")
//             }
//             else{
//                 alert("Vote novamente.")
//                 theWeeknd.style.display = "none"
//                 mensagem.style.display = "none"
//             }
//         }
//     else{
//                 alert("Voto nulo")
//                 mensagem.style.display = "none"
//                 ariana.style.display = "none"
//                 theWeeknd.style.display = "none"
//                 mensagem.style.display = "none"
        
//         }
//         })    