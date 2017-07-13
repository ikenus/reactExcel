import React, { PropTypes } from 'react';

const List = (props) => {
    let lista = props.elementi.map((item, index) => <li key={index}>{item.name}</li>);
    return (
        <ul>{lista}</ul>
    );
};

export default List;
