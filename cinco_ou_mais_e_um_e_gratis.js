function solucao(precos) {

    let pagamentoSemDesconto = 0; let pagamento =0; let pagamentoDescontado;
    
    let menorValor = Number.POSITIVE_INFINITY;
        for (let i = 0; i < precos.length; i++){
            if (precos [i] < menorValor)
                menorValor = precos[i];
        }
    if (precos.length >= 5){
        for (let item of precos){
            pagamento += item;
        }
        pagamentoDescontado = pagamento - menorValor;
        console.log(pagamentoDescontado);
    }else{
        for (let item of precos){
            pagamentoSemDesconto += item;
        }
        console.log(pagamentoSemDesconto);
    }
}
