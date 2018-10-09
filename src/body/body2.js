import React, { Component } from 'react';
import {ButtonToolbar,Button} from 'react-bootstrap';

class BodySecond extends Component {
  render() {
    return (
      <div>
        <h4 className="text-left mt-0">Buttons Structure</h4>
        <div className="button-panel">
          <ButtonToolbar>
            {/* Standard button */}
            <Button>Default</Button>

            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <Button bsStyle="primary">Primary</Button>

            {/* Indicates a successful or positive action */}
            <Button bsStyle="success">Success</Button>

            {/* Contextual button for informational alert messages */}
            <Button bsStyle="info">Info</Button>

            {/* Indicates caution should be taken with this action */}
            <Button bsStyle="warning">Warning</Button>

            {/* Indicates a dangerous or potentially negative action */}
            <Button bsStyle="danger">Danger</Button>

            {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
            <Button bsStyle="link">Link</Button>
            
          </ButtonToolbar>
          <ButtonToolbar className="mt-3x">
            <Button bsStyle="round-style btn-line-secondary">Rounded Button</Button>
            <Button bsStyle="round-style btn-line-primary">Rounded Button</Button>
            <Button bsStyle="round-style btn-line-info">Rounded Button</Button>
            <Button bsStyle="round-style btn-line-danger">Rounded Button</Button>
            <Button bsStyle="round-style btn-line-success">Rounded Button</Button>
          </ButtonToolbar>
          <ButtonToolbar className="mt-3x">
            <Button bsStyle="round-style btn-peach-gradient btn-lg">Peach Gradient Button</Button>
            <Button bsStyle="round-style btn-purple-gradient btn-lg">Purple Gradient Button</Button>
            <Button bsStyle="round-style btn-aqua-gradient btn-lg">Aqua Gradient Button</Button>
            <Button bsStyle="round-style btn-blue-gradient btn-lg">Blue Gradient Button</Button>
          </ButtonToolbar>
          <ButtonToolbar className="mt-3x">
            <Button bsStyle="circle-style btn-purple-gradient"><i className="fa fa-bolt"></i></Button>
            <Button bsStyle="circle-style btn-peach-gradient"><i className="fa fa-leaf"></i></Button>
            <Button bsStyle="circle-style btn-aqua-gradient"><i className="fa fa-star"></i></Button>
            <Button bsStyle="circle-style btn-blue-gradient"><i className="fa fa-bolt"></i></Button>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}

export default BodySecond;