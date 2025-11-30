const audio = document.getElementById("audioPlayer");
const tracks = document.querySelectorAll("#playlist li");
let index = 0;

function loadTrack(i) {
    audio.src = tracks[i].getAttribute("data-src");
    audio.play();
}

tracks.forEach((track, i) => {
    track.addEventListener("click", () => {
        index = i;
        loadTrack(index);
    });
});

audio.addEventListener("ended", () => {
    index = (index + 1) % tracks.length;
    loadTrack(index);
});

// Auto-load first song
if (tracks.length > 0) loadTrack(0);
