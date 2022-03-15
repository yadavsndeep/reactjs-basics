import React from 'react';
import '../css/login.css';

// Generic input field
class Input extends React.Component {
    render() {
      return <div className='wrap-input100 validate-input'>
                <span className="label-input100">Username</span>
                <input className="input100" type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autoComplete='false'/>
                <label htmlFor={ this.props.name } ></label>
                <span className="focus-input100"></span>
             </div>
    }
  
  }

  export default Input;
  