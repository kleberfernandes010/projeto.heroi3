// javascript object notation 
// chave e valor com o objeto de transferir dados.
//let name = "kleber";
//let age = 25;
//let producta = ["mouse 2xwm", "Teclado mecanico", "monitor"];
//let productaValues = [28.90, 123.00, 678.00];

//generateInvoice(name, age, producta, productaValues);

//function generateInvoice(nome, idade, produtos, valores) {
    //console.log("O comprador é " + nome);
   // console.log("A idade dele é " + idade);
    //console.log("------------");
    //console.log("O produto é " + produtos[0]);
  //  console.log("O valor total é " + valores[0]);
//}

// NA PRATICA COM JSON.
let invoice = {
    nome : "kleber",
    age : 35,
    productos: {
        0: [" PC", 178.90],
        1: ["monitor", 200.00],
        2: ["mouse", 70.00]
    }

}
console.log(invoice)//chama tudo dentro da funcao
console.log(invoice.nome)
console.log(invoice.productos[0])