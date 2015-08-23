$(document).ready(function(){
	
	// variable storing index of selected animal
	var selectedAnimal = selectAnimal();
	drawLoop(selectedAnimal[0],selectedAnimal[1]);
	
	function selectAnimal () {
	var animals=["lion", "finch", "bullfinch", "sparrow", "cat", "chimp", "dog", "cow", "goat", "sheep", "wolf", "bear", "duck"];
	var randomAnimal = Math.floor((Math.random() * animals.length));
	return [randomAnimal, animals]
	};

	function drawLoop(selectedAnimal,animals) {
	 
	 //  loading images
	var imagesArray = new Array();
		for (i=0; i<animals.length; i++) {
			var animal = "<img src='image/"+animals[i]+".jpg'>"
			imagesArray[i]=animal;
		};
		
		//  randomize positions of images
		var placesArray = ["image1","image2", "image3", "image4", "image5", "image6"];
		var positions = new Array();
		while (positions.length<6) {
			var randomPosition = Math.floor((Math.random() * placesArray.length));
			if (positions.indexOf(randomPosition)<0) {
				positions.push(randomPosition);
			}
		};
		
		//  make array with random position of image indexes
		var randomNumberArray = new Array();
		randomNumberArray.push(selectedAnimal)
		while (randomNumberArray.length<6){
			var randomNumber = Math.floor((Math.random() * imagesArray.length));
			if (randomNumberArray.indexOf(randomNumber)<0 && randomNumberArray.indexOf(randomNumber)!=selectedAnimal) {
				randomNumberArray.push(randomNumber);
			}
		}

		//console.log(drawImagesIndex)
		console.log('zivotinja ' + selectedAnimal)
		
		// load audio
		var animalAudio = "<audio src='audio/"+animals[selectedAnimal]+".mp3' autoplay controls='controls'></audio>"
		$('#audio').append(animalAudio)
		//console.log('audio/'+animals[selectedAnimal]+'.mp3')

		for (i=0; i<6; i++) {
			imageNum=placesArray[positions[i]];
			$('#'+imageNum).append(imagesArray[randomNumberArray[i]]).attr('style', randomNumberArray[i]);

			$('img').fadeTo(400, 1)
		}
		
		$
		
		// detect click and see if clicked image style corresponds with selectedAnimal
		// if so add points, else substract
		$('img').click(function(){
			var points = parseInt($('input').val());
			points = isNaN(points) ? 0 : points;
			var broj=$(this).parent().attr('style');
			if (broj==selectedAnimal) {
				points++;
				$('input').val(points);
				startLoop();
			}
			if (broj!=selectedAnimal) {
				points--;
				$('input').val(points);
			}
		})
	}
	
	function startLoop(){
		
		$('img').fadeTo(400, 0)
		$('img').remove();
		$('audio').remove();
		selectedAnimal = selectAnimal();
		drawLoop(selectedAnimal[0],selectedAnimal[1]);
		return selectedAnimal[0]
		counter++
	}
	
	// reset if button reset clicked
	$('button').click(function(){
		$('#counter').val(0);
		startLoop();
	})
});
