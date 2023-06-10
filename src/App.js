import React, { Component } from 'react';
import './index.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [
        { id: 1, nom: 'seth agba' },
        { id: 2, nom: 'seth Tagba' },
        { id: 3, nom: 'seth Lo' },
      ],
    };
  }
  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);

    this.setState({ clients: clients });
    console.log(id);
  };
handleSubmit =event=>{
  
}

  render() {
    const { clients } = this.state;

    return (
      <div>
        <h1> lol</h1>
        {clients.map((client) => (
          <li>
            {' '}
            {client.nom}{' '}
            <button onClick={() => this.handleDelete(client.id)}>X</button>{' '}
          </li>
        ))}
        <form onSubmit={() => handleSubmit}>
          <input placeholder="Nom et prenom" />
          <button> Envoyer </button>
        </form>
      </div>
    );
  }
}
