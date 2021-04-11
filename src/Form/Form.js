import React from 'react';
import firebase from '../Firebase/Firebase';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      description: '',
    });
    const db = firebase.firestore();
    const userRef = db.collection('bikes').add({
      name: this.state.name,
      description: this.state.description,
    });
    this.props.refresh();
  };

  render() {
    return (
      <>
        <form onSubmit={this.addUser}>
          <input
            onChange={this.updateInput}
            type="text"
            name="name"
            placeholder="Nazwa"
            value={this.state.name}
          />
          <input
            onChange={this.updateInput}
            type="text"
            name="description"
            placeholder="Opis"
            value={this.state.description}
          />
          <button type="submit">Wyślij</button>
        </form>
      </>
    );
  }
}

export default Form;
