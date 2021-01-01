import React from 'react';
import {NavLink} from 'react-router-dom';
import './style/button.scss';
interface LinkButtonProps {
    text: string;
    to: string;
    internal: boolean | undefined;
    onClick?: Function;
}
const LinkButton: React.FC<LinkButtonProps> = ( props: LinkButtonProps ) => {
    if(props.internal) {
        return(<NavLink to={props.to} onClick={props.onClick} className="linkButton">{props.text}</NavLink>);
    }
    else {
        return(<a href={props.to} onClick={props.onClick} className="linkButton">{props.text}</a>);
    }
}
export default LinkButton;