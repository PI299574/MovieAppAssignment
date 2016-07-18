(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ResultItems=React.createClass({displayName: "ResultItems",


  saveFormData: function(e) {
   //var buttonValue=ReactDOM.findDOMNode(this.refs.btn).value;
  //alert(buttonValue);
    e.preventDefault();
    //alert("Azax")
    var url='/movies/insert';
    var data={
        Title:this.props.Title,
        Year:this.props.Year,
        Rated:this.props.Rated,
        Released:this.props.Released,
        Genre:this.props.Genre,
        Runtime:this.props.Runtime,
        Director:this.props.Director,
        Writer:this.props.Writer,
        Actors:this.props.Actors,
        Plot:this.props.Plot,
        Language:this.props.Language,
        Country:this.props.Country,
        Awards:this.props.Awards,
        Metascore:this.props.Metascore,
        imdbRating:this.props.imdbRating,
        imdbVotes:this.props.imdbVotes,
        Type:this.props.Type,
        Response:this.props.Response,
        imdbID:this.props.imdbID,
        Images:this.props.Poster
}
    alert(data.Title);
      $.ajax({
          type:"POST",
           dataType:'json',
           url:url,
           data:data
         }).done(function(data) {
    console.log("success");
  })
  .fail(function(jqXhr) {
    console.log('failed to register');
  });
  },

  render:function(){
    //console.log("L3 Poster"+this.props.Poster);
    //console.log("L3 Title" +this.props.Title);
return(
//{this.props.searchResults.response.Director}
React.createElement("div", {className: "row"}, 

React.createElement("form", {className: "", id: "", action: "", onSubmit: this.saveFormData}, 
React.createElement("div", {className: "col-md-4"}, 
React.createElement("img", {src: this.props.Poster, alt: "No Poster available", width: "98%", height: "400px"})
), 
React.createElement("div", {className: "col-md-8"}, 
React.createElement("h3", null, this.props.Title), React.createElement("br", null), 
"Year:", this.props.Year, React.createElement("br", null), 
"Actors:", this.props.Actors, React.createElement("br", null), 
"Director:", this.props.Director, React.createElement("br", null), 
"Writer:", this.props.Writer, React.createElement("br", null), 
"Plot:", this.props.Plot, React.createElement("br", null), 
"Rated:", this.props.Rated, React.createElement("br", null), 
"Released:", this.props.Released, React.createElement("br", null), 
"Genre:", this.props.Genre, React.createElement("br", null), 
"RunTime:", this.props.Runtime, React.createElement("br", null), 
"Raiting:", this.props.imdbRating, React.createElement("br", null), 
"ImdbId:", this.props.imdbID, React.createElement("br", null), 
"Type:", this.props.Type, React.createElement("br", null), 
this.props.Language, 
this.props.Country, 
this.props.Awards, 
this.props.Metascore, 
this.props.imdbVotes, 
this.props.Response, 
React.createElement("br", null), 
  React.createElement("input", {type: "submit", ref: "", value: "Add To Database"}), " "
)
)
)
);
}
});

var Result=React.createClass({displayName: "Result",
  render:function(){
//console.log("L12 type is " + typeof this.props.searchResults);
console.log("L13 string is " + JSON.stringify(this.props.searchResults));

    var resultItems=this.props.searchResults.map(function(result,i){
    //var resultItems=this.props.searchResults.map(function(response,i){
//console.log("L16 " + response.imdbID + " "+ response.Director );
    return React.createElement(ResultItems, {key: i, Title: result.Title, 
    Year: result.Year, Rated: result.Rated, Released: result.Released, Runtime: result.Runtime, 
    Genre: result.Genre, Director: result.Director, Writer: result.Writer, Actors: result.Actors, 
    Plot: result.Plot, Language: result.Language, Country: result.Country, Awards: result.Awards, 
    Poster: result.Poster, Metascore: result.Metascore, imdbRating: result.imdbRating, 
     imdbVotes: result.imdbVotes, Type: result.Type, Response: result.Response, imdbID: result.imdbID}
)
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
return(React.createElement("div", null, resultItems));
  }
});



var MovieApp=React.createClass({displayName: "MovieApp",
getInitialState:function(){
  return{
    searchResults:[]
  };
},
showResults:function(response){
  console.log("L117" +response);
  console.log("L93" +JSON.stringify(response.Search));
  //console.log("L93" +JSON.stringify(response));
  this.setState({
    searchResults:response.Search
    //searchResults:[response]
  });
},

search:function(url){
  alert("search method")
$.ajax({
    type:"GET",
    dataType:'json',
    url:url,
     success: function(response){
                this.showResults(response);
              }.bind(this),
    failure:function(err){
      console.error("L134"+err);

    }
   });
//console.log("L133"+ response);
},

  render:function(){
  return(  React.createElement("div", null, 
    React.createElement(Searchbox, {search: this.search}), 
    React.createElement(Result, {searchResults: this.state.searchResults})
    )
  );
  }
});


var Searchbox=React.createClass({displayName: "Searchbox",

  createAjax:function(e){
    //alert("ajax calling");
    e.preventDefault();
    //console.log(this);
    var query=ReactDOM.findDOMNode(this.refs.query).value;
    //var query="sultan";
    var year=ReactDOM.findDOMNode(this.refs.year).value;
    //var year="2016";
   var category = ReactDOM.findDOMNode(this.refs.category).value;
  // var Btn_value = ReactDOM.findDOMNode(this.refs.but_value).value;

   //alert(Btn_value);
  //  var category="full";
  var url='http://www.omdbapi.com/?s='+query+'&y='+year+'&plot='+category+'&r=json';

//var url='http://www.omdbapi.com/?t='+query+'&y='+year+'&plot='+category+'&r=json';
//var url='https://itunes.apple.com/search?term=fun';
//var _id="577638518cfb07f5513bd045";
//var url='/movies/findbyId/_id/577638518cfb07f5513bd045';
console.log("L138" +url)
    this.props.search(url)

  },

  render:function(){

    return(
      React.createElement("div", {id: "searchbox"}, 
      React.createElement("form", {className: "", onSubmit: this.createAjax}, 
      React.createElement("input", {type: "text", ref: "query", placeholder: "Search Your movie"}), 
      React.createElement("input", {type: "text", ref: "year", placeholder: "Year"}), 
      React.createElement("select", {ref: "category"}, 
                    React.createElement("option", {value: "short"}, "short"), 
                    React.createElement("option", {value: "full"}, "full")
                ), 
        React.createElement("input", {type: "submit", value: "submit"})


        )
      )
    );
  }

});


ReactDOM.render(
  React.createElement(MovieApp, null),
  document.getElementById('content')
);
},{}]},{},[1]);
