//Método fetch() para buscar o arquivo dados.json transformando o resultado em um objeto usando o metodo response.json()

fetch("dados.json")
  .then((response) => response.json())
  .then((corpo) => {

    //Acessando os dados do objeto JSON e adicionando e ao HTML dentro de um elemento div usando a propriedade innerHTML (Front-End)

    document.getElementById("imagem").innerHTML = corpo.trap.image;
    document.getElementById("nome").innerHTML = corpo.trap.name;
    document.getElementById("disco").innerHTML = corpo.trap.album;
    document.getElementById("estilo").innerHTML = corpo.trap.style;
    document.getElementById("preco").innerHTML = corpo.trap.price;

    document.getElementById("imagem2").innerHTML = corpo.samba.image;
    document.getElementById("nome2").innerHTML = corpo.samba.name;
    document.getElementById("disco2").innerHTML = corpo.samba.album;
    document.getElementById("estilo2").innerHTML = corpo.samba.style;
    document.getElementById("preco2").innerHTML = corpo.samba.price;

    document.getElementById("imagem3").innerHTML = corpo.pagode.image;
    document.getElementById("nome3").innerHTML = corpo.pagode.name;
    document.getElementById("disco3").innerHTML = corpo.pagode.album;
    document.getElementById("estilo3").innerHTML = corpo.pagode.style;
    document.getElementById("preco3").innerHTML = corpo.pagode.price;
});

// $(".color span").click(function(){
 
//   $(".color span").removeClass("active");
//   $(this).addClass("active");
//   $(".detail span").css("color",$(this).attr("data-color"));
//   $(".detail a").css("background",$(this).attr("data-color"));
//   $(".product-image").attr("src",$(this).attr("data-image"));
//   $("body").css("background",$(this).attr("data-color"));
//  });
