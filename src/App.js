import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
//import './font-awesome.min.css';
import './style.css';
import Login from './login';
import SignUp from './sign-up';
import BasicExample from '././router/basic';
import UserInfo from './user-info';
import Main from './main';
import './header-style.css';
import './custom-style.css';
import './sidebar.css';


class App extends Component {
  
  render() {
    
    return (
      
      <div className="App">
        <Main />
        
      </div>
    );
  }
}

export default App;