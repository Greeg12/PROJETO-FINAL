//O código usa a biblioteca Axios para realizar uma requisição HTTP a API da OpenWeatherMap para obter a previsão do tempo.

//Esta linha define a função assincrona, isso significa que a função pode esperar por uma resposta da API.

async function getWeather() {

    var recebeInfo = document.getElementById('cidade').value;

    //Nesta linha estamos fazendo uma chamada a API usando a biblioteca Axios. A URL inclui informações de localização (Mogi das Cruzes) e a unidade de medida (Celsius) e a chave da API (API-KEY).

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${recebeInfo}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);

    //Aqui estamos extraindo a temperatura atual (Celsius) da resposta de API e armazenamento na variavel tempCelsius.

    const tempCelsius = response.data.main.temp;

    //Exibir o valor
    document.querySelector('#temperatura').innerHTML = `A temperatura atual da ${recebeInfo} é de ${tempCelsius}°C.`;

}

//Chamando a função getWeather para iniciar a colsulta a API.
getWeather();