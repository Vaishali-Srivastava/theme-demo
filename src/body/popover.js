import React, { Component } from 'react';
import {OverlayTrigger,Popover,ButtonToolbar,Button} from 'react-bootstrap';
import '../css/popover.css';

const popoverLeft = (
    <Popover id="popover-positioned-left" title="Popover left">
      <strong>Holy guacamole!</strong> Check this info.
    </Popover>
  );
  
  const popoverTop = (
    <Popover id="popover-positioned-top" title="Popover top">
      <strong>Holy guacamole!</strong> Check this info.
    </Popover>
  );
  
  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Popover bottom">
      <strong>Holy guacamole!</strong> Check this info.
    </Popover>
  );
  
  const popoverRight = (
    <Popover id="popover-positioned-right" title="Popover right">
      <strong>Holy guacamole!</strong> Check this info.
    </Popover>
  );

  const popoverCustom = (
      <Popover id="custom-pos" title="Popover Custom">
        <strong>It is a long established</strong> fact that a reader will be distracted by the readable content of a page when looking at its layout.
        
      </Popover>
  );
class PopoverComp extends Component {
  render() {
    return (
      <div>
          <div className="first-pagination-wrap">
                <h4 className="text-left mt-0">Pagination Structure</h4>
                <ButtonToolbar>
                    <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                        <Button bsStyle="primary">Holy guacamole!</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                        <Button bsStyle="info">Holy guacamole!</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                        <Button bsStyle="danger">Holy guacamole!</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
                        <Button bsStyle="warning">Holy guacamole!</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverCustom}>
                        <Button bsStyle="round-style btn-success">Custom Popover</Button>
                    </OverlayTrigger>
                </ButtonToolbar>
          </div>
      </div>
    )
  }
}

export default PopoverComp;

