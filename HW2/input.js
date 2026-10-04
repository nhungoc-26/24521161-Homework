const keyBindings = {
  a: "kick",
  s: "snare",
  d: "hihat",
  f: "tom",
  j: "clap",
  k: "crash",
};

document.addEventListener("keydown", (event) => {
  if (event.repeat) {
    return;
  }

  const key = event.key.toLowerCase();
  const soundName = keyBindings[key];

  if (!soundName) {
    return;
  }

  playSound(soundName);
  recordBeat(soundName);
});
