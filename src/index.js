import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/axist/dist/axist.min.css';
import { AuthProvider } from 'react-auth-kit'
import App from './App';

ReactDOM.render(
  <AuthProvider authType={'localstorage'} authName={'_auth'}>
      <App />
  </AuthProvider>,
  document.getElementById('root')
);