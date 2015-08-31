$(document).ready(function(){
	
    // variable storing index of selected animal
    var animalsObject=[];
    var count = 0;
    var selectedAnimal = selectAnimal();
    var points = 0;
    var turn = 0;
    
    drawLoop(selectedAnimal[0],selectedAnimal[1]);
    
    function selectAnimal () {
        var animalsInside=["lion", "finch", "bullfinch", "heron", "sparrow", "cat", "chimp", "woodpecker", "dog", "cow", "goat", "sheep", "wolf", "bear", "duck", "goose", "fox", "chicken", "blackbird", "tit", "roedeer", "stork", "crow", "jay"];
        
        // function for making difference between two arrays. Removes duplicate values
        Array.prototype.diff = function(a) {
        return this.filter(function(i) {return a.indexOf(i) < 0;});
        };
        
        // for first run assign animalsInside to animalsObject 
        animalsObject[0]=animalsInside;
        
        // get random number 
        var randomAnimal = Math.floor((Math.random() * animalsObject[count].length));
        
        // store value of animalsObject for Making diff and returning
        var animalsMemory = animalsObject[count];
        
        // pick animal to exclude and make diff with animalsObject
        var toRemove = animalsMemory[randomAnimal];
        
        // make a dif and set array for animalsObject count+1
        animalsObject[(count+1)]=animalsMemory.diff(toRemove);
        console.log(animalsObject);
        count++
        return [randomAnimal, animalsMemory]
    };

    function drawLoop(selectedAnimal,animals) {
        //  loading images
        var imagesArray = new Array();
        for (i=0; i<animals.length; i++) {
            var animal = "<div class='hexagon hexImg' style='background-image:url(image/"+animals[i]+".jpg')><div class='hexTop'></div><div class='hexBottom'></div>"
            imagesArray[i]=animal;
        };
        
        //  randomize positions of images
        var placesArray = ["image1","image2", "image3", "image4", "image5", "image6"];
        var positions = new Array();
        while (positions.length<6) {
            var randomPosition = Math.floor((Math.random() * placesArray.length));
            if (positions.indexOf(randomPosition)<0) {
                positions.push(randomPosition);
            };
        };
        
        //  make array with random position of image indexes
        var randomNumberArray = new Array();
        randomNumberArray.push(selectedAnimal);
        while (randomNumberArray.length<6){
            var randomNumber = Math.floor((Math.random() * imagesArray.length));
            if (randomNumberArray.indexOf(randomNumber)<0 && randomNumberArray.indexOf(randomNumber)!=selectedAnimal) {
                randomNumberArray.push(randomNumber);
            };
        };
        
        // load audio
        var animalAudio = "<audio src='audio/"+animals[selectedAnimal]+".mp3' autoplay></audio>";
        $('#audio').append(animalAudio);
        
        $('.playIcon').click(function() {
            $( '#audio').children().replaceWith(animalAudio);
        });
        
        for (i=0; i<6; i++) {
            imageNum=placesArray[positions[i]];
            $('#'+imageNum).append(imagesArray[randomNumberArray[i]]).attr('title',randomNumberArray[i]);
        };

        // detect click and see if clicked image title corresponds with selectedAnimal
        // if so add points, else substract
        turn++
        $('.hexImg').click(function(){
            var broj=$(this).parent().attr('title');
            console.log('kliknuto '+broj+'selected '+selectedAnimal)
            if (broj==selectedAnimal) {
                points++;
                $('#points').text(points);
                startLoop();
            };
            if (broj!=selectedAnimal) {
                points--;
                $('#points').text(points);
            };
        });
    }
    
    // delete images and audio and start loop again
    function startLoop(){
        $('.hexImg').remove();
        $('audio').remove();
        
        // when modalButton clicket reload page
        $('#modalButton').click(function(){
            $('#modalDialogue').modal('hide');
            location.reload();
        });
        
        // if points reach certain value, show modal and hide content on page
        if(turn==10){
            $('.modal-body').text('Broj bodova je: '+ points);
            $('#modalDialogue').modal('show');
            $('.col-xs-12').remove();
        }
        else {
            selectedAnimal = selectAnimal();
            drawLoop(selectedAnimal[0],selectedAnimal[1]);
            return selectedAnimal[0]
        }
    }
    
    // reset if button reset clicked
    $('.restartIcon').click(function(){
        location.reload();
    })
	
//     // set #points to right position
// 	var pointsHeight = $('#points').height();
// 	var pointsWidth = $('#points').width();
// 	var pointsTop = (318/2)-(pointsHeight/2);
// 	var pointsLeft = (285/2)-(pointsWidth/2);
 	$('#points').css({top:60, left:112})

//     $( "#points" ).position({
//         my: "center",
//         at: "center",
//         of: "#pointsCenter"
//     });
});