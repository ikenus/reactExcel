import React, { PropTypes } from 'react';

class List extends React.Component {
  constructor() {
    super();
  }

  render () {
    let lista = this.props.elementi.map((item, index) => <li key={index}>{item.name}</li>);
    return(
       <ul>{lista}</ul>
    );
  }
}
export default List;
