class formaDeBolo{
    construtor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa}com um recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella")
boloFesta.escrever()