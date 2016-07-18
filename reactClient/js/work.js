
var Searchbox=React.createClass({
 render:function(){
   return(
     <div id="searchbox">
     <form className="" onSubmit={this.loadMovieData}>
     <input type="text" id="search" placeholder="Search Your movie" />
       <Buttonbox />
       </form>
     </div>
   );
 }
});

var Buttonbox=React.createClass({
 render:function(){
   return(
     <input type="submit" value="submit" id="button" />
   );
 }
});

var Result=React.createClass({
 render:function(){
   var resultItems=this.props.searchResults.map(function(result){
     return <ResultItems key={result.trackId} trackName={result.trackName} />});

   return(
     <ul>{resultItems}</ul>
   );
 }
});

var ResultItems=React.createClass({
 render:function(){
   return(
     <li>{this.props.trackName}</li>
   );
 }
});

var MovieApp=React.createClass({
getInitialState:function(){
 return{
   searchResults:[]
 };
},
showResults:function(response){
 this.setState({
   searchResults:response.results
 })
 console.log(response)
},

search:function(url){
 console.log(url);
 $.ajax({
   type:"GET",
   dataType:'jsonp',
   url:url,
   success: function(response){
     this.showResults(response);
   }.bind(this)
 });
},
componentDidMount(){
  this.search('https://itunes.apple.com/search?term=fun');
},
 render:function(){
 return(  <div>
   <Searchbox />
   <Result searchResults={this.state.searchResults} />
   </div>
 );
 }
});
ReactDOM.render(
 <MovieApp/>,
 document.getElementById('content')
);
