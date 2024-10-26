function calcularRank(vitorias, derrotas) {
    var saldoVitorias = vitorias - derrotas;
    var niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
    var ranges = [10, 20, 50, 80, 90, 100];
    var nivel = niveis[ranges.findIndex(function(range) { return vitorias <= range; }) + 1] || "Imortal";

    return "O Herói tem de saldo" + saldoVitorias + " está no nível de " + nivel;
}
// Exemplo de uso da função:
var resultado = calcularRank(75, 25);
console.log(resultado);