// Get a reference to the video element
var video = document.getElementById("column1");

// Set the volume (a value between 0 and 1, where 0 is muted and 1 is full volume)
video.volume = 0.5; // Set the volume to 50%

// You can also adjust the volume dynamically
function setVolume(volumeLevel) {
  video.volume = volumeLevel;
}

// Example of changing the volume to 70%
setVolume(0.1111111111);
