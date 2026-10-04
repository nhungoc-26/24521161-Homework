const audioContext = new AudioContext();

const soundFrequencies = {
  kick: 100,
  snare: 180,
  hihat: 500,
  tom: 140,
  clap: 250,
  crash: 700,
};

function playSound(soundName) {
  const frequency = soundFrequencies[soundName];

  if (!frequency) {
    return;
  }

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.frequency.value = frequency;
  oscillator.type = "sine";

  gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.2,
  );

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.2);
}
