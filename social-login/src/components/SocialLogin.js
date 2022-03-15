import React from 'react';
import FacebookLogin from './facebook';

const responseFacebook = (response) => {
  console.log(response);
};

class SocialLogin extends React.Component {
    render() {

        return (
            <div className="social-login">
                    <FacebookLogin
                        appId="170292538229551"
                        autoLoad
                        callback={responseFacebook}
                        render={renderProps => (
                         // <button className="fa fa-facebook"  onClick={renderProps.onClick}>Login with Facebook</button>
                            <a href="#" className="facebook btn d-flex justify-content-center align-items-center" onClick={ renderProps.onClick}>
                          <span className="zmdi-facebook mr-3"> 
                          <i className="fa fa-facebook"></i> 
                          </span> 
                          Login with Facebook
                        </a>
                        )}
                      />
                    
                    <a href="#" className="twitter btn d-flex justify-content-center align-items-center" onClick={ this.props.onClick }>
                      <span >
                      <i className="fa fa-twitter mr-3"></i>
                      </span> 
                      Login with  Twitter
                    </a>
                    <a href="#" className="google btn d-flex justify-content-center align-items-center" onClick={ this.props.onClick }>
                      <span className="zmdi-google mr-3">
                      <i className="fa fa-google"></i>
                      </span> 
                      Login with  Google
                    </a>
              </div>
        )
    }
}

export default SocialLogin;