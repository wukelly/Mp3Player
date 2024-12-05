// import model, data

class DisplayService {

  function displayAlbums() {
    // this function will fetch all albums and format them for display
     DataAccessHelper.getAlbums(); // fetch album data
     renderAlbumsPage(); // render page
  }

  function displayAlbumSongs(albumId: string) {
    // this function will fetch all songs for an album and format them for display
     DataAccessHelper.getSongs(albumId); // fetch album song data
     renderAlbumSongsPage(); // render page
  }

}