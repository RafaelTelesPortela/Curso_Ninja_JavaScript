// 1.Declarar uma variável chamada `myvar`, sem valor.

var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.

myvar = 10;

// 2.Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.

var soma = 15 + 18;

// 3.Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.

soma = soma + 1;
/*

soma++;
soma += 1;
soma + 1; //ERRADO

*/

// 4.Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma = soma * 3;

/*

soma *=  3;
soma * 3; //ERRADO

*/


//5.Qual é o valor da variável `soma` até aqui?

console.log(soma);

// 6.Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.

var souNinja = true; 

// 7.Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.

var comida = [ 'arroz', 'feijão', 'ovo'];

// 8.Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.

comida[1];

// 9.Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).

console.log(soma === myvar);

// 10.Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.

console.log(myvar <= soma);

// 11.Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

function divisao(x, y) {
   
return x / y;

}

// 12.Invoque a função criada acima, passando os parâmetros 10 e 2.

divisao(10, 2)