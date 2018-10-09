import React, { Component } from 'react';
import {Panel, PanelGroup} from 'react-bootstrap';
import {BrowserRouter as Router,Route, Link, Switch, NavLink} from 'react-router-dom';
import HeaderFirst from '../header/header1';
import HeaderSecond from '../header/header2';
import HeaderThird from '../header/header3';
import BodyFirst from '../body/body1';
import BodySecond from '../body/body2';
import BodyThird from '../body/body3';
import FooterFirst from '../footer/footer1';
import FooterSecond from '../footer/footer2';
import FooterThird from '../footer/footer3';


class SidebarTemp extends Component {
  render() {
    return (
      <div>
        <Router>
            <div>
                <PanelGroup accordion id="accordion-example">
                    <Panel eventKey="1">
                        <Panel.Heading>
                            <Panel.Title toggle>Header <i className="fa fa-chevron-down"></i></Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                            <ul>
                                <li className="list-item">
                                    <Link exact to="./header1">Header1</Link>
                                </li>
                                <li className="list-item">
                                    <Link exact to="./header2">Header2</Link>
                                </li>
                                <li className="list-item">
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
                                <li className="list-item">
                                    <Link to="./body1">Body1</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="./body2">Body2</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="./body3">Body3</Link>
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
                            <li className="list-item">
                                <Link to="./footer1">Footer1</Link>
                            </li>
                            <li className="list-item">
                                <Link to="./footer2">Footer2</Link>
                            </li>
                            <li className="list-item">
                                <Link to="./footer3">Footer3</Link>
                            </li>
                        </ul>
                    </Panel.Body>
                </Panel>
                </PanelGroup>
                <div className="dynamic-container">
                    <div>
                        <switch>
                            <Route exact path="/header1" component={HeaderFirst} />
                            <Route  path="/header2" component={HeaderSecond} />
                            <Route  path="/header3" component={HeaderThird} />
                            <Route  path="/body1" component={BodyFirst} />
                            <Route  path="/body2" component={BodySecond} />
                            <Route  path="/body3" component={BodyThird} />
                            <Route  path="/footer1" component={FooterFirst} />
                            <Route  path="/footer2" component={FooterSecond} />
                            <Route  path="/footer3" component={FooterThird} />
                        </switch>
                    </div>
               </div>
            </div>
        </Router>
      </div>
    )
  }
}

export default SidebarTemp;