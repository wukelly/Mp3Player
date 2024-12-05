// import model, data

class SearchService {

  function searchAlbums(query: string){
    // given user query search database, search Albums table
    DataAccessHelper.executeQuery(query, Table.Albums);
  }


  function searchArtists(query: string){
    // given user query search database, search Albums table
    DataAccessHelper.executeQuery(query, Table.Albums);
  }

  function searchSongs(query: string){
    // given user query search database, search Songs table
    DataAccessHelper.executeQuery(query, Table.Songs);
  }

}