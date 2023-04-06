function popularRestaurantes(json) {
  var restaurantes = json.restaurantes;
  var ul = document.getElementById("restaurantes-list");

  for (var i = 0; i < restaurantes.length; i++) {
    var div = document.createElement("div");
    div.innerText = restaurantes[i].name;
    ul.appendChild(div);
  }
  
}

fetch('/db.json')
  .then(response => response.json())
  .then(data => {
    // Chamando a função para popular a lista de usuários com o objeto JSON
    popularRestaurantes(data);
  })
  .catch(error => console.error(error));

function alerta(){
  window.alert('alerta');
}