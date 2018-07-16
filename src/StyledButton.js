import React, { Component } from 'react';
import styled from 'styled-components';
import injectSheet, {ThemeProvider} from 'react-jss';
import buttonStyle from './ButtonStyleJss';

// const Button = styled.a`
//     font-weight: ${props => props.theme.text_weight_regular};
//     border-radius: ${props => props.theme.border_radius_base};
//     color: ${props => props.color};
//     font-size: 14px;
//     background: $bg;
// `;

const style = theme => {
    return buttonStyle(theme)
}

class StyledButton extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return <div>
            This is sample for styled component. There is no CSS imported for this component.
            <div>
                <button className={"button1"} >Text</button>
            </div>
        </div>
    }
}

// const StyledButton = ({classes}) => {
//     debugger
//     return(
//     <div>
//         This is sample for styled component. There is no CSS imported for this component.
//         <div>
//             <button className={classes.button1} >Text</button>
//         </div>
//     </div>
// )}


export default injectSheet(style)(StyledButton);
// export default StyledButton;