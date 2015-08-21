 var imagesArray = new Array();
 var animals = ["finch", "bullfinch", "sparrow", "cat", "monkey", "dog", "cow"]
 
 //  loading images
 for (i=0; i<animals.length; i++) {
     var animal = animals[i]
     var animal = document.createElement("img");
     animal.src='image/'+animals[i]+'.jpg';
     imagesArray[i]=animal;
 };
 
//  select animal for turn
 function selectAnimal (imagesArray) {
     var randomAnimal = Math.floor((Math.random() * imagesArray.length));
     return randomAnimal
 };
 
//  make array with random position of image indexes
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
 
 function detectClick(clicked, selectedAnimal) {
     var points = parseInt(document.getElementById('counter').value, 10);
     points = isNaN(points) ? 0 : points;
     var clickedImage = clicked.getAttribute("style");
     if (clickedImage==selectedAnimal.toString()) {
         points=points+1
         document.getElementById('counter').value = points
         startLoop()
     }
     if (clickedImage!=selectedAnimal.toString()) {
         points--
         document.getElementById('counter').value = points
     }
     //alert(clicked.getAttribute("style"));
     console.log(points)
 }
 //points=detectClick(true,selectAnimal,points)

//  randomize positions of images
var placesArray = ["image1","image2", "image3", "image4", "image5"];
var positions = new Array();

while (positions.length<5) {
    var randomPosition = Math.floor((Math.random() * placesArray.length));
    if (positions.indexOf(randomPosition)<0) {
        positions.push(randomPosition);
    }
};

// console.log('pozicije su: ' + positions)

//  draw images
function drawLoop(drawImages,imagesArray,selectedAnimal) {
    drawImagesIndex=drawImages(imagesArray,selectedAnimal);
    console.log(drawImagesIndex)
    console.log('zivotinja ' + selectedAnimal)
    
    // load audio
    var animalAudio = document.createElement("audio");
    animalAudio.setAttribute('src','audio/'+animals[selectedAnimal]+'.mp3');
    animalAudio.setAttribute("controls", "controls");
    document.getElementById("audio1").appendChild(animalAudio);
  
    //console.log('audio/'+animals[selectedAnimal]+'.mp3')

    for (i=0; i<5; i++) {
        imageNum=placesArray[positions[i]];
        console.log(imageNum)
        document.getElementById(imageNum).appendChild(imagesArray[drawImagesIndex[i]]);
        document.getElementById(imageNum).setAttribute("style", drawImagesIndex[i]);
        //console.log("ovo su style pozicije "+drawImagesIndex.indexOf(i))
    }
};

function startLoop(){
    var image = document.getElementsByTagName("img");
    for (index = image.length - 1; index >= 0; index--) {
        image[index].parentNode.removeChild(image[index]);
    }
    var audio = document.getElementsByTagName("audio");
    for (index = audio.length - 1; index >= 0; index--) {
        audio[index].parentNode.removeChild(audio[index]);
    }
    selectedAnimal = selectAnimal(imagesArray);
    drawLoop(drawImages,imagesArray, selectedAnimal);
    return selectedAnimal
    counter++
}

// variable storing index of selected animal
var selectedAnimal = selectAnimal(imagesArray);
drawLoop(drawImages,imagesArray, selectedAnimal);