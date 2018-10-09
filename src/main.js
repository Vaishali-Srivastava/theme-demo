import React, { Component} from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import './global.css';
import './css/custom-scroll.css';
import './css/top-navigation.css';
import './css/custom-style.css';
import './css/sidebar.css';
import './css/right-panel.css';
import './css/top-head.css';
import './css/dynamic-content-style.css';
import './css/custom-buttons.css';
import TopNav from './top-navigation';
import SidebarTemp from './sidebar/sidebar-temp';
import Rightnavigation from './right-navigation';
import TitleHead from './main-title-head/title-head';
import HeaderFirst from './header/header1';
import HeaderSecond from './header/header2';
import HeaderThird from './header/header3';

class Main extends React.Component {
    render(){
        return(
            <div>
                <TopNav />
                <section className="main-wrapper" role="main">
                    <div className="container-fluid">
                            <Row>
                                <Col className="pl-0">
                                    <aside className="sidebar-wrap">
                                        <div>
                                            <SidebarTemp />
                                        </div>
                                    </aside>
                                </Col>
                                <Col sm="12" className="pl-0 pr-0">
                                    <div className="middle-panel-wrapper">
                                        <div className="top-head">
                                            <TitleHead />
                                        </div>
                                        <div className="middle-tier-wrapper">
                                            <Router>
                                                <div>
                                                    
                                                </div>
                                            </Router>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                    </div>
                </section>
                <Rightnavigation />
            </div>
        );
    }
}



export default Main;