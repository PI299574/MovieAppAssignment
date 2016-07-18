var React = require('react');
var Navbar = require('./Navbar');



var Searchbox=React.createClass({

  createAjax:function(e){
    //alert("ajax calling");
    e.preventDefault();
    //console.log(this);
    var query=React.findDOMNode(this.refs.query).value;
    //var query="sultan";
    var year=React.findDOMNode(this.refs.year).value;
    //var year="2016";
   var category = React.findDOMNode(this.refs.category).value;
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


module.exports = Searchbox ;
