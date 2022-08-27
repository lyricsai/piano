const piano = () => {

    let transitionCounter = 0;

    const keys = [...document.querySelectorAll('.key')];

    const playSound = (e) => {
        if(e.pointerType === 'touch' || e.pointerType === 'mouse') e.keyCode = e.target.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

        if(!audio) return;

        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
        if(transitionCounter % 2) return;
        keys.forEach(key => key.addEventListener('transitionend', removeClass));
    };

    const removeClass = (e) => {

        if(e.propertyName !== 'transform') return;
        transitionCounter++;
        e.target.classList.remove('playing');
    };

    document.addEventListener('keyup', playSound, false);
    keys.forEach(key => key.addEventListener('click', playSound));
    keys.forEach(key => key.addEventListener('touchend', playSound));

    document.addEventListener('dblclick', (e) => e.preventDefault());
};

piano();