import React from 'react';
import { Provider } from 'react-redux';

import GiphysSearchContainer from './giphys_search_container';

//functional root component that renders all of the app's components
//receives app's redux store as a prop

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <GiphysSearchContainer/>
    </Provider>
  )
}
export default Root;
