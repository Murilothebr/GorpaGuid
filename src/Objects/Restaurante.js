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

const restaurantes = [];

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
