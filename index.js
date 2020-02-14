
function playSound(e){
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // In the same fashion as above,find the DOM element for the div tag, then add "press" to it
const key = document.querySelector(`div[data-keyCode="${e.keyCode}"]`);

// Grab the appropriate audio DOM element based on e.keyCode which should match the audio's data key attribute
key.classList.add('press');
// grab the sound just in case it's already playing
audio.currentTime = 0;

// Play sound
audio.play();
}

function removeTransition(e){

}

const keys = [...document.querySelectorAll('.sound')];
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);
// var play = document.getElementById('data-key="49"');