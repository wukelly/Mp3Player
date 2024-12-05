// This file contains functions for UI operations

// load example data
function loadExampleAlbumJson(): any[] {
  data = [
             {
                 "artist": "Taylor Swift",
                 "genre": "Pop",
                 "album": "1989",
                 "songs":
                 [
                     {
                         "name": "Welcome to New York",
                         "duration": "3:32"
                     },
                     {
                         "name": "Blank Space",
                         "duration": "3:51"
                     },
                     {
                         "name": "Style",
                         "duration": "3:51"
                     },
                     {
                         "name": "Out of the Woods",
                         "duration": "3:55"
                     },
                     {
                         "name": "Shake It Off",
                         "duration": "3:39"
                     }
                 ]
             },
             {
                 "artist": "Drake",
                 "genre": "Hip-Hop",
                 "album": "Take Care",
                 "songs":
                 [
                     {
                         "name": "Over My Dead Body",
                         "duration": "4:32"
                     },
                     {
                         "name": "Headlines",
                         "duration": "3:56"
                     },
                     {
                         "name": "Marvins Room",
                         "duration": "5:47"
                     },
                     {
                         "name": "Take Care",
                         "duration": "4:37"
                     },
                     {
                         "name": "The Motto",
                         "duration": "3:02"
                     }
                 ]
             },
             {
                 "artist": "Metallica",
                 "genre": "Metal",
                 "album": "Master of Puppets",
                 "songs":
                 [
                     {
                         "name": "Battery",
                         "duration": "5:12"
                     },
                     {
                         "name": "Master of Puppets",
                         "duration": "8:35"
                     },
                     {
                         "name": "Welcome Home (Sanitarium)",
                         "duration": "6:27"
                     },
                     {
                         "name": "Disposable Heroes",
                         "duration": "8:16"
                     },
                     {
                         "name": "Leper Messiah",
                         "duration": "5:40"
                     }
                 ]
             },
             {
                 "artist": "Adele",
                 "genre": "Soul",
                 "album": "21",
                 "songs":
                 [
                     {
                         "name": "Rolling in the Deep",
                         "duration": "3:48"
                     },
                     {
                         "name": "Someone Like You",
                         "duration": "4:45"
                     },
                     {
                         "name": "Set Fire to the Rain",
                         "duration": "4:02"
                     },
                     {
                         "name": "Turning Tables",
                         "duration": "4:10"
                     },
                     {
                         "name": "Rumour Has It",
                         "duration": "3:43"
                     }
                 ]
             },
             {
                 "artist": "The Beatles",
                 "genre": "Rock",
                 "album": "Abbey Road",
                 "songs":
                 [
                     {
                         "name": "Come Together",
                         "duration": "4:20"
                     },
                     {
                         "name": "Something",
                         "duration": "3:03"
                     },
                     {
                         "name": "Here Comes the Sun",
                         "duration": "3:06"
                     },
                     {
                         "name": "Octopus's Garden",
                         "duration": "2:51"
                     },
                     {
                         "name": "I Want You (She's So Heavy)",
                         "duration": "7:47"
                     }
                 ]
             },
             {
                 "artist": "Daft Punk",
                 "genre": "Electronic",
                 "album": "Random Access Memories",
                 "songs":
                 [
                     {
                         "name": "Get Lucky",
                         "duration": "6:07"
                     },
                     {
                         "name": "Instant Crush",
                         "duration": "5:37"
                     },
                     {
                         "name": "Doin' It Right",
                         "duration": "4:11"
                     },
                     {
                         "name": "Giorgio by Moroder",
                         "duration": "9:04"
                     },
                     {
                         "name": "Lose Yourself to Dance",
                         "duration": "5:53"
                     }
                 ]
             }
         ]
  return data;
}

// display all albums on page
function displayAlbums() {
  const albumHeading = document.createElement("h2");
  albumHeading.textContent = "Albums";
  content.appendChild(albumHeading);

  // Create each album entry
  musicData.forEach( (album) => { content.appendChild(createAlbumContent(album));} );
}

// Creates album element
function createAlbumContent(album): object {
    const albumDiv = document.createElement("div");
    albumDiv.classList.add("album");

    const albumName = document.createElement("h3");
    albumName.textContent = album.album;
    albumDiv.appendChild(albumName);
    const playAlbum = document.createElement("button");
    playAlbum.textContent = "▶ Play all";
    albumDiv.appendChild(playAlbum);
    const albumInfo = document.createElement("p");
    albumInfo.textContent = "Artist: " + album.artist + ", Genre: " + album.genre;
    albumDiv.appendChild(albumInfo);

    album.songs.forEach( (song) => { albumDiv.appendChild(createSongContent(song));} );

    return albumDiv
}

// Creates song element
function createSongContent(song): object {
    const songDiv = document.createElement("div");
    songDiv.classList.add("song");

    const playSongButton = document.createElement("button");
    playSongButton.textContent = "▶";
    playSongButton.addEventListener("click",  () => playSong(song.name, song.duration));
    songDiv.appendChild(playSongButton);

    const songInfo = document.createElement("p");
    songInfo.textContent = song.name
    songDiv.appendChild(songInfo);

    return songDiv
}

// enable play button on songs. Will display name and duration in music player.
function playSong(name: string, duration: string) {
  var currentSongContent = document.getElementById("currentSong");
  currentSongContent.replaceChildren();
  const nameContent = document.createElement("h3");
  nameContent.textContent = "Song Name: " + name;
  currentSongContent.appendChild(nameContent);
  const durationContent = document.createElement("h3");
  durationContent.textContent = "Song Duration: " + duration;
  currentSongContent.appendChild(durationContent);
}

// On window load parse albums data and display albums
declare const musicData = loadExampleAlbumJson();
declare const content = document.getElementById("pageContent");
window.onload = displayAlbums;