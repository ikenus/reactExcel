import React, { PropTypes } from 'react';

const List = (props) => {
    let lista = props.elementi.map((item, index) => <li key={index}>{item.name}</li>);
    return (
        <ul className="list-inline">{lista}</ul>
    );
};

List.defaultProps = {
  elementi: [{name: "a"},{name: "b"}]

};
List.propTypes = {
  elementi: PropTypes.array.isRequired
};

export default List;
