var randomNumber1= Math.round(Math.random()*6);
if (randomNumber1 === 1 || randomNumber1 === 0){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
if (randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
if (randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
if (randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
if (randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
if (randomNumber1 === 6){
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

var randomNumber2= Math.round(Math.random()*6);
if (randomNumber1 === 1 || randomNumber1 === 0){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
if (randomNumber1 === 2){
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
if (randomNumber1 === 3){
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
if (randomNumber1 === 4){
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
if (randomNumber1 === 5){
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
if (randomNumber1 === 6){
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if (randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
if (randomNumber1 < randomNumber2){

    document.querySelector("h1").innerHTML="Player 2 Wins"
}

else {

    document.querySelector("h1").innerHTML="Draw!"    

}