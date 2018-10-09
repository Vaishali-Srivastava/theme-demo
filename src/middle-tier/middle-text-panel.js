import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import HeaderFirst from '../header/header1';
import HeaderSecond from '../header/header2';
import HeaderThird from '../header/header3';

class MiddleTextPanel extends Component {
  render() {
    return (
      <div>
            <Router>
              <div>
                  <switch>
                    <Route  exact path="/header1" component={HeaderFirst} />
                    <Route  path="/header2" component={HeaderSecond} />
                    <Route  path="/header3" component={HeaderThird} />
                  </switch>
              </div>
            </Router>
      </div>
    )
  }
}

export default MiddleTextPanel;