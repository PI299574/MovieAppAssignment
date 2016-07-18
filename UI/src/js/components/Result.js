var React = require('react');
var Navbar = require('./Navbar');
var ResultItems = require('./ResultItems');



var Result=React.createClass({
  render:function(){
//console.log("L12 type is " + typeof this.props.searchResults);
console.log("L13 string is " + JSON.stringify(this.props.searchResults));

    var resultItems=this.props.searchResults.map(function(result,i){
    //var resultItems=this.props.searchResults.map(function(response,i){
//console.log("L16 " + response.imdbID + " "+ response.Director );
    return <ResultItems key={i}  Title= {result.Title}
    Year= {result.Year} Rated= {result.Rated} Released= {result.Released} Runtime= {result.Runtime}
    Genre= {result.Genre} Director={result.Director} Writer= {result.Writer} Actors= {result.Actors}
    Plot= {result.Plot} Language= {result.Language} Country={result.Country} Awards= {result.Awards}
    Poster= {result.Poster} Metascore= {result.Metascore} imdbRating= {result.imdbRating}
     imdbVotes= {result.imdbVotes} Type= {result.Type} Response= {result.Response}  imdbID={result.imdbID}
/>
/*
return <ResultItems key={i}  Title= {response.Title}
Year= {response.Year} Rated= {response.Rated} Released= {response.Released} Runtime= {response.Runtime}
Genre= {response.Genre} Director={response.Director} Writer= {response.Writer} Actors= {response.Actors}
Plot= {response.Plot} Language= {response.Language} Country={response.Country} Awards= {response.Awards}
Poster= {response.Poster} Metascore= {response.Metascore} imdbRating= {response.imdbRating}
 imdbVotes= {response.imdbVotes} Type= {response.Type} Response= {response.Response}  imdbID={response.imdbID}
     />
*/
    });

//console.log("L18 "+ {resultItems});
return(<div>{resultItems}</div>);
  }
});


module.exports = Result ;
