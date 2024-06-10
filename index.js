function initializeAudioPlayer(audioId, playPauseBtnId, progressBarId) {
    const audio = document.getElementById(audioId);
    const playPauseBtn = document.getElementById(playPauseBtnId);
    const progressBar = document.getElementById(progressBarId);
  
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.classList.remove('fa-play');
            playPauseBtn.classList.add('fa-pause');
        } else {
            audio.pause();
            playPauseBtn.classList.remove('fa-pause');
            playPauseBtn.classList.add('fa-play');
        }
    });
  
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    });
  
    audio.addEventListener('ended', () => {
        playPauseBtn.classList.remove('fa-pause');
        playPauseBtn.classList.add('fa-play');
        progressBar.value = 0;
    });
  
    progressBar.addEventListener('input', () => {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });
  }
  
  // Initialize all audio players
  initializeAudioPlayer('audio1', 'playPauseBtn1', 'progressBar');
  initializeAudioPlayer('audio2', 'playPauseBtn2', 'progressBar');
  initializeAudioPlayer('audio3', 'playPauseBtn3', 'progressBar');
  initializeAudioPlayer('audio4', 'playPauseBtn4', 'progressBar');
  initializeAudioPlayer('audio5', 'playPauseBtn5', 'progressBar');
  initializeAudioPlayer('audio6', 'playPauseBtn6', 'progressBar');
  initializeAudioPlayer('audio7', 'playPauseBtn7', 'progressBar');
  initializeAudioPlayer('audio8', 'playPauseBtn8', 'progressBar');
  initializeAudioPlayer('audio9', 'playPauseBtn9', 'progressBar');
  initializeAudioPlayer('audio10', 'playPauseBtn10', 'progressBar');
  initializeAudioPlayer('audio11', 'playPauseBtn11', 'progressBar');
  initializeAudioPlayer('audio12', 'playPauseBtn12', 'progressBar');
  