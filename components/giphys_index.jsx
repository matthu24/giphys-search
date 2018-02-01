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



//what the api call to giphy responds with:

// {
//     "data": [
//         {
//             type: "gif",
//             id: "FiGiRei2ICzzG",
//             slug: "funny-cat-FiGiRei2ICzzG",
//             url: "http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG",
//             bitly_gif_url: "http://gph.is/1fIdLOl",
//             bitly_url: "http://gph.is/1fIdLOl",
//             embed_url: "http://giphy.com/embed/FiGiRei2ICzzG",
//             username: "",
//             source: "http://tumblr.com",
//             rating: "g",
//             caption: "",
//             content_url: "",
//             source_tld: "tumblr.com",
//             source_post_url: "http://tumblr.com",
//             import_datetime: "2014-01-18 09:14:20",
//             trending_datetime: "1970-01-01 00:00:00",
//             images: {
//                 fixed_height: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif",
//                     width: "568",
//                     height: "200",
//                     size: "460622",
//                     mp4: "http://media2.giphy.com/media/FiGiRei2ICzzG/200.mp4",
//                     mp4_size: "13866",
//                     webp: "http://media2.giphy.com/media/FiGiRei2ICzzG/200.webp",
//                     webp_size: "367786"
//                 },
