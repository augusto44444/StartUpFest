import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/Apollo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './mainStyle.css'

import Header from './components/Layout/Header'
import MainContent from './components/Layout/MainContent'

class App extends Component {
  render() {
    return (
      <ApolloProvider className='' client={apolloClient}>
        <div className='App'>
          <Header />
          <MainContent />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;