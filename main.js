const buttons = document.querySelectorAll('.key');

buttons.forEach(el => {
  el.addEventListener('click', (e) => {
    if (e.target.nodeName === 'KBD' || target.className === 'key') {
      let audio = document.querySelector(`audio[data-key="${e.target.parentElement.id}"]`);
      audio.currentTime = 0;
      audio.play();
      key.classList.toggle('playing');
      
      const keys = document.querySelectorAll('.key');
      keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    
      function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
      }
    }

  });
});

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
    this.classList.remove('playing');
  }
});

