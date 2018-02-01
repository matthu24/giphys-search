import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {fetchSearchGiphys} from './util/api_util';
import {fetchSearchGiphys} from './actions/giphy_actions';
import {receiveSearchGiphys} from './actions/giphy_actions';
//this puts fetchSearchGiphys on the window so it is accessible from the
//console
window.fetchSearchGiphys = fetchSearchGiphys;
window.receiveSearchGiphys = receiveSearchGiphys;
//We can access fetchSearchGiphys by doing:
//fetchSearchGiphys("puppies").then(res => console.log(res.data))
//this will return an array of two giphy objects returned from the search


document.addEventListener('DOMContentLoaded',() =>{
  const store = configureStore();
  window.store = store;
  //this allws us to type store.getState() in console and will give state
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>,root);

});


//now with fetch and search giphys on the window, as well as store on the window,
//we can test calling the giphy api and populating the store

// store.getState();
// //should return the initial state object, including the empty giphys array
//

// define fetchSuccess which takes in giphys and dispatches receiveSearchGiphys action which takes in the giphys
// const fetchSuccess = giphys => store.dispatch(receiveSearchGiphys(giphys))
//make the api call and feed it into fetchSuccess
// fetchSearchGiphys("puppies").then(fetchSuccess);
//
// store.getState();
// should return the app state populated with puppy giphys
