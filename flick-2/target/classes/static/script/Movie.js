

function getMovie(){
    let movieId = sessionStorage.getItem('movieId');
    // Make a request for a user with a given ID
    axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=499cd4aa22248d52c0c377d65ef20860")
      .then(function (response) {
      let movie = response.data;
      //console.log(movie);
      let output = `
          <div class="row">
            <div class="col-md-4">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="thumbnail">
            </div>
            <div class="col-md-8">
              <h2>${movie.title}</h2>
              <ul class="list-group">
                <li class="list-group-item"><strong>Genre:</strong> ${movie.genres[0].name}, ${movie.genres[1].name}</li>
                <li class="list-group-item"><strong>Released:</strong> ${movie.release_date}</li>
                <li class="list-group-item"><strong>Rated:</strong> ${movie.vote_average}</li>
                <li class="list-group-item"><strong>Runtime:</strong> ${movie.runtime} min.</li>
                <li class="list-group-item"><strong>Production Companies:</strong> ${movie.production_companies[0].name} min.</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="well">
              <h3>Plot</h3>
              ${movie.overview}
              <hr>
              <a href="http://imdb.com/title/${movie.imdb_id}" target="_blank" class="btn btn-primary">View IMDB</a>
              <a href="Movies.html" class="btn btn-default">Go Back To Search</a>
            </div>
          </div>
      `;
      $('#movie').html(output);
      })
      .catch(function (error) {
        console.log(error);
      });
  }