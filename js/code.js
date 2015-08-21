 var imagesArray = new Array();
 var animals = ["finch", "bullfinch", "sparrow", "cat", "monkey", "dog", "cow"]
 
 //  loading images
 for (i=0; i<animals.length; i++) {
     var animal = animals[i]
     var animal = document.createElement("img");
     animal.src='image/'+animals[i]+'.jpg';
     imagesArray[i]=animal;
 };
 
 var selectedAnimal = selectAnimal(imagesArray);
 // load audio
 var animalAudio = document.createElement("audio");
 animalAudio.setAttribute('src','audio/'+animals[selectedAnimal]+'.mp3');
 animalAudio.setAttribute("controls", "controls");
 document.getElementById("audio1").appendChild(animalAudio);
  
 console.log('audio/'+animals[selectedAnimal]+'.mp3')
 
 function selectAnimal (imagesArray) {
     var placesArray = ["image1","image2", "image3", "image4", "image5"];
     var randomAnimal = Math.floor((Math.random() * imagesArray.length));
     
     return randomAnimal
 };
 
 function drawImages(imagesArray, randomAnimal) {
	 var randomNumberArray = new Array();
         randomNumberArray.push(randomAnimal)
	 while (randomNumberArray.length<5){
		 var randomNumber = Math.floor((Math.random() * (imagesArray.length-1)));
		 if (randomNumberArray.indexOf(randomNumber)<0 && randomNumberArray.indexOf(randomNumber)!=randomAnimal) {
			 randomNumberArray.push(randomNumber);
		 }
	}
	return randomNumberArray;
}; 

drawImagesIndex=drawImages(imagesArray,selectedAnimal);
console.log(drawImagesIndex)
console.log('zivotinja ' + animals[selectedAnimal])
// console.log(imagesArray)
for (i=0; i<5; i++) {
	imageNum='image' + (i+1).toString();
	document.getElementById(imageNum).appendChild(imagesArray[drawImagesIndex[i]]);
}