$(document).ready(() => {
    $('#searchF').on('submit', (e) => {
        let searchT = ($('#searchT').val());
        getM(searchT);
        e.preventDefault();
    });
});

function getM(searchT){
    axios.get('http://www.omdbapi.com/?s='+searchT+'&apikey=thewdb')
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <p>\n</p>
                        <p>\n</p>
                        <img src="${movie.Poster}">
                        <p>\n</p>
                        <h5>${movie.Title}</h5>
                        <a onclick="movieSelected('${movie.imdbId}')" class="btn btn-primary" href="#">See more</a>
                    </div>
                </div>
                `;
            });

            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

/*
function movieSelected(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

function getM(){
    let movieId = sessionStorage.getItem('movieId');


    axios.get('http://www.omdbapi.com?i='+movieId+'&apikey=thewdb')
        .then((response) => {
            console.log(response);
            let movie = response.data;

            let output = `
                <div class="row">
                    <div class="col-md-4">
                        <img src="${movie.Poster}" class="thumbnail">
                    </div>
                    <div class="col-md-8">
                        <h2>${movie.Title}</h2>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Genre: </strong>${movie.Genre}</li>
                            <li class="list-group-item"><strong>Released: </strong>${movie.Released}</li>
                            <li class="list-group-item"><strong>Rated: </strong>${movie.Rated}</li>
                            <li class="list-group-item"><strong>Rating: </strong>${movie.imdbRating}</li>
                            <li class="list-group-item"><strong>Director: </strong>${movie.Director}</li>
                            <li class="list-group-item"><strong>Writer: </strong>${movie.Writer}</li>
                            <li class="list-group-item"><strong>Actors: </strong>${movie.Actors}</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="well">
                        <h3>Plot</h3>
                        ${movie.Plot}
                        <hr>
                        <a href="http://imdb.com/title/${movie.imdbId}" target="_blank" class="btn btn-primary">VIEW</a>
                        <a href="Index.html" class="btn btn-default">BACK</a>
                    </div>
                </div>
            `;

            $('#movie').html(output);
        })
        .catch((err) => {
            console.log(err);
        })
}*/