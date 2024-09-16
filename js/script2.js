const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const yesSong = new Audio('musica/spotifydown.com - Over the Rainbow_[cut_10sec].mp3');
const noSong = new Audio('musica/spotifydown.com - Over the Rainbow_[cut_10sec].mp3');

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aqui vienen! ";
  gif.src =
    "https://media.giphy.com/media/QORL3lH6yuk8fzKWcc/giphy.gif";

    noSong.pause();
    yesSong.currentTime = 0; // Reiniciar la canción
    yesSong.play();

    setTimeout(function() {
      window.location.href = "girasoles.html"; // Cambia esto por la URL de la segunda página
  }, 10000); // 10000 milisegundos = 10 segundos
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Aqui vienen! ";
  gif.src =
    "https://media.giphy.com/media/QORL3lH6yuk8fzKWcc/giphy.gif";

    noSong.play();
    yesSong.currentTime = 0; // Reiniciar la canción
    yesSong.pause();

    setTimeout(function() {
      window.location.href = "flores.html"; // Cambia esto por la URL de la segunda página
  }, 10000); // 10000 milisegundos = 10 segundos
});





