
import React from 'react';
import { text } from "@storybook/addon-knobs";

import Button from './button.jsx';

export default { 
    title: 'Button',
    component: Button
};

const buttonLabel = "Button Text";
const buttonDefaultText = "Click Me!";

export const allStyles = () => (
    <React.Fragment>
        
        <Button>
            Normal Button
        </Button> 

        <Button primary>
            Primary Button
        </Button>

    </React.Fragment>
)

export const ButtonElement = () => {
    
    const handleButtonClick = () => alert('button was clicked');

    return (
        <Button onClick={handleButtonClick}>
            {text(buttonLabel, buttonDefaultText)}
        </Button>
    );
};

export const AnchorElement = () => (
    <Button href="#">
        {text(buttonLabel, buttonDefaultText)}    
    </Button>
);

