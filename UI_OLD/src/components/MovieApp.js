var React = require('react');
var Navbar = require('./Navbar');
var Searchbox = require('Searchbox');
var Result = require('Result');






var MovieApp=React.createClass({
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
  return(  <div>
    <Searchbox search={this.search}/>
    <Result searchResults={this.state.searchResults} />
    </div>
  );
  }
});

module.exports = MovieApp ;
