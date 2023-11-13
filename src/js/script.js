// Selecionando os botões da calculadora
const resultado = document.getElementById("resultado");
const botoes = document.querySelectorAll("button");

let expressao = "";

// Adicionando um ouvinte de evento de clique para cada botão
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const valor = botao.innerText;

    if (valor === "=") {
      // Quando o botão "=" é clicado, avalie a expressão e atualize o resultado
      try {
        resultado.textContent = eval(expressao);x
      } catch (error) {
        resultado.textContent = "Erro";
      }
    } else if (valor === "C") {
      // Quando o botão "C" é clicado, limpe a expressão e o resultado
      expressao = "";
      resultado.textContent = "";
    } else if(valor == "<"){
        expressao = expressao.slice(0, -1);
        resultado.textContent = expressao;

    }else {
      // Adicione o valor do botão à expressão
      expressao += valor;
      resultado.textContent = expressao;
    }
  });
});
