import React, { Component } from 'react';

class Treasure extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <button onClick={this.props.fku} className='treasure'/> );
    }
}
 
export default Treasure;