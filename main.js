window.addEventListener('keydown', (e) => {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.toggle('playing');

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
  }

});