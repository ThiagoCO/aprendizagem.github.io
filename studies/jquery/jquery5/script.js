var codeLabel   = $("#code-label");
var codeLabel2  = $("#code-label-2");

var ajaxText    = $("#ajax-text");
var ajaxText2   = $("#ajax-text-2");
var ajaxText3   = $("#ajax-text-3");

var getBtn      = $("#get-btn");
var loadBtn     = $("#load-btn");
var postBtn     = $("#post-btn");


// GET
getBtn.click(function(){
    try{
        jQuery.get(ajaxText.val() + ".txt",function(data,status){
            document.getElementById("code-label").innerHTML = data + "\n\n" + "STATUS -> " + status;  
        });

    }catch(err){
        alert("erro \n" + err);
    }
});


// LOAD
loadBtn.click(function(){
    ajaxText2.load(ajaxText2.val() + ".txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success"){
            document.getElementById("code-label-2").innerHTML = "External content loaded successfully!\n\n\n" + responseTxt;
        }

        if(statusTxt == "error"){
            document.getElementById("code-label-2").innerHTML = "Error: " + xhr.status + " : " + xhr.statusText;
        }
    });
});


// POST
postBtn.click(function(){
    jQuery.post("test.asp",
    {
        name: "Donald Duck",
        city: "Duckburg"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});


$.noConflict();
jQuery(document).ready(function(){
    jQuery("#conflict-btn").click(function(){
        console.log("jquery ta funfando");
    });
});