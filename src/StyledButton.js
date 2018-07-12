import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.a`
    font-weight: ${props => props.theme.text_weight_regular};
    border-radius: ${props => props.theme.border_radius_base};
    color: ${props => props.color};
    font-size: 14px;
    background: $bg;
`;

class StyledButton extends Component {
    constructor(props){
        super();
        this.state = {}
    }
    render(){
        return <div>
            This is sample for styled component. There is no CSS imported for this component.
            <div>
                <Button>Text</Button>
            </div>
        </div>
    }
}

export default StyledButton;