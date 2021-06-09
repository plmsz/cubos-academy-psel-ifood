function solucao(ano) {
    const anoReferencia = 2022;
    
	if((anoReferencia - ano)%2 !=0){
        console.log("MEH")
    }else if(ano % 4 == 0){
        console.log("JOGOS")
    }else{
        console.log("COPA")   
    }
    
}