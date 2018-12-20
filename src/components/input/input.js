import React from 'react';
import {Input} from "@material-ui/core";
import './input.css';

const Input2 = (props) => {
    return (
       <Input error={props.error}
              onChange={props.onChange}
              placeholder={props.placeholder}
              className={props.className}/>
    )
};

export default Input2
