const playlists = {
    tamil: [
        { id: 't1', title: 'singari | DUDE', artist: 'sai abhyankkar', src:'music/Singari.mp3', art: 'url("images/dude.png")' },
        { id: 't2', title: 'Oorum Blood | DUDE', artist: 'sai abhyankkar', src: 'music/Oorum Blood.mp3', art: 'url("images/dude.png")' },
        { id: 't3', title: 'God Mode | KARUPU ', artist: 'sai abhyankkar,Gana Muthu', src: 'music/God-Mode-MassTamilan.dev.mp3', art: 'url("images/karupu.png")' },
        { id: 't4', title: 'Karuppa Kooda va', artist: 'sai abhyankkar,V.M. Mahalingam', src: 'music/Karuppa-Kooda-Va-MassTamilan.dev.mp3', art: 'url("images/karupu.png")' },
        { id: 't5', title: 'Oru pere varalaaru', artist: 'anirudh ravichander', src: 'music/Oru-Pere-Varalaaru-MassTamilan.dev.mp3', art: 'url("images/jananayagan.png")' },
        { id: 't6', title: 'Raavana Mavandaa', artist: 'anirudh ravichander', src: 'music/Raavana-Mavandaa-MassTamilan.dev.mp3', art: 'url("images/jananayagan.png")' }
    ],
    english: [
        { id: 'e1', title: 'mysteries-of-devine', artist: 'suryanatta', src: 'music/suryanatta-mysteries-of-devine-405185.mp3', art: 'url("images/english.png")' },
        { id: 'e2', title: 'sun-beneath-a-song', artist: 'suryanatta', src: 'music/suryanatta-sun-beneath-a-song-410790.mp3', art: 'url("images/english.png")' },
        { id: 'e3', title: 'bulletproof', artist: 'henry', src: 'music/iul4an-bulletproof-518958 (1).mp3', art: 'url("images/english.png")' },
        { id: 'e4', title: 'the-arrow-of-time', artist: 'charlie', src: 'music/suryanatta-the-arrow-of-time-484690.mp3', art: 'url("images/english.png")' }
    ],
    melody: [
        { id: 'm1', title: 'Yamma Yamma ', artist: 'S.P.B', src: 'music/Yamma-Yamma.mp3', art: 'url("images/melody.png")' },
        { id: 'm2', title: 'kulikkum pothile', artist: 'Ilaiyaraaja', src: 'music/Kulikkum Pothile.mp3', art: 'url("images/melody.png")' },
        { id: 'm3', title: 'Kalloori Manavaraa', artist: 'Ilaiyaraaja', src: 'music/Kalloori Manavaraa.mp3', art: 'url("images/melody.png")' },
        { id: 'm4', title: 'Nenje Nenje', artist: 'Harris Jayaraj', src: 'music/Nenje Nenje.mp3', art: 'url("images/melody.png")' },
        { id: 'm5', title: 'Innum-Enna-Thozha', artist: 'Harris Jayaraj', src: 'music/Innum-Enna-Thozha.mp3', art: 'url("images/melody.png")' }
    ],
    hindi: [
        { id: 'h1', title: 'Dil Waale Chor', artist: 'Lata mangeshkar', src: 'music/Dil Waale Chor Pati Patni Aur Woh Do 128 Kbps.mp3', art: 'url("images/hindi.png")' },
        { id: 'h2', title: 'Roop Di Rani', artist: 'Sonu nigam', src: 'music/Roop Di Rani Pati Patni Aur Woh Do 128 Kbps.mp3', art: 'url("images/hindi.png")' },
        { id: 'h3', title: 'Sadak 2', artist: 'Emiway', src: 'music/Sadak 2 Emiway Bantai 128 Kbps.mp3', art: 'url("images/hindi.png")' }
    ],
    album: [
        { id: 'a1', title: 'Chellame-Chellam', artist: 'Sunitha sarathy', src: 'music/Chellame-Chellam-MassTamilan.com.mp3', art: 'url("images/album.png")' },
        { id: 'a2', title: 'Kadhal Venile', artist: 'Balram ', src: 'music/Kadhal-Vanile-MassTamilan.com.mp3', art: 'url("images/album.png")' },
        { id: 'a3', title: 'Muttaikkul', artist: 'Ken karunas', src: 'music/Muttaikkul-MassTamilan.com.mp3', art: 'url("images/album.png")' }
    ]
};

