import React from 'react';
import Input from './Input';
import Logo from "./Logo";
import SocialLogin from "./SocialLogin";
import '../css/login.css';
import '../css/util.css';

class Modal extends React.Component {
    render() {
      return <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                <Logo />
                <form onSubmit= { this.props.onSubmit } className="login100-form validate-form">
                    <span className="login100-form-title p-b-59">
                      Sign In
                    </span>
                    <Input type='text' name='username' placeholder='username' />
                    <Input type='password' name='password' placeholder='password' />
                    <div className="flex-m w-full p-b-33">
                        <div className="contact100-form-checkbox">
                          <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                          <label className="label-checkbox100" htmlFor="ckb1">
                            <span className="txt1">
                              I agree to the
                              <a href="#" className="txt2 hov1">
                                Terms of User
                              </a>
                            </span>
                          </label>
                        </div>
                    </div>
                    <div className="container-login100-form-btn">
						              <div className="wrap-login100-form-btn">
                              <div className="login100-form-bgbtn"></div>
                                  <button className="login100-form-btn" >Sign In</button>
						                  </div>

						                  <a href="#" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30" >
							                    Sign Up
							                <i className="fa fa-long-arrow-right m-l-5"></i>
						                  </a>
					                </div>
                </form>
                <span class="txt2 flex-c p-t-16 text-muted">&mdash; or &mdash;</span>
                <div><SocialLogin /></div>
                  <a href='#'>Lost your password ?</a>
             </div>
    }
  }

  export default Modal;
  