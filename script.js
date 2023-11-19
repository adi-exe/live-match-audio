window.onload = function() {
  var audio = document.getElementById('myAudio');
  var playButton = document.getElementById('playButton');

  playButton.addEventListener('click', function() {
    audio.play();
  });
};
