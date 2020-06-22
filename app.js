var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i = 0 ; i < numberOfDrumButton ; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', function(){
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });   
}

document.addEventListener('keypress',function(event){
    
    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key){
    switch (key){
        case "w":
            var tom1 = new Audio('sounds/tom1.wav.mp3');
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio('sounds/tom2.wav.mp3');
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio('sounds/tom3.wav.mp3');
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio('sounds/tom4.wav.mp3');
            tom4.play();
        break;
        case "j":
            var tom5 = new Audio('sounds/kick2.wav.mp3');
            tom5.play();
        break;
        case "k":
            var tom6 = new Audio('sounds/snare2.wav.mp3');
            tom6.play();
        break;
        case "l":
            var tom7 = new Audio('sounds/CRASH2.aif.mp3');
            tom7.play();
        break;
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+ currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)

}