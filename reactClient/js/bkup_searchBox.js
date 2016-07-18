var Result=React.createClass({
  render:function(){
    console.log("L3"+this.props.searchResults);


  var resultItems=this.props.searchResults.map(function(result){
    console.log("L5"+result);
    var retString="<ResultItems key={result.imdbID} Director={result.Director} />";
    console.log("L7 " + retString);
      return retString;
    });

//console.log("L10"+ {resultItems});

    return(
      <ul></ul>
    );

  //  return(<div>{ResultItems}</div>);
  }
});

var ResultItems=React.createClass({
  render:function(){
    return(
      <li>{this.props.Director}</li>
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
    console.log("L39" +response);
    searchResults:[{response}]

  });
  console.log("line 32"+searchResults);
},

search:function(url){
  console.log("In line 34" +url);
  $.ajax({
    type:"GET",
     dataType:'jsonp',
     url:url,
     success: function(response){
  //  console.log("line 40 response" +JSON.stringify(response));
     this.showResults(response);
   }.bind(this)
   });
},
// componentDidMount(){
//    this.search('https://itunes.apple.com/search?term=fun');
// },
  render:function(){
  return(  <div>
    <Searchbox search={this.search}/>
    <Result searchResults={this.state.searchResults} />
    </div>
  );
  }
});


var Searchbox=React.createClass({

  createAjax:function(e){
    //alert("ajax calling");
    e.preventDefault();
    console.log(this);
    //console.log("pppppppppppp");
    //var query=ReactDOM.findDOMNode(this.refs.query).value;
    var query="sultan";
    //var year=ReactDOM.findDOMNode(this.refs.year).value;
    var year="2016";
    //var category = ReactDOM.findDOMNode(this.refs.category).value;
    var category="full";
    var url='http://www.omdbapi.com/?t='+query+'&y='+year+'&plot='+category+'&r=json';
//var url='https://itunes.apple.com/search?term=fun';
    console.log("Line 69"+url);
    this.props.search(url)

  },
  handleChange: function() {
    alert("fddzfx");
    console.log("yuhuu");
  },
  render:function(){

    return(
      <div id="searchbox">
      <form className=""  onSubmit={this.createAjax}>
      <input type="text" ref="query" placeholder="Search Your movie"  />
      <input type="text" ref="year" placeholder="Year" />
      <select ref="category">
                    <option value="short">short</option>
                    <option value="full">full</option>
                </select>
        <input type="submit" value="submit" />
        </form>
      </div>
    );
  }

});


ReactDOM.render(
  <MovieApp/>,
  document.getElementById('content')
);
