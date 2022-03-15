
import React from 'react';
import '../css/login.css';


// Button to brind the modal back
class ModalBack extends React.Component {
    render() {
      return <button className="bringitback" onClick={ this.props.onClick } key={ this.props.className }>Brind the modal back !</button>
    }
  }
  

  export default ModalBack;