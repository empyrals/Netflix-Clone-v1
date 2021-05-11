const API_KEY = "809c0b7bffeb088ae24e6759284b6e89";

const requests = {
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAdventureMovies: `discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchDocumentaryMovies: `discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAnimationMovies: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchCrimeMovies: `discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchFantasyMovies: `discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDramaMovies: `discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFamilyMovies: `discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchHistoryMovies: `discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchSciFiMovies: `discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchThrillerMovies: `discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchWarMovies: `discover/movie?api_key=${API_KEY}&with_genres=10752`,
};

export default requests;
