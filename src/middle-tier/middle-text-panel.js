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
              <Switch>
                  <Route exactly pattern="header/header1" component={HeaderFirst} />
                  <Route exactly pattern="header/header2" component={HeaderSecond} />
                  <Route exactly pattern="header/header3" component={HeaderThird} />
              </Switch>
            </div>
          </Router>
      </div>
    )
  }
}

export default MiddleTextPanel;