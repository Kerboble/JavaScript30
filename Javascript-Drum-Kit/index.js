//listen for a key to be pressed to change the class to playing 
const clap = new Audio('/Javascript-Drum-Kit/audio/clap.mp3')
const hiHat = new Audio('/Javascript-Drum-Kit/audio/Hi-Hat-Closed-Hit-B1-www.fesliyanstudios.com.mp3')
const kick = new Audio('/Javascript-Drum-Kit/audio/house-kick-single-hit-a-key-640-lMU.mp3')
const openHat = new Audio('/Javascript-Drum-Kit/audio/subtle-reverb-open-hi-hat-sound-a-key-02-xkq.mp3')
const boom = new Audio('/Javascript-Drum-Kit/audio/dry-boom-bap-hip-hop-bass-drum-sample-a-key-602-41Z.mp3')
const ride = new Audio('/Javascript-Drum-Kit/audio/00s-ride-f-sharp-key-04-QAm.mp3')
const snare = new Audio('/Javascript-Drum-Kit/audio/good-jazz-acoustic-snare-sound-a-sharp-key-336-vfe.mp3')
const tom = new Audio('/Javascript-Drum-Kit/audio/deep-tom-drum-f-key-03-gkn.mp3')
const tink = new Audio('/Javascript-Drum-Kit/audio/Hi-Hat-Closed-Hit-B1-www.fesliyanstudios.com.mp3') 




function playAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

document.body.addEventListener('keypress', (event) => {
    if (event.key === 's') {
        playAudio(hiHat);

        document.querySelector('.S').classList.remove('tone');
        document.querySelector('.S').classList.add('playing');

        setTimeout(() => {
            document.querySelector('.S').classList.remove('playing');
            document.querySelector('.S').classList.add('tone');
        }, 100);
    }
});

document.body.addEventListener('keypress', (event) => {
    if (event.key === 'a') {
        playAudio(clap);

        document.querySelector('.A').classList.remove('tone');
        document.querySelector('.A').classList.add('playing');

        setTimeout(() => {
            document.querySelector('.A').classList.remove('playing');
            document.querySelector('.A').classList.add('tone');
        }, 100);
    }
});

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'd'){
        playAudio(kick);

     document.querySelector('.D').classList.remove('tone')
     document.querySelector('.D').classList.add('playing')
     setTimeout(()=>{
         document.querySelector('.D').classList.remove('playing')
         document.querySelector('.D').classList.add('tone')
     },100)
    }
 })

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'f'){
        playAudio(openHat)

     document.querySelector('.F').classList.remove('tone')
     document.querySelector('.F').classList.add('playing')
     setTimeout(()=>{
         document.querySelector('.F').classList.remove('playing')
         document.querySelector('.F').classList.add('tone')
     },100)
    }
 })


 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'g'){
        playAudio(boom)

     document.querySelector('.G').classList.remove('tone')
     document.querySelector('.G').classList.add('playing')
     setTimeout(()=>{
         document.querySelector('.G').classList.remove('playing')
         document.querySelector('.G').classList.add('tone')
     },100)
    }
 })

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'h'){
        playAudio(ride)

     document.querySelector('.H').classList.remove('tone')
     document.querySelector('.H').classList.add('playing')
     setTimeout(()=>{
         document.querySelector('.H').classList.remove('playing')
         document.querySelector('.H').classList.add('tone')
     },100)
    }
 })

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'j'){
        playAudio(snare)

     document.querySelector('.J').classList.remove('tone')
     document.querySelector('.J').classList.add('playing')
     setTimeout(()=>{
         document.querySelector('.J').classList.remove('playing')
         document.querySelector('.J').classList.add('tone')
     },100)
    }
 })

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'k'){
        playAudio(tom)

     document.querySelector('.K').classList.remove('tone')
     document.querySelector('.K').classList.add('playing')
     setTimeout(()=>{
         document.querySelector('.K').classList.remove('playing')
         document.querySelector('.K').classList.add('tone')
     },100)
    }
 })

 document.body.addEventListener('keypress', (event) =>{
    if(event.key === 'l'){
        playAudio(tink)

     document.querySelector('.L').classList.remove('tone')
     document.querySelector('.L').classList.add('playing')
     setTimeout(()=>{
         document.querySelector('.L').classList.remove('playing')
         document.querySelector('.L').classList.add('tone')
     },100)
    }
 })

 
