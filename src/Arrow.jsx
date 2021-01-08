import React, { Component } from 'react';
import image from './down_arrow.svg'
import './assets/stylesheets/Arrow.css'

class Arrow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }   
    render() { 
        return ( <img src={image} className='plain_arrow'/> );
    }
}
 
export default Arrow;