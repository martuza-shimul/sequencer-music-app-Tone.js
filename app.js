function sequencer() {
  const kick = new Tone.Player("./drums/kick-electro01.wav").toDestination();
  const snare = new Tone.Player("./drums/snare-lofi02.wav").toDestination();
  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, "8n");
  Tone.Transport.start();
  //   kick.Tone.Buffer();

  function repeat() {
    let step = index % 8;
    let kickInputs = document.querySelector(
      `.kick input:nth-child(${step + 1})`
    );
    if (kickInputs.checked) {
     
      kick.start();
    }
    index++;
  }
}

sequencer();
