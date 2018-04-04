function media(a,b){
    
    return ((a+b)/2);
}


function escreverNumeroAte(ate){
    
    for(var i= 1; i <=ate; i++){
      var mostrar =+ i;

      console.log(i);
    }
    
}

function divisiveisPor(de, ate){

    for(var i= de; i<=ate; i++){

        if(i%de===0){
            
            console.log(i);
        }
        
    }

}


                                                 

var vetor  = [6542, 1235, 3215, 6251, 3215, 3225, 4583, 2151, 2356, 1325, 9965, 1230, 4458, 6352];

var maior = vetor[0];                              
var menor = vetor[0];

function maiorMenor(vetor){

    for(var i = 0; i< vetor.length; i++){
        var elementoAtual = vetor[i];

        if(elementoAtual > maior)                   
        maior = elementoAtual;
            
        if(elementoAtual < menor)
         menor = elementoAtual;

         
        
      
    }
    console.log('Maior: ' + maior);
    console.log('Menor: ' + menor);
}
