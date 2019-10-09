var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    playSound(this.innerHTML);
  });

}

document.addEventListener("keypress", function() {
  playSound(event.key);
});

function playSound(key) {
  buttonAnimation(key);
  switch (key) {
    case "q":
      var audio = new Audio('sounds/606-cymbal1.wav');
      audio.play();
      break;
    case "w":
      var audio = new Audio('sounds/606-cymbal2.wav');
      audio.play();
      break;
    case "e":
      var audio = new Audio('sounds/606-cymbal3.wav');
      audio.play();
      break;
    case "r":
      var audio = new Audio('sounds/606-cymbal4.wav');
      audio.play();
      break;
    case "u":
      var audio = new Audio('sounds/606-cymbal5.wav');
      audio.play();
      break;
    case "i":
      var audio = new Audio('sounds/606-cymbal6.wav');
      audio.play();
      break;
    case "o":
      var audio = new Audio('sounds/606-cymbal7.wav');
      audio.play();
      break;
    case "p":
      var audio = new Audio('sounds/606-cymbal8.wav');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/606-kick1.wav');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/606-kick2.wav');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/606-snare1.wav');
      audio.play();
      break;
    case "f":
      var audio = new Audio('sounds/606-snare2.wav');
      audio.play();
      break;
    case "h":
      var audio = new Audio('sounds/606-tom1.wav');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/606-tom2.wav');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/606-tom3.wav');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/606-tom4.wav');
      audio.play();
      break;
    case "z":
      var audio = new Audio('sounds/basscopter.wav');
      audio.play();
      break;
    case "x":
      var audio = new Audio('sounds/bellclicker.wav');
      audio.play();
      break;
    case "c":
      var audio = new Audio('sounds/birdkick.wav');
      audio.play();
      break;
    case "v":
      var audio = new Audio('sounds/brainfartkick.wav');
      audio.play();
      break;
    case "b":
      var audio = new Audio('sounds/brokenpipkick.wav');
      audio.play();
      break;
    case "n":
      var audio = new Audio('sounds/chirpkick.wav');
      audio.play();
      break;
    case "m":
      var audio = new Audio('sounds/electro-pling1.wav');
      audio.play();
      break;
    case "space":
    case " ":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
  }
  
  
  function buttonAnimation(key) {
    var button =  document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(function(){
      button.classList.remove("pressed");
    }, 200);
  }
}
