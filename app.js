// Write our JavaScript Code Here
var pics = [
    "Images/Moto.jpg",
    "Images/Vintage 1.jpg",
    "Images/Awesome-Vintage-Car.jpg",
    "Images/Chevrolet.jpg",
    "Images/Ford.jpg",
    "Images/HD Vintage.jpg",
    "Images/indian.jpeg",
    "Images/Vintage Bike.jpg",
    "Images/Vintage.jpg"
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if (counter === 6 ) {
        counter = 0;
    }
    img.src = pics[counter]; 
    counter += 1 ;
});
