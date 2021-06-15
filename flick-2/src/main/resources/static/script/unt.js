

function getSeries(){
  let seriesId = sessionStorage.getItem('seriesId');;
  // Make a request for a user with a given ID
  axios.get("https://api.themoviedb.org/3/tv/" + seriesId + "?api_key=499cd4aa22248d52c0c377d65ef20860")
    .then(function (response) {
    let tv = response.data;
    //console.log(movie);
    let output = `
        <div class="row">
          <div class="col-md-4">
            <img src="https://image.tmdb.org/t/p/w500${tv.poster_path}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${tv.name}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${tv.genres[0].name}, ${tv.genres[1].name}</li>
              <li class="list-group-item"><strong>first air date:</strong> ${tv.first_air_date}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${tv.vote_average}</li>
              <li class="list-group-item"><strong>Production Companies:</strong> ${tv.production_companies[0].name} min.</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${tv.overview}
            <hr>
            <a href="Tv.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
    `;
    $('#movie').html(output);
    })
    .catch(function (error) {
      console.log(error);
    });
}