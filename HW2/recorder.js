const beatQueue = [];

function recordBeat(soundName) {
  beatQueue.push({
    sound: soundName,
    timestamp: performance.now(),
  });
}

function getRecordedBeats() {
  return [...beatQueue];
}
