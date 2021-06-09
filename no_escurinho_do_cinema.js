const pessoa =
 {
    "temIngresso": true,
    "idade": 15,
    "temCarteirinha": false,
    "censura": 16,
    "estaComPais": true
  }

function solucao(obj) {
    if (obj.temIngresso){
      if (obj.idade >= obj.censura || obj.estaComPais == true){
          if (obj.temCarteirinha == true || obj.idade <= 18){
           console.log("MEIA");   
          }else{
            console.log("INTEIRA");     
          }
      }else{
				console.log("ACESSO NEGADO");
			}  
    }else{
        console.log("ACESSO NEGADO");
    }
}

solucao(pessoa)