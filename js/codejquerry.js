$(document).ready(function(){
	
	// variable storing index of selected animal
	var animalsObject=[];
	var count = 0;
	var selectedAnimal = selectAnimal();
	
	drawLoop(selectedAnimal[0],selectedAnimal[1]);
	
	function selectAnimal () {
		var animalsInside=["lion", "finch", "bullfinch", "sparrow", "cat", "chimp", "dog", "cow", "goat", "sheep", "wolf", "bear", "duck"];
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
		animalsObject[(count+1)]=animalsMemory.diff(toRemove)
		console.log(animalsObject)
		count++
		return [randomAnimal, animalsMemory]
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
		
		// load audio
		var animalAudio = "<audio src='audio/"+animals[selectedAnimal]+".mp3' autoplay controls='controls'></audio>"
		$('#audio').append(animalAudio)
		//console.log('audio/'+animals[selectedAnimal]+'.mp3')

		for (i=0; i<6; i++) {
			imageNum=placesArray[positions[i]];
			$('#'+imageNum).append(imagesArray[randomNumberArray[i]]).attr('style', randomNumberArray[i]);

			$('img').fadeTo(400, 1)
		}
		
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
	
	// delete images and audio and start loop again
	function startLoop(){
		$('img').fadeTo(400, 0)
		$('img').remove();
		$('audio').remove();
		selectedAnimal = selectAnimal();
		drawLoop(selectedAnimal[0],selectedAnimal[1]);
		return selectedAnimal[0]
	}
	
	// reset if button reset clicked
	$('button').click(function(){
		$('#counter').val(0);
		startLoop();
	})
});
