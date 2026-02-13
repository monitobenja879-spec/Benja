// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Los sabios dicen", time: 6 },
  { text: "que solo los tontos se apresuran", time: 12 },
  { text: "pero yo no puedo evitar", time: 20 },
  { text: "Enamorarme de ti", time: 25 },
  { text: "¿Deberia quedarme?", time: 34 },
  { text: "¿Seria un pecado?", time: 41 },
  { text: "si no puedo evitar", time: 48 },
  { text: "Enamorarme de ti.", time: 54 },
  { text: "como un rio que fluye", time: 63 },
  { text: "seguramente hacia al mar,", time: 65 },
  { text: "cariño, asi va", time: 69 },
  { text: "algunas cosas estan destinadas a ser.", time: 73 },
  { text: "Toma mi mano,", time: 81 },
  { text: "toma mi vida entera tambien", time: 87 },
  { text: "Porque no puedo evitar", time: 95 },
  { text: "enamorarme de ti.", time: 100 },
  { text: "como un rio fluye", time: 109 },
  { text: "seguramente hacia al mar,", time: 110 },
  { text: "cariño, asi va", time: 116 },
  { text: "algunas cosas estan destinadas a ser.", time: 119 },
  { text: "Toma mi mano,", time: 126 },
  { text: "toma mi vida entera tambien", time: 132 },
  { text: "Porque no puedo evitar", time: 140 },
  { text: "enamorarme de ti.", time: 145 },
  { text: "Porque no puedo evitar", time: 154 },
  { text: "enamoranme de ti.", time: 159 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);