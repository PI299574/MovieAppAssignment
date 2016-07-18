var React = require('react');


var ResultItems=React.createClass({


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
<div className="row">

<form className="" id="" action="" onSubmit={this.saveFormData} >
<div className="col-md-4">
<img src= {this.props.Poster}  alt="No Poster available" width="98%" height="400px"/>
</div>
<div className="col-md-8">
<h3>{this.props.Title}</h3><br/>
Year:{this.props.Year}<br/>
Actors:{this.props.Actors}<br/>
Director:{this.props.Director}<br/>
Writer:{this.props.Writer}<br/>
Plot:{this.props.Plot}<br/>
Rated:{this.props.Rated}<br/>
Released:{this.props.Released}<br/>
Genre:{this.props.Genre}<br/>
RunTime:{this.props.Runtime}<br/>
Raiting:{this.props.imdbRating}<br/>
ImdbId:{this.props.imdbID}<br/>
Type:{this.props.Type}<br/>
{this.props.Language}
{this.props.Country}
{this.props.Awards}
{this.props.Metascore}
{this.props.imdbVotes}
{this.props.Response}
<br/>
  <input type="submit" ref="" value="Add To Database" />&nbsp;
</div>
</form>
</div>
);
}
});



module.exports = ResultItems ;
