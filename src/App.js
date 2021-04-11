import React from 'react';
import firebase from './Firebase/Firebase';
import BikeBox from './BikeBox/BikeBox.js';
import BikeList from './BikeList/BikeList.js';
import Form from './Form/Form.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  fetchBikes = async () => {
    const db = firebase.firestore();
    const bikesRef = db.collection('bikes');
    const response = await bikesRef.get();
    const bikes = [];
    response.forEach((doc) => {
      bikes.push(doc.data());
    });
    this.setState({ list: bikes });
  };

  componentDidMount() {
    this.fetchBikes();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bicycles</h1>
        </header>
        <div className="formContainer">
          <Form refresh={this.fetchBikes} />
        </div>
        <BikeList list={this.state.list} />
      </div>
    );
  }
}

export default App;