let customPlaylists = {};
let playHistory = [];
let favorites = []; 
let currentPlaylist = [];
let currentIndex = 0;
let isPlaying = false;
let activePlaylistType = ""; 
let totalSecondsListened = 0;
let songsPlayedCount = 0;

const audio = new Audio();

const homeView = document.getElementById('home-view');
const songListView = document.getElementById('song-list-view');
const playerView = document.getElementById('player-view');
const historyView = document.getElementById('history-view');
const miniPlayer = document.getElementById('mini-player'); 
const playIcon = document.getElementById('play-icon');
const miniPlayIcon = document.getElementById('mini-play-icon'); 
const progressFill = document.getElementById('progress-fill');
const miniProgressFill = document.getElementById('mini-progress-fill'); 
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const likeBtn = document.getElementById('like-btn');
const favCountEl = document.getElementById('fav-count');
const albumArtEl = document.getElementById('album-art');

const bgGradients = [
    'linear-gradient(180deg, #5c72a6 0%, #1a1625 100%)',
    'linear-gradient(180deg, #8a2387 0%, #1a1625 100%)',
    'linear-gradient(180deg, #1d976c 0%, #1a1625 100%)',
    'linear-gradient(180deg, #b92b27 0%, #1a1625 100%)',
    'linear-gradient(180deg, #e65c00 0%, #1a1625 100%)',
    'linear-gradient(180deg, #2193b0 0%, #1a1625 100%)',
    'linear-gradient(180deg, #cc2b5e 0%, #1a1625 100%)',
    'linear-gradient(180deg, #4b6cb7 0%, #1a1625 100%)',
    'linear-gradient(180deg, #f2709c 0%, #1a1625 100%)',
    'linear-gradient(180deg, #000000 0%, #1a1625 100%)'
];

function getBgForSong(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return bgGradients[Math.abs(hash) % bgGradients.length];
}

// --- NEW DARK MODE TOGGLE LOGIC ---
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.querySelector('#theme-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}
// ----------------------------------

const searchInput = document.getElementById('search-input');
const searchDropdown = document.getElementById('search-dropdown');
searchInput.addEventListener('input', updateSearchDropdown);
searchInput.addEventListener('focus', updateSearchDropdown);

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.style.display = 'none';
    }
    const pMenu = document.getElementById('player-menu');
    const pDots = document.getElementById('player-dots-icon');
    if (pMenu && !pMenu.contains(e.target) && e.target !== pDots) {
        pMenu.style.display = 'none';
    }
    const profMenu = document.getElementById('profile-menu');
    const profAvatar = document.getElementById('profile-avatar');
    if (profMenu && !profMenu.contains(e.target) && e.target !== profAvatar) {
        profMenu.style.display = 'none';
    }
});

function updateSearchDropdown() {
    const query = searchInput.value.toLowerCase().trim();
    if (query === "") { searchDropdown.style.display = 'none'; return; }
    
    let allSongs = [];
    for (let key in playlists) { allSongs = allSongs.concat(playlists[key]); }
    
    const filtered = allSongs.filter(song => song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query));
    searchDropdown.innerHTML = ''; 
    
    if (filtered.length === 0) {
        searchDropdown.innerHTML = `<div style="padding: 15px 20px; color: #888; text-align: center; font-size: 14px;">No results found</div>`;
    } else {
        filtered.forEach((song, index) => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.onclick = () => {
                loadAndPlay(filtered, index); 
                searchDropdown.style.display = 'none';
                searchInput.value = ''; 
                searchInput.blur(); 
            };
            
            div.innerHTML = `
                <i class="fas fa-search search-result-icon"></i>
                <div style='width: 35px; height: 35px; border-radius: 8px; background-image: ${song.art ? song.art : 'none'}; background-color: #333; background-size: cover; background-position: center; flex-shrink: 0; margin-right: 12px;'></div>
                <div class="search-result-text">
                    <h5>${song.title}</h5>
                    <p>${song.artist}</p>
                </div>
            `;
            searchDropdown.appendChild(div);
        });
    }
    searchDropdown.style.display = 'flex';
}

