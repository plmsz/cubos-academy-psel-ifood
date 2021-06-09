
function solucao(produtos) {
    let faturamento = 0;
    let faturamentoTop = 0;
    
    for (item of produtos){
      faturamento += item.preco;
        if (item.preco > 10000){
            faturamentoTop += item.preco;
        }
    }
    resposta = {totalTop: faturamentoTop, percentual: faturamentoTop/faturamento};
    console.log(resposta)
}