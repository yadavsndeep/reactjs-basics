import React from 'react';
import '../css/login.css';

// Fake logo
class Logo extends React.Component {
    render() {
      return <div className="logo">
                  <i className="fa fa-bug"></i> 
                  <span> awesome logo </span>
                </div>
    }
  }

  export default Logo;