import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';

export const receiveSearchGiphys = giphys => {
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  }
}

export const fetchSearchGiphys = searchTerm => dispatch => {
  return APIUtil.fetchSearchGiphys(searchTerm).then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
}

//now that we have the action creator, we can put it on the window
//store.getState() will return empty state
//store.dispatch(fetchSearchGiphys("puppies")) will populate the store
//store.getState() will contain fetch giphys
