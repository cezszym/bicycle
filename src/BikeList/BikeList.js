import React from 'react';

class BikeList extends React.Component {
  render() {
    return (
      <div>
        <h2>Lista rowerów</h2>
        <ul>
          {this.props.list.map((e, index) => (
            <li key={index} className="rower">
              <h3> {e.name ? e.name : 'no name'}</h3>
              <p>{e.description ? e.description : 'no desc'}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BikeList;
