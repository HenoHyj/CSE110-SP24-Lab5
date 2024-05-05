// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const imgElement = document.querySelector('img');
    const audioElement = document.querySelector('audio');
    const volumeSlider = document.getElementById('volume');
    const volumeIcon = document.querySelector('#volume-controls img');
    const hornSelector = document.getElementById('horn-select');
    const soundButton = document.querySelector('button');

    // Changes the image and audio file based on the selected horn
    hornSelector.addEventListener('change', () => {
        let hornValue = hornSelect.value;
        imgElement.src = `assets/images/${hornValue}.svg`;
        audioElement.src = `assets/audio/${hornValue}.mp3`;
    });

    // Updates the volume icon and adjusts audio volume
    volumeSlider.addEventListener('input', () => {
        let volumeLevel = parseInt(volumeSlider.value);
        updateVolumeIcon(volumeLevel);
        audioElement.volume = volumeLevel / 100;
    });


    // Plays the sound
    soundButton.addEventListener('click', () => {
        //Special case when party horn is selected, we need to play the confetti
        if (hornSelect.value === 'party-horn') {
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti();
        }
        audioElement.play();
    });

    // Changes the volume icon to the corresponding current audio volume level
    function updateVolumeIcon(volumeLevel) {
        if (volumeLevel === 0) {
            volumeIcon.src = 'assets/icons/volume-level-0.svg';
            volumeIcon.alt = 'Volume level 0';
        } 
        else if (volumeLevel < 33) {
            volumeIcon.src = 'assets/icons/volume-level-1.svg';
            volumeIcon.alt = 'Volume level 1';
        } 
        else if (volumeLevel < 67) {
            volumeIcon.src = 'assets/icons/volume-level-2.svg';
            volumeIcon.alt = 'Volume level 2';
        } 
        else {
            volumeIcon.src = 'assets/icons/volume-level-3.svg';
            volumeIcon.alt = 'Volume level 3';
        }
    }
}