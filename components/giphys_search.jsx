import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {search:''};
  }



  handleSubmit(e){
    //NEED e.preventDefault for submitting the form
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.search);
  }

  handleChange(e){
    //don't need the e.preventDefault here..
      this.setState({search:e.target.value})
  }

  render(){
    return(
      <div>

        <form>
          <h1>Giphys Search Tool</h1>
          <input type='text' onChange={this.handleChange} className='search-bar' placeholder='search for a giphy'></input>
          <br></br>
          <button type='submit' onClick={this.handleSubmit} className='search-button'>submit</button>
        </form>
        <GiphysIndex giphys={this.props.giphys}/>
      </div>

    )
  }
}

export default GiphysSearch;
