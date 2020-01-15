/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing from './Landing.jsx';
import Dashboard from './Dashboard.jsx';
import DisplayPane from './DisplayPane.jsx';
import Table from './Table.jsx';



const mapStateToProps = (store) => ({
  page: store.state.page,
  // payload: store.state.payload,
});

class App extends Component {
  // renders a button and a boolean; the button flips the boolean
  render() {
    return(<Table />)
    // switch (this.props.page) {
    //   case 'DASHBOARD':
    //     console.log('Dashboard');
    //     return (<Dashboard />);
    //   case 'LANDING':
    //     console.log('Landing');
    //     return (<Landing />);
    //   default:
    //     return (<h1>ERROR</h1>);
    // }
  }
}


export default connect(mapStateToProps)(App);
