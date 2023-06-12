import React, { Component } from 'react';
import './index.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [{ id: 1, nom: 'agba pakam ' }],
    };
    newClient: '';
  }
  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients: clients });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = this.state.newClient;

    const clients = this.state.clients.slice();
    const client = { id: id, nom: nom };
    clients.push(client);

    this.setState({ clients: clients, newClient: '' });
    console.log(event.currentTarget.value);

    // const nom =
  };
  handleChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ newClient: value });
  };
  render() {
    const { clients } = this.state;

    return (
      <div>
        {clients.map((client) => (
          <li key="index">
            {client.nom}{' '}
            <button onClick={() => this.handleDelete(client.id)}>X</button>{' '}
          </li>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Nom Prénom"
            value={this.state.newClient}
            onChange={this.handleChange}
          />
          <button> Envoyer</button>
        </form>
      </div>
    );
  }
}
