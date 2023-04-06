class Restaurante {
  constructor(id, nome, imagem, endereco, telefone, horarioFuncionamento) {
    this.id = id;
    this.nome = nome;
    this.imagem = imagem;
    this.endereco = endereco;
    this.telefone = telefone;
    this.horarioFuncionamento = horarioFuncionamento;
  }
}

class Restaurantes {
  constructor() {
    this.restaurantes = [];
  }

  adicionarRestaurante(restaurante) {
    this.restaurantes.push(restaurante);
  }

  getRestaurantes() {
    return this.restaurantes;
  }
}

const restaurantes = [
  new Restaurante(1, "Restaurante 1", "/imgGuiaGastronomico/restaurante1.png", "Rua A, 123", "1234-5678", "Seg - Sex: 10h às 22h"),
  new Restaurante(2, "Restaurante 2", "/imgGuiaGastronomico/restaurante2.png", "Rua B, 456", "9876-5432", "Seg - Sex: 11h às 23h"),
  new Restaurante(3, "Restaurante 3", "/imgGuiaGastronomico/restaurante3.png", "Rua C, 789", "4567-8901", "Seg - Sex: 12h às 00h"),
];

function criarCardsDeRestaurantes() {
  console.log(restaurantes);
  const container = document.querySelector(".restaurant-cards");
  restaurantes.forEach((restaurante) => {
    const card = `
      <div class="card" >
        <div class="card-image">
          <img src="${restaurante.imagem}" alt="Foto do ${restaurante.nome}">
          <div class="status-circle open"></div>
        </div>
        <div class="container w-50">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${restaurante.nome}</h5>
              <p class="card-text">${restaurante.endereco}</p>
              <p class="card-text">${restaurante.telefone}</p>
              <p class="card-text">${restaurante.horarioFuncionamento}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    
    container.innerHTML += card;
  });
}


function popularRestaurantes(json) {
  console.log("populate");
  var restaurantesJSON = json.restaurantes;
  for (var i = 0; i < restaurantesJSON.length; i++) {
    restaurante = restaurantesJSON[i];
    restaurantes.push(new Restaurante(
      restaurante.id,
      restaurante.name,
      restaurante.imagem,
      restaurante.endereco,
      restaurante.telefone,
      restaurante.horarioFuncionamento
    ));
  }
}

fetch('/db.json')
  .then(response => response.json())
  .then(data => {
    console.log("fetch");
    popularRestaurantes(data);
  })
  .catch(error => console.error(error));

function alerta(){
  window.alert('alerta');
}
