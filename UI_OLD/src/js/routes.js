var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
/*
var Master = require('./pages/Master/Master');
var Home = require('./pages/Home/Home');
var Login = require('./pages/Login/Login');
var MovieApp = require('./components/MovieApp');

var Result = require('./components/Result');
var ViewMovieBox = require('./components/ViewMovieBox');

var  LoginRequired  = require('./utils/RouteHelpers');
*/
var Master = require('./pages/Master/Master');
var Home = require('./pages/Home/Home');
var MovieApp = require('./components/MovieApp');
var MovieApp1 =require('./components/MovieApp1');
module.exports = (
<Route>
  /*  <Route handler={Login} name="Login" path="/Login"/>
    <Route handler={LoginRequired}>
        <Route handler={Master}>
            <DefaultRoute handler={Home} name="Home"/>
        </Route>
        <Route handler={HomePage} name="HomePage" path="/home"/>
        <Route handler={ViewMovieBox} name="ViewMovieBox" path="/movies"/>
        <Route handler={MovieBox} name="MovieBox" path="/add"/>
    </Route> */
    <Route handler={Master}>
        <DefaultRoute handler={Home} name="Home"/>
    </Route>

        <Route handler={Home} name="Home" path="/Home"/>
        <Route handler={MovieApp} name="MovieApp" path="/MovieApp"/>
        <Route handler={MovieApp1} name="MovieApp1" path="/MovieApp1"/>
</Route>
);
