//Criando Array info1

const json = '{"nome1": "Neymar Junior", "idade1": "30", "profissao1": "jogador", "time1": "PSG"}'
const jogador1 = JSON.parse(json);
console.log(jogador1)

//Criando Array info2

const json2 = '{"nome2": "Messi", "idade2": "35", "profissao2": "jogador", "time2": "PSG"}'
const jogador2 = JSON.parse(json2);
console.log(jogador2)

//Criando Array info3

const json3 = '{"nome3": "Romario", "idade3": "57", "profissao3": "jogador", "time3": "APOSENTADO"}'
const jogador3 = JSON.parse(json3);
console.log(jogador3)

//Criando Array info4

const json4 = '{"nome4": "Cristiano.R", "idade4": "38", "profissao4": "jogador", "time4": "Al Nassr"}'
const jogador4 = JSON.parse(json4);
console.log(jogador4)

//Criando Array info5

const json5 = '{"nome5": "Ronaldo.F", "idade5": "46", "profissao5": "jogador", "time5": "APOSENTADO"}'
const jogador5 = JSON.parse(json5);
console.log(jogador5)

//Criando Array info6

const json6 = '{"nome6": "Ronaldinho", "idade6": "42", "profissao6": "jogador", "time6": "APOSENTADO"}'
const jogador6 = JSON.parse(json6);
console.log(jogador6)

//Executando o codigo

function info1(){

    document.getElementById("json").innerHTML = 'Nome: - ' + jogador1.nome1 + '<br>Idade: - ' + jogador1.idade1 + 
                                        '<br>Profissão: - ' + jogador1.profissao1 + '<br>Time: - ' + jogador1.time1 +
                                         "<br><img src = 'imagens/NEYMAR.jpg' width = '250px' height = '325px'>";
}

function info2(){

    document.getElementById("json").innerHTML = 'Nome: - ' + jogador2.nome2 + '<br>Idade: - ' + jogador2.idade2 + 
                                        '<br>Profissão: - ' + jogador2.profissao2 + '<br>Time: - ' + jogador2.time2 +
                                        "<br><img src = 'imagens/Messi.jpg' width = '250px' height = '325px'>";
}           

function info3(){

    document.getElementById("json").innerHTML = 'Nome: - ' + jogador3.nome3 + '<br>Idade: - ' + jogador3.idade3 + 
                                        '<br>Profissão: - ' + jogador3.profissao3 + '<br>Time: - ' + jogador3.time3 +
                                        "<br><img src = 'imagens/Romario.jpg' width = '250px' height = '325px'>";
}

function info4(){

    document.getElementById("json").innerHTML = 'Nome: - ' + jogador4.nome4 + '<br>Idade: - ' + jogador4.idade4 + 
                                        '<br>Profissão: - ' + jogador4.profissao4 + '<br>Time: - ' + jogador4.time4 +  
                                        "<br><img src = 'imagens/Cristiano.jpg' width = '250px' height = '325px'>";
}

function info5(){

    document.getElementById("json").innerHTML = 'Nome: - ' + jogador5.nome5 + '<br>Idade: - ' + jogador5.idade5 + 
                                        '<br>Profissão: - ' + jogador5.profissao5 + '<br>Time: - ' + jogador5.time5 +
                                    "<br><img src = 'imagens/R9.jfif' width = '250px' height = '325px'>";  
}

function info6(){

    document.getElementById("json").innerHTML = 'Nome: - ' + jogador6.nome6 + '<br>Idade: - ' + jogador6.idade6 + 
                                        '<br>Profissão: - ' + jogador6.profissao6 + '<br>Time: - ' + jogador6.time6 +
                                        "<br><img src = 'imagens/Ronaldinho.jfif' width = '250px' height = '325px'>";
}
