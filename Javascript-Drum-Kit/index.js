//this is the list of all the different sounds 
const clap = new Audio('/Javascript-Drum-Kit/audio/clap.mp3')
const hiHat = new Audio('/Javascript-Drum-Kit/audio/Hi-Hat-Closed-Hit-B1-www.fesliyanstudios.com.mp3')
const kick = new Audio('/Javascript-Drum-Kit/audio/house-kick-single-hit-a-key-640-lMU.mp3')
const openHat = new Audio('/Javascript-Drum-Kit/audio/subtle-reverb-open-hi-hat-sound-a-key-02-xkq.mp3')
const boom = new Audio('/Javascript-Drum-Kit/audio/dry-boom-bap-hip-hop-bass-drum-sample-a-key-602-41Z.mp3')
const ride = new Audio('/Javascript-Drum-Kit/audio/00s-ride-f-sharp-key-04-QAm.mp3')
const snare = new Audio('/Javascript-Drum-Kit/audio/good-jazz-acoustic-snare-sound-a-sharp-key-336-vfe.mp3')
const tom = new Audio('/Javascript-Drum-Kit/audio/deep-tom-drum-f-key-03-gkn.mp3')
const tink = new Audio('/Javascript-Drum-Kit/audio/Hi-Hat-Closed-Hit-B1-www.fesliyanstudios.com.mp3') 



//this function plays the audio when key is pressed
function playAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}


//this function changes the class of each key so that the border changes when pressed
function keyPressed(key){
    document.querySelector(`.${key}`).classList.remove('tone');
        document.querySelector(`.${key}`).classList.add('playing');

        setTimeout(() => {
            document.querySelector(`.${key}`).classList.remove('playing');
            document.querySelector(`.${key}`).classList.add('tone');
        }, 100);
}

//each key eventlistener has the audio function along with function that indicates it was pressed.
document.body.addEventListener('keypress', (event) => {
    if (event.key === 's') {
        playAudio(hiHat);
        keyPressed('S')
    }
});

document.body.addEventListener('keypress', (event) => {
    if (event.key === 'a') {
        playAudio(clap);
        keyPressed('A')
    }
});

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'd'){
        playAudio(kick);
        keyPressed('D')
    }
 })

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'f'){
        playAudio(openHat)
        keyPressed('F')
    }
 })


 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'g'){
        playAudio(boom)
        keyPressed('G')
    }
 })

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'h'){
        playAudio(ride)
        keyPressed('H')
    }
 })

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'j'){
        playAudio(snare)
        keyPressed('J')
    }
 })

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'k'){
        playAudio(tom)
        keyPressed('K')
    }
 })

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'l'){
        playAudio(tink)
        keyPressed('L')
    }
 })

 
