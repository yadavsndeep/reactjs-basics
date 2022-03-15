import React from 'react';
import Modal from './Modal';
import ModalBack from './ModalBack';
import { CSSTransition } from 'react-transition-group';
import background from '../images/bg-01.jpg';

//const ReactCSSTG = React.addons.CSSTransitionGroup;

// Main app
class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		  isVisible: true
		}
		// Bindings
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleRemount = this.handleRemount.bind(this);
	}
  
	handleSubmit(e) {
	  e.preventDefault();
	  this.setState({
		isVisible: false
	  }, function() {
		console.log(this.state.isVisible)
	//	console.log(this.target.value)
	  });
	  return false;
	}
	handleRemount(e) {
		e.preventDefault();
		this.setState({
			isVisible: true
		}, function() {
			console.log(this.state.isVisible)
		});
	 
	}
	render() {
  
	  // const for React CSS transition declaration
	  let component = this.state.isVisible ? <Modal onSubmit={ this.handleSubmit } key='modal'/> : <ModalBack onClick={ this.handleRemount } key='bringitback'/>;
  
	  return (
		<div className="container-login100">
				<div className="login100-more" style={{ backgroundImage: `url(${background})` }}> </div>
	  				<CSSTransition transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300} timeout={500}>
			   			{ component }
			 		</CSSTransition>
				
			</div>
	  )
	}
  }

export default App;
