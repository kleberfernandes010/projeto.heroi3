// funcoes com parametros.
torrar("pao de forma", "kleber")
torrar("pao integral", "larissa")

function torrar(pao, nome){
    console.log("torrada feita com " + pao)
    console.log(" ela é um pedido de " + nome)
}

// outro exemplo sem npme defenido.
torrar("pao de forma")


function torrar(pao, nome="cliente"){
    console.log("torrada feita com " + pao)
    console.log(" ela é um pedido de " + nome)
}

// exemplo mais avançado.

torrar("pao de forma", "kleber", 40.69)
torrar("pao integral", "larissa" , 30.90)

function torrar(pao, nome, valor){
    console.log("torrada feita com " + pao )
    console.log(" ela é um pedido de " + nome)
    console.log("O valor total é " + valor)
}