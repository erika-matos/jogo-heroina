class Heroina {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "feiticeira") {
      ataque = "magia";
    } else if (this.tipo === "guerreira") {
      ataque = "espada";
    } else if (this.tipo === "monja") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    }

    console.log(`a ${this.tipo} atacou usando ${ataque}`);
  }
}

let heroina = new Heroina("Luna", 22, "feiticeira");

heroina.atacar();
