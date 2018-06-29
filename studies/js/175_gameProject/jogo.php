<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>175_gameProject</title>
     <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.js"></script>
    <![endif]-->
    <!-- Bootstrap CSS and useful links -->
    <!-- Local bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <style type="text/css">
      .container{
        font-size: 30px;
       }
      td{
        
        font-weight: bolder;
        
      }

    </style>
</head>
<body>
  <a href="index.html"><h5>back</h5></a>
      <aside class="container">
        <aside class="row">
          
            <aside class="col-md-6">
              <?php
                $level = $_POST["levelSelected"];

                if ($level == "easy") {
                  echo "Easy level, destroy >10 ballons in time !";
                }

                if ($level == "medium") {
                  echo "Medium level, destroy >20 ballons in time !";
                }

                if ($level == "hard") {
                  echo "Hard level, destroy >50 ballons in time !";
                }
              ?>
              <p>
              <span id="boom-number">0</span> ballons booms
              <br>

              <b>Timer : <span id="time"></span></b>
            </aside>

            <aside class="col-md-6">
              <table class="table table-striped">

                <tr>
                  <td><img id="img1" onclick="change(this.id)" src="imgs/balao_azul_grande.png"></td>
                  <td><img id="img2" onclick="change(this.id)" src="imgs/balao_azul_grande.png"></td>
                  <td><img id="img3" onclick="change(this.id)" src="imgs/balao_azul_grande.png"></td>
                </tr>

                <tr>
                  <td><img id="img4" onclick="change(this.id)" src="imgs/balao_azul_grande.png"></td>
                  <td><img id="img5" onclick="change(this.id)" src="imgs/balao_azul_grande.png"></td>
                  <td><img id="img6" onclick="change(this.id)" src="imgs/balao_azul_grande.png"></td>
                </tr>

                <tr>
                  <td><img id="img7" onclick="change(this.id)" src="imgs/balao_azul_grande.png"></td>
                  <td><img id="img8" onclick="change(this.id)" src="imgs/balao_azul_grande.png"></td>
                  <td><img id="img9" onclick="change(this.id)" src="imgs/balao_azul_grande.png"></td>
                </tr>


              </table>
            </aside>

        </aside>  <!-- End row -->


      </aside>    <!-- End container-->

      <script type="text/javascript">
        function startTimer(duration, display) {
          var timer = duration, minutes, seconds;
          
          setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
              timer = duration;
            }
            }, 1000);
          }


            window.onload = function () {
              var fiveMinutes = 30,
              display = document.querySelector('#time');
              startTimer(fiveMinutes, display);
            };

            //Ballons booms
            var booms = 0;

            function change(id){

              console.log(id);

              if(document.getElementById(id).getAttribute('src') =="imgs/balao_azul_grande.png"){
            
                document.getElementById(id).src = "imgs/balao_azul_grande_estourado.png";

                booms += 1;
                document.getElementById('boom-number').innerHTML = booms;
                ganhou();

                }else{
                  document.getElementById(id).src = "imgs/balao_azul_grande.png";
                }
              }
        
       function ganhou(){
         if(booms > 9){
           alert("GANHOOOOOOOOOOOOOOOOOOOOOO");
         }
       }


      </script>
    <!-- CDN'S BASES -->

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
</body>
</html>
