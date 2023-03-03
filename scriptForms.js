// Função para o Button

function guardaFormulario() {

    var formsCliente = new Object();

    formsCliente.nome = document.getElementById("nome").value;
    formsCliente.sobrenome = document.getElementById("sobrenome").value;
    formsCliente.idade = document.getElementById("idade").value;
    formsCliente.cpf = document.getElementById("cpf").value;
    formsCliente.telefone = document.getElementById("telefone").value;
    formsCliente.cep = document.getElementById("cep").value;

    
// Converter para String Json

    var jsonForm = JSON.stringify(formsCliente);

    //Exibir
    console.log(formsCliente.valueOf());

    document.getElementById('jsonForm0').innerHTML = '<b>Nome:</b> - ' + formsCliente.nome;
    document.getElementById('jsonForm1').innerHTML = '<b>Sobrenome:</b> - ' + formsCliente.sobrenome;
    document.getElementById('jsonForm2').innerHTML = '<b>Idade:</b> - ' + formsCliente.idade;
    document.getElementById('jsonForm3').innerHTML = '<b>Cpf:</b> - ' + formsCliente.cpf;
    document.getElementById('jsonForm4').innerHTML = '<b>Telefone:</b> - ' + formsCliente.telefone;
    document.getElementById('jsonForm5').innerHTML = '<b>Cep:</b> - ' + formsCliente.cep;

    window.print();
}


