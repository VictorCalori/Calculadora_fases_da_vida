function verificarFase() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var fase;

    if (/\d/.test(nome)){
      alert("Não é possível inserir números no nome");
      return
    }

    if (idade <= 11) {
      fase = "Criança";
    } else if (idade <= 20) {
      fase = "Adolescente";
    } else if (idade <= 64) {
      fase = "Adulto";
    } else {
      fase = "Idoso";
    }

    document.getElementById("resultado").innerHTML = nome + ", você é: " + fase
  }

 