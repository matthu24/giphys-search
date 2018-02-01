import React from 'react';

import GiphysIndexItem from './giphys_index_item';


export default (props) => {
  return(
    <ul className='giphys'>
      {
        props.giphys.map((giphy,idx) => <li key={idx}><img src={giphy.images.fixed_height.url}/></li>)
      }
    </ul>
  )
}