function openPlaylist(type) {
    activePlaylistType = type;
    let list = [];
    let titleText = "";
    if (type === 'favorites') { list = favorites; titleText = "Favorites"; } 
    else if (playlists[type]) { list = playlists[type]; titleText = type.charAt(0).toUpperCase() + type.slice(1) + " Songs"; } 
    else { list = customPlaylists[type] || []; titleText = type; }
    
    document.getElementById('playlist-title').innerText = titleText;
    const container = document.getElementById('song-list-container');
    container.innerHTML = '';
    
    if(list.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#888; margin-top:40px; font-size: 16px;">No songs here yet!</p>`;
    } else {
        list.forEach((song, index) => {
            const isFav = favorites.some(s => s.id === song.id);
            const div = document.createElement('div');
            div.className = 'song-item';
            div.onclick = () => loadAndPlay(list, index); 
            
            div.innerHTML = `
                <div style='width: 50px; height: 50px; border-radius: 12px; background-image: ${song.art ? song.art : 'none'}; background-color: #333; background-size: cover; background-position: center; flex-shrink: 0;'></div>
                <div class="details"><h4>${song.title}</h4><p>${song.artist}</p></div>
                <div class="song-actions">
                    <button class="list-heart-btn" onclick="event.stopPropagation(); toggleFavFromList('${song.id}', '${type}')">
                        <i class="${isFav ? 'fas' : 'far'} fa-heart" style="color: ${isFav ? '#ff4757' : '#b2bec3'};"></i>
                    </button>
                    <i class="fas fa-play list-play-btn"></i>
                </div>`;
            container.appendChild(div);
        });
    }
    songListView.style.display = 'block';
}

function closePlaylist() { songListView.style.display = 'none'; }
function openPlayer() { playerView.style.display = 'block'; }
function closePlayer() { playerView.style.display = 'none'; }

function toggleHistory() { 
    closeSettings();
    closePrivacy();
    closeAccount();
    historyView.style.display = historyView.style.display === 'block' ? 'none' : 'block'; 
}

