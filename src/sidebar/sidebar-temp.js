import React, { Component } from 'react';
import {Panel, PanelGroup} from 'react-bootstrap';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';

class SidebarTemp extends Component {
  render() {
    return (
      <div>
        <Router>
            <PanelGroup accordion id="accordion-example">
                <Panel eventKey="1">
                    <Panel.Heading>
                        <Panel.Title toggle>Header <i className="fa fa-chevron-down"></i></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <ul>
                            <li>
                                <Link exact to="./header1">Header1</Link>
                            </li>
                            <li>
                                <Link exact to="./header2">Header2</Link>
                            </li>
                            <li>
                                <Link exact to="./header3">Header3</Link>
                            </li>
                        </ul>
                        
                    </Panel.Body>
                </Panel>
                <Panel eventKey="2">
                    <Panel.Heading>
                    <Panel.Title toggle>Body <i className="fa fa-chevron-up"></i></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <ul>
                            <li>
                                <Link to="javascript:void(0)">Body1</Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)">Body2</Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)">Body3</Link>
                            </li>
                        </ul>
                    </Panel.Body>
                </Panel>
                <Panel eventKey="3">
                    <Panel.Heading>
                    <Panel.Title toggle>Footer <i className="fa fa-chevron-up"></i></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <ul>
                            <li>
                                <Link to="javascript:void(0)">Footer1</Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)">Footer2</Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)">Footer3</Link>
                            </li>
                        </ul>
                    </Panel.Body>
                </Panel>
                </PanelGroup>
        </Router>
      </div>
    )
  }
}

export default SidebarTemp;