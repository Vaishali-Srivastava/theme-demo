import React, { Component } from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';
import '../css/form.css';

class FormComp extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
        }

        getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
        }

        handleChange(e) {
        this.setState({ value: e.target.value });
        }
    render() {
        return (
        <div> 
            <div className="pattern-bg-wrapper">
                <div className="form-wrapper">
                    <form>
                        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                            <ControlLabel>Working example with validation</ControlLabel>
                            <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange}/>
                            <FormControl.Feedback />
                            <HelpBlock>Validation is based on string length.</HelpBlock>
                        </FormGroup>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default FormComp;