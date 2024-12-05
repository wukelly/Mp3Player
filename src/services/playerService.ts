// import model, data

class PlayerService {
  //////// Class members
  public songList[]: [Song];
  public currentSongIndex: number; // track index of current song within list.
                                   // This is needed because we want to remember pervious songs
  public repeat: boolean; // repeat song flag


  //////// Functions
  //// Song list controls
  function addSong(song:Song) {
    // adds song to list of songs to play
    songList.push(song);
  }

  function addSongs(songsToAdd: [Song]) {
    // adds song list to songList
    songsToAdd.forEach(function (song) { this.addSong(song)}; );
  }

  //// Player controls
  function play() {
    // starts playing the current song, identified by currentSongIndex
  }

  function pause() {
    // pauses playing the song
  }

  function stop() {
    // stops playing the song and clears the song list
  }

  function next() {
    // play next song in songList
    // example implementation: increment currentSongIndex and call play()
    // function needs to check if there is a next song
    // function needs to check repeat flag - if repeat is true, do not increment song
  }

  function previous() {
    // play previous song in songList
    // example implementation: decrement currentSongIndex and call play()
    // function needs to check if there is a previous song
  }

  function shuffle() {
    // shuffles songs in songlist that come after the currentSongIndex
  }

  function setRepeat(state: boolean) {
    // sets repeat to provided state
    this.repeat = state;
  }
}