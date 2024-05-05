// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const inputText = document.getElementById('text-to-speak');
  const imgElement = document.querySelector('img');
  const voiceSelector = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  let availableVoices = [];

  function populateAvailableVoices() {
    availableVoices = speechSynthesis.getVoices();
    voiceSelector.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    availableVoices.forEach((voice, index) => {
        let option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.setAttribute('value', index);
        voiceSelector.appendChild(option);
    });
  }

  // Populate and load voices from speechSynthesis
  populateAvailableVoices();
  if(speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateAvailableVoices;
  }

  talkButton.addEventListener('click', () => {
    // Early quit without doing anything if the input text is empty
    if(!inputText.value) {
      return; 
    }

    let utterance = new SpeechSynthesisUtterance(inputText.value);
    let selectedVoiceIndex = voiceSelector.selectedOptions[0].value;
    utterance.voice = availableVoices[selectedVoiceIndex];

    // Change image to smiling-open when begin speaking
    addEventListener("start", () => {
      imgElement.src = 'assets/images/smiling-open.png';
    });

    // Change image back to smiling when finished speaking
    addEventListener("end", () => {
      imgElement.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterance);
  });
}