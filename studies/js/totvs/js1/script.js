
    var thing1;
    var thing2;

    var type1;
    var type2;

    var type1VarType;
    var type2VarType;

    var x;

    function catchData1(){
        thing1 = document.getElementById("thing1").value;
        document.getElementById("thing1-output").innerHTML = thing1;
        calc();
    }

    function catchData2(){
        thing2 = document.getElementById("thing2").value;
        document.getElementById("thing2-output").innerHTML = thing2;
        calc();
    }


    function calc(){
        //get type 1
        selectedType1 = $('input[name=option1]:checked', '#radio-1').val();

        if(selectedType1==1){
            type1VarType = "string";
        }

        if(selectedType1==2){
            type1VarType = "number";
        }

        //get type 2
        selectedType2 = $('input[name=option2]:checked', '#radio-2').val();

        if(selectedType2==1){
            type2VarType = "String";
        }

        if(selectedType2==2){
            type2VarType = "Number";
        }

        console.log('Option 1 -> ' + type1VarType + " value -> " + thing1);
        console.log('Option 2 -> ' + type2VarType + " value -> " + thing2);
        

         //the Calc
        
        if((selectedType1==2)){
            thing1 = parseInt(thing1);
        }

        if((selectedType2==2)){
            thing2 = parseInt(thing2);
        }
        
        x = thing1 + thing2;
        console.log("Result -> " + x);

        document.getElementById("output-text").innerHTML = x;
        
    }

    function reset(){
        thing1 = document.getElementById("thing1").value = "";
        thing2 = document.getElementById("thing2").value = "";
    }


