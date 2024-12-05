// import model

// this class provides basic functions to fetch data form the database and transform them into our model types
// since multiple services will access the database we can keep our database get/put functions here to reduce code redundancy
class DataAccessHelper {
  function getAlbums(): Album[] {
      // fetch albums from database
  }

  function getSongs(album: Album): Song[] {
      // fetch list of songs for album from database
  }

  function getSong(songId: string): Song {
      // fetch song details for song from database
  }

  function executeQuery(query: string, database: String): Song {
      // form query and submit to database
  }
}