import React from 'react';
import Input from './Input';
import Logo from "./Logo";
import SocialLogin from "./SocialLogin";
import '../css/login.css';
import '../css/util.css';

class Signup extends React.Component {
    render() {
      return <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                <Logo />
                <form onSubmit= { this.props.onSubmit } className="login100-form validate-form">
                    <span className="login100-form-title p-b-59">
                      Sign Up
                    </span>
                    
                    <Input type='text' name='username' placeholder='username' />
                    <Input type='password' name='password' placeholder='password' />
                    <div class="wrap-input100 validate-input">
						<span class="label-input100">Full Name</span>
						<Input class="input100" type="text" name="name" placeholder="Name..." />
						<span class="focus-input100"></span>
					</div>
                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<span class="label-input100">Email</span>
						<Input class="input100" type="text" name="email" placeholder="Email addess..." />
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Username is required">
						<span class="label-input100">Username</span>
						<Input class="input100" type="text" name="username" placeholder="Username..." />
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<span class="label-input100">Password</span>
						<Input class="input100" type="text" name="pass" placeholder="*************" />
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Repeat Password is required">
						<span class="label-input100">Repeat Password</span>
						<Input class="input100" type="text" name="repeat-pass" placeholder="*************" />
						<span class="focus-input100"></span>
					</div>

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
                                  <button className="login100-form-btn" >Sign Up</button>
						                  </div>

						                  <a href="#" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30" >
							                    Sign In
							                <i className="fa fa-long-arrow-right m-l-5"></i>
						                  </a>
					                </div>
                </form>
             </div>
    }
  }

  export default Signup;
  