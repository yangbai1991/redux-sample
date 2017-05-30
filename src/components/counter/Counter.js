import React, {Component} from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	value() {
		return this.props.value;
	}
	onIncrement() {
		this.props.increment();
	}
	onDecrement() {
		this.props.decrement();
	}
	render() {
		//let {value, onIncrement, onDecrement} = this.props;
		//console.dir(this.props.value);
		return (
			<div className="counter">
				<h1>{this.props.value}</h1>
		  		<button onClick={this.props.onIncrement}>+</button>
		  		<button onClick={this.props.onDecrement}>-</button>
			</div>
		);
	}
}

export default Counter;