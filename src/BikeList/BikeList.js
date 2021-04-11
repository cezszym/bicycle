import React from 'react';

class BikeList extends React.Component {
  render() {
    return (
      <div>
        <h2>lista</h2>
        <ul>
          {this.props.list.map((e, index) => (
            <li key={index}>{e.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BikeList;
