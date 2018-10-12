import React, { Component } from 'react';
import {Tooltip,OverlayTrigger,ButtonToolbar,Button} from 'react-bootstrap';

const tooltip = (
    <Tooltip id="tooltip">
      <strong>Holy guacamole!</strong> Check this info.
    </Tooltip>
  );

class TooltipComp extends Component {
  render() {
    return (
      <div>
          <ButtonToolbar>
            <OverlayTrigger placement="left" overlay={tooltip}>
            <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={tooltip}>
            <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="bottom" overlay={tooltip}>
            <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="right" overlay={tooltip}>
            <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>
        </ButtonToolbar>
      </div>
    )
  }
}

export default TooltipComp;