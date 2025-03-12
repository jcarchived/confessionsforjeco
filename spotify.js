const playlistBody = document.getElementById('playlist-body');

const songs = [
    { title: "Backburner", artist: "NIKI", link: "https://open.spotify.com/track/7gqdZpe7MlTLA59viClLoY?si=e31f00aa25c34a72" },
    { title: "Buzz", artist: "NIKI", link: "https://open.spotify.com/track/4fLspOxX39tXzHHqrEqTgf?si=6b7ab1c798174039" },
    { title: "Every Summertime", artist: "NIKI", link: "https://open.spotify.com/track/68HocO7fx9z0MgDU0ZPHro?si=eb7c8aa7be2148ec" },
    { title: "La La Lost You", artist: "NIKI", link: "https://open.spotify.com/track/0e2wfbDK7ppotqyUWD7qs8?si=7d11a865235f4a8f" },
    { title: "High School in Jakarta", artist: "NIKI", link: "https://open.spotify.com/track/6KFiSRcOc0Dr3BNyeRQP6e?si=6c34e3f7574a4320" },
    { title: "Umaasa", artist: "Calein", link: "https://open.spotify.com/track/4AULw1VRyJP17zMvwgTIUs?si=d17f29d0c556462b" },
    { title: "Ligaya", artist: "mrld", link: "https://open.spotify.com/track/4IeuTj1pEHuL9vJSiEqEfR?si=aab4f2ff4aa54eb8" },
    { title: "Chinito", artist: "Yeng Constantino", link: "https://open.spotify.com/track/4CTvgk6a73UAF6s0ycx4CW?si=4b1c918a5a164640" },
    { title: "everytime", artist: "Ariana Grande", link: "https://open.spotify.com/track/0WdR2AyLW1Drd3OUdwezM0?si=cb46f703982b483b" },
    { title: "the cutest pair", artist: "Regina Song", link: "https://open.spotify.com/track/0VVD95cRAppHSOGPYrfIG2?si=29965b9e69754282" },
    { title: "Keeping Tabs", artist: "NIKI", link: "https://open.spotify.com/track/5nyVWaY7wfKMQh9l75iQ5r?si=4d4c77a17196425d" }
];

// Function to display songs
function loadSongs() {
    songs.forEach((song, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${song.title}</td>
            <td>${song.artist}</td>
            <td><button class="play-btn" onclick="playSong('${song.link}')">▶</button></td>
        `;
        playlistBody.appendChild(row);
    });
}

// Function to open Spotify link
function playSong(url) {
    window.open(url, "_blank");
}

// Load songs on page load
document.addEventListener('DOMContentLoaded', loadSongs);