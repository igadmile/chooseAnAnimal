 <!DOCTYPE html>
<html>
    <head>
    <title>Pogodi životinju</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/freelancer.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>
    <div class="vertical-center">
        <div class="container">
            <div class="row col-xs-12">
                <div id="image1" class="col-xs-3">
                </div>
                <div id="image2" class="col-xs-3">
                </div>
                <div id="image3" class="col-xs-3">
                </div>
                <div class="col-xs-3">
                    <div class="gameTitle">
                        <div>POGODI</div>
                        <div>ŽIVOTINJU</div>
                    </div>
                    <img  class="hexagonBlue2" src="image/svg/hexagonBlue2.png">
                </div>
            </div>
            <div class="row2 row col-xs-12">
                <div id="image4" class="col-xs-3">
                </div>
                <div id="image5" class="col-xs-3">
                </div>
                <div id="image6" class="col-xs-3">
                </div>
            </div>
            <div class="row3 row col-xs-12">
                <div id="pointsCenter" class="col-xs-3">
                    <div id="points">0</div>
                   <img  class="hexagonBlue2" src="image/svg/hexagonBlue2.png"> 
                </div>
                <div id="replay" class="col-xs-3">
                   <img class="playIcon" src="image/svg/play.png">
                   <img  class="hexagonBlue2" src="image/svg/hexagonBlue2.png">
                </div>
                <div class="col-xs-3" id="help">
					<div class="helpTitle">
                        <div>POMOĆ!</div>
                    </div>
					<img  class="hexagonBlue2" src="image/svg/hexagonBlue2.png">
                </div>
                <div class="col-xs-3">
                   <img class="restartIcon" src="image/svg/restart.png">
                   <img  class="hexagonBlue2" src="image/svg/hexagonBlue2.png">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12" id="audio">
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="modalDialogue" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Igra je završena!</h4>
                </div>
                <div class="modal-body">
                    <form method="post" action="php/highscore.php" id="highForm">
                        <div class="form-group">
                            <input type="text" class="form-control" id="playerName" name="name" placeholder="Upiši ime">
                            <input type="text" class="form-control" id="playerPoints" name="points">
                        </div>
                        <div class="form-group">
							<button type="submit" class="btn btn-default" id="saveHigh">Spremi</button>
						 </div>
                    </form>
                    <span id="phpAppend"></span>
                    <div id="highTable">
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="modalButton" type="button" class="btn btn-primary">Ponovno pokreni igru</button>
                </div>
                </div>
            </div>
            </div>
        </div>
	</div>
        <script src="js/includes/jquery-2.1.4.min.js"></script>
        <!--<script src="js/includes/jquery-ui.min.js"></script>-->
        <script src="js/includes/bootstrap.min.js"></script>
	<script src="js/code/codejquerry.js"></script>
    </body>
</html> 