class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar
    atacar() {
        let ataque;
        
        // Define o ataque de acordo com o tipo do herói
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'uma magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Testando a classe com diferentes heróis
const mago = new Heroi('Gandalf', 1000, 'mago');
const guerreiro = new Heroi('Conan', 30, 'guerreiro');
const monge = new Heroi('Shaolin', 25, 'monge');
const ninja = new Heroi('Naruto', 17, 'ninja');

// Executando o método atacar para cada herói
mago.atacar();       // Saída: "O mago atacou usando magia"
