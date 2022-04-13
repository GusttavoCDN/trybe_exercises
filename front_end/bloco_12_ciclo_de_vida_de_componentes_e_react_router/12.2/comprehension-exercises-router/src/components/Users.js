// arquivo Users.js
import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { id } = this.props.match.params;

    const { greetingsMessage } = this.props
    return (
      <div>
        <h2>Users</h2>
        {id && <p> { greetingsMessage(id) }</p>}
      </div>
    );
  }
};

export default Users;

