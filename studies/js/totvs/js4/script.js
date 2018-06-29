exemploThrow();




function exemploErro() {
    try{
        document.getElementbyId("id-elemento").innerHTML = "teste";
    }
    
    catch(err){
        console.log("Erro, mensagem apresentada no erro -> " + err);
    }
}




function exemploThrow(){
    
    var x = 11;

    try { 
        if(x == "") throw "empty"; 
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high"; //Nosso X é maior que 10
    }                                //Nesse ponto o programa será
    
    catch(err) {                     //interrompido com o erro 'too high'
        console.log("Input is " + err);
    } 
}

