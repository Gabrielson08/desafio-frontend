/* Puxando os dados do arquivo json de Banners*/

const myRequest = new Request(
  "https://labs.inforcedata.com.br/desafio-frontend/banners.json"
);

fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("banner1").src = data[0].imagem;
    document.getElementById("banner2").src = data[1].imagem;  
    document.getElementById("banner1_desc").innerHTML = data[0].titulo;
    document.getElementById("banner2_desc").innerHTML = data[1].titulo;
  });

/*-----------------------------------------------------------------------*/

/* Puxando os dados do arquivo json de Vitrine */
const myRequest1 = new Request(
  "https://labs.inforcedata.com.br/desafio-frontend/vitrines.json"
);

fetch(myRequest1)
  .then((response) => response.json())
  .then((data) => {
      console.log(data)
    document.getElementById("capa1").src = data[0].capa;
    document.getElementById('capa2').src = data[1].capa;
    document.getElementById('capa3').src = data[2].capa;

    document.getElementById("tipo1").innerHTML = data[0].tipo;
    document.getElementById('tipo2').innerHTML = data[1].tipo;
    document.getElementById('tipo3').innerHTML = data[2].tipo;

    document.getElementById("cidade1").innerHTML = data[0].cidade;
    document.getElementById('cidade2').innerHTML = data[1].cidade;
    document.getElementById('cidade3').innerHTML = data[2].cidade;

    document.getElementById("uf1").innerHTML = data[0].UF;
    document.getElementById('uf2').innerHTML = data[1].UF;
    document.getElementById('uf3').innerHTML = data[2].UF;

    document.getElementById('quartos1').innerHTML = data[0].quartos;
    document.getElementById('quartos2').innerHTML = data[1].quartos;
    document.getElementById('quartos3').innerHTML = data[2].quartos;

    document.getElementById('vagas1').innerHTML = data[0].vagas;
    document.getElementById('vagas2').innerHTML = data[1].vagas;
    document.getElementById('vagas3').innerHTML = data[2].vagas;

    document.getElementById('metragem1').innerHTML = data[0].metragem;
    document.getElementById('metragem2').innerHTML = data[1].metragem;
    document.getElementById('metragem3').innerHTML = data[2].metragem;


  });
/*-----------------------------------------------------------------------*/

//  /* Puxando os dados do arquivo json de Notícias */
//  fetch('https://labs.inforcedata.com.br/desafio-frontend/noticias.json')
//  .then(res =>res.json())
//  .then(data => console.log(data))
//  .catch(error => console.log('Error'))
//  /*-----------------------------------------------------------------------*/

function call_to_action() {
  document.location.reload(true);
}