function toggleProfileMenu() {
    const menu = document.getElementById('profile-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
function openSettings() {
    document.getElementById('profile-menu').style.display = 'none';
    document.getElementById('settings-view').style.display = 'block';
    historyView.style.display = 'none';
}
function closeSettings() { document.getElementById('settings-view').style.display = 'none'; }

function openPrivacy() {
    document.getElementById('profile-menu').style.display = 'none';
    document.getElementById('privacy-view').style.display = 'block';
    historyView.style.display = 'none';
}
function closePrivacy() { document.getElementById('privacy-view').style.display = 'none'; }

function openAccount() {
    document.getElementById('profile-menu').style.display = 'none';
    document.getElementById('account-view').style.display = 'block';
    historyView.style.display = 'none';
}
function closeAccount() { document.getElementById('account-view').style.display = 'none'; }

function saveAccountDetails() {
    const newName = document.getElementById('user-name-input').value.trim();
    if(newName) {
        document.getElementById('display-user-name').innerText = newName;
        document.getElementById('greeting-text').innerText = "Hello,";
        document.getElementById('profile-avatar').innerText = newName.substring(0, 2).toUpperCase();
        alert("Account details updated successfully!");
        closeAccount();
    } else {
        alert("Please enter a valid name.");
    }
}

function loadAndPlay(list, index) {
    currentPlaylist = list;
    currentIndex = index;
    const song = currentPlaylist[currentIndex];
    
    document.getElementById('player-title').innerText = song.title;
    document.getElementById('player-artist').innerText = song.artist;
    albumArtEl.style.backgroundImage = song.art;
    updateHeartIcon(song);
    
    document.getElementById('mini-title').innerText = song.title;
    document.getElementById('mini-artist').innerText = song.artist;
    document.getElementById('mini-art').style.backgroundImage = song.art;
    miniPlayer.style.display = 'flex'; 

    playerView.style.background = getBgForSong(song.title);

    audio.src = song.src;
    audio.play().catch(e => console.error("Error playing audio:", e));
    isPlaying = true;
    updatePlayIcon();
    
    albumArtEl.classList.add('playing');
    playerView.style.display = 'block'; 
    
    addToHistory(song);
    songsPlayedCount++;
    document.getElementById('songs-played').innerText = songsPlayedCount;
}

function togglePlay() {
    if(!audio.src) return;
    if(isPlaying) { audio.pause(); albumArtEl.classList.remove('playing'); } 
    else { audio.play(); albumArtEl.classList.add('playing'); }
    isPlaying = !isPlaying;
    updatePlayIcon();
}

function updatePlayIcon() {
    playIcon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    miniPlayIcon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
}

function nextSong() {
    if(currentPlaylist.length === 0) return;
    currentIndex = (currentIndex + 1) % currentPlaylist.length;
    loadAndPlay(currentPlaylist, currentIndex);
}

function prevSong() {
    if(currentPlaylist.length === 0) return;
    currentIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
    loadAndPlay(currentPlaylist, currentIndex);
}

function toggleLike() { if (currentPlaylist.length) handleFavoriteToggle(currentPlaylist[currentIndex]); }

function toggleFavFromList(songId, playlistType) {
    let songObj = null;
    if(playlistType === 'favorites') { songObj = favorites.find(s => s.id === songId); } 
    else if (playlists[playlistType]) { songObj = playlists[playlistType].find(s => s.id === songId); }
    if(songObj) { handleFavoriteToggle(songObj); openPlaylist(activePlaylistType); }
}

function handleFavoriteToggle(song) {
    const favIndex = favorites.findIndex(s => s.id === song.id);
    if (favIndex > -1) favorites.splice(favIndex, 1); else favorites.push(song);
    if(currentPlaylist.length && currentPlaylist[currentIndex].id === song.id) updateHeartIcon(song);
    favCountEl.innerText = `${favorites.length} Songs`;
}

function updateHeartIcon(song) {
    const isFav = favorites.some(s => s.id === song.id);
    likeBtn.className = isFav ? 'fas fa-heart heart-icon' : 'far fa-heart heart-icon';
}

audio.addEventListener('timeupdate', () => {
    if(!isNaN(audio.duration)) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = `${percent}%`;
        miniProgressFill.style.width = `${percent}%`; 
        currentTimeEl.innerText = formatTime(audio.currentTime);
        totalTimeEl.innerText = formatTime(audio.duration);
    }
});

audio.addEventListener('ended', nextSong); 
function seekAudio(e) { audio.currentTime = (e.offsetX / document.getElementById('progress-bar').clientWidth) * audio.duration; }
function seekAudioMini(e) { audio.currentTime = (e.offsetX / document.getElementById('mini-progress-bar').clientWidth) * audio.duration; }
function changeVolume() { audio.volume = document.getElementById('volume-slider').value; }

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function addToHistory(song) {
    playHistory.unshift(song); 
    if(playHistory.length > 20) playHistory.pop(); 
    const container = document.getElementById('history-container');
    container.innerHTML = '';
    playHistory.forEach(s => {
        const div = document.createElement('div');
        div.className = 'song-item';
        div.innerHTML = `<div class="details" style="margin-left: 0;"><h4 style="margin-bottom:0;">${s.title}</h4><p>${s.artist}</p></div>`;
        container.appendChild(div);
    });
}

function createNewPlaylist() {
    const name = prompt("Enter a name for your Echobloom custom playlist:");
    if(name && !customPlaylists[name] && name.toLowerCase() !== 'favorites') {
        customPlaylists[name] = [];
        const container = document.getElementById('custom-playlists-container');
        const div = document.createElement('div');
        div.className = 'playlist-card';
        div.onclick = () => openPlaylist(name);
        div.innerHTML = `<div class="icon" style="background: #2b2d42;"><i class="fas fa-compact-disc"></i></div><h3>${name}</h3><p id="count-${name}">0 Songs</p>`;
        container.appendChild(div);
    }
}

function togglePlayerMenu() {
    const menu = document.getElementById('player-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function shareSong() {
    const song = currentPlaylist[currentIndex];
    alert(`Link for ${song.title} copied to clipboard!`);
    document.getElementById('player-menu').style.display = 'none';
}

function downloadSong() {
    const song = currentPlaylist[currentIndex];
    const a = document.createElement('a');
    a.href = song.src;
    a.download = song.title + '.mp3';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    document.getElementById('player-menu').style.display = 'none';
}

function deleteSong() {
    if(!currentPlaylist.length) return;
    const songIdToDelete = currentPlaylist[currentIndex].id;
    
    for (let key in playlists) { playlists[key] = playlists[key].filter(s => s.id !== songIdToDelete); }
    for (let key in customPlaylists) { customPlaylists[key] = customPlaylists[key].filter(s => s.id !== songIdToDelete); }
    favorites = favorites.filter(s => s.id !== songIdToDelete);

    currentPlaylist.splice(currentIndex, 1);

    if (currentPlaylist.length === 0) {
        audio.pause();
        isPlaying = false;
        closePlayer();
        document.getElementById('mini-player').style.display = 'none';
        if(document.getElementById('song-list-view').style.display === 'block') openPlaylist(activePlaylistType);
    } else {
        if (currentIndex >= currentPlaylist.length) currentIndex = 0;
        loadAndPlay(currentPlaylist, currentIndex);
        if(document.getElementById('song-list-view').style.display === 'block') openPlaylist(activePlaylistType);
    }
    document.getElementById('player-menu').style.display = 'none';
}

function openAddToPlaylistMenu() {
    document.getElementById('player-menu').style.display = 'none';
    const container = document.getElementById('playlist-options');
    container.innerHTML = '';
    
    const customKeys = Object.keys(customPlaylists);
    if(customKeys.length === 0) {
        container.innerHTML = '<p style="font-size: 14px; color: #888; text-align:center; padding: 10px;">Create a Custom Playlist first!</p>';
    } else {
        customKeys.forEach(name => {
            const div = document.createElement('div');
            div.className = 'playlist-option';
            div.innerHTML = `<span>${name}</span> <i class="fas fa-plus-circle" style="color:#ff7e5f;"></i>`;
            div.onclick = () => {
                const song = currentPlaylist[currentIndex];
                if(!customPlaylists[name].find(s => s.id === song.id)) {
                    customPlaylists[name].push(song);
                    alert(`Added to ${name}!`);
                    document.getElementById(`count-${name}`).innerText = `${customPlaylists[name].length} Songs`;
                } else {
                    alert(`Song is already in ${name}`);
                }
                closePlaylistModal();
            };
            container.appendChild(div);
        });
    }
    document.getElementById('add-to-playlist-modal').style.display = 'flex';
}

function closePlaylistModal() {
    document.getElementById('add-to-playlist-modal').style.display = 'none';
}

setInterval(() => { if(isPlaying && !audio.paused) { totalSecondsListened++; document.getElementById('listen-time').innerText = `${Math.floor(totalSecondsListened / 60)}m`; } }, 1000);