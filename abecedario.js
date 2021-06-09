function solucao(letra, palavras) {
    let contador = 0
	for (item of palavras){
        if (item[0] !== letra){
          contador++  
        }
    }
    console.log(contador)
}