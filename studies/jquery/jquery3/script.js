var val;
var html;
var text;
var textSample          = $("#text-sample");
var textOutput          = $("#text-output");

var changeAtributesBtn  = $("#change-atributes-btn");
var changeInput         = $("#change-input");

var quad                = $("#quad");
var quad2               = $("#quad-2");

function getText(){

    val  = textSample.val();
    html = textSample.html();
    text = textSample.text();

    console.log("val    -> " + val);
    console.log("html   -> " + html);
    console.log("text   -> " + text);
    textOutput.val(val);

    console.log("Classe CSS do Input                    -> " + textSample.attr("class"));
    console.log("Função que este Input está chamando    -> " + textSample.attr("onkeyup"));
    console.log("Type do input                          -> " + textSample.attr("type"));
}

function setAtributes(){ 

        var textoPlace = changeInput.val();
        console.log('%c Novo placeholder -> ' + textoPlace + " " , 'background: tomato;color:white;');

        changeInput.attr({
            "placeholder" : textoPlace,
        });

        changeInput.val("");
        
}

function removeQuad(){
    quad.remove();
}

function emptyQuad(){
    quad.empty();
}

function addQuadClass(){
    quad2.addClass("btn-primary ");
    console.log("Adicionou classe -> " + quad2.attr("class"));
}

function removeQuadClass(){
    console.log("Removeu classe -> " + quad2.attr("class"));
    quad2.removeClass("btn-primary");
}