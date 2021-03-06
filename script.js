const colors = ["r", "o", "y", "g", "b", "p"];
const popit = document.getElementById("popit");

function setupSynth() {
    window.synth = new Tone.Synth({
        oscillator: {
          type: 'sine8',
          modulationFrequency: 0.5
        },
        envelope: {
          attack: 0,
          decay: 0.1,
          sustain: 0,
          release: 0.9,
        }
      }).toMaster();
}
  
function boopMe() {
    if (!window.synth) {
        setupSynth();
    }
    window.synth.triggerAttackRelease(55, '5n');
}

function wrapper(countInRow) {
    for (let color of colors) {
        const row = document.createElement('div');
        row.className = color;
        for (let i = 0; i < countInRow; i++) {
          const pop = document.createElement('div');
          pop.className = 'circle ' + color;
          pop.onclick = function() {
            this.classList.toggle("pressed");
            window.navigator.vibrate(3);
            boopMe();
          };
          row.appendChild(pop);
        }
      
        popit.appendChild(row);
      }
}

if(window.screen.width < 710){
    wrapper(7);
    wrapper(7);
}
if(window.screen.width >= 710 && window.screen.width <= 1024){
  wrapper(10);
  wrapper(10);
}
if(window.screen.width > 1024){
    wrapper(13);
}


