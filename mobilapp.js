function solucao(tempo, distancia) {

    if(tempo > 60){
        if (distancia < 100){
            valorCorrida = 200*distancia
        }else{
            valorCorrida = 150*distancia
        }
    }else if (tempo > 5 && tempo < 60){
        valorCorrida = 100*tempo + 50*distancia;
    }else{
        valorCorrida = 600;
    }
    console.log(valorCorrida)
}

