import React, { PropTypes } from 'react';
import List from './List.js';

class Home extends React.Component {
  constructor(){
    super();
    this.state = {
          "lista": [{"name": "1"},{"name": "2"},{"name": "3"}]
    };
  }
  render () {
    return(
        <List elementi={this.state.lista} />
    );
  }
}

export default Home;
