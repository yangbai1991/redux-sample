import React, {Component} from 'react';
import {render} from 'react-dom';

import connect from 'common/connect';
import * as actions from './actions';

import Counter from './Counter';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.dir(this.props.loading);
        return (
            <div>
                <Counter
                  value={this.props.value}
                  onIncrement={this.props.increment}
                  onDecrement={this.props.decrement}
                />
                <button onClick={this.props.ajax} disabled={this.props.loading}>ajax</button>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//  return {
//      counter: state.counter
//  };
// }

// const mapDispatchToProps = {
//  onIncrement: () => {
//      return {type: 'INCREMENT'};
//  },
//  onDecrement: () => {
//      return {type: 'DECREMENT'};
//  },
//  onAjax: () => {
//      return (dispatch) => {
//          dispatch({type: 'AJAX_START'});
//          setTimeout(() => {
//              dispatch({type: 'AJAX_END'});
//          }, 2000);
//      }
//  },
// };

// const mapDispatchToProps = dispatch => {
//  bindActionCreators(actions, dispatch);
// }

// function mapDispatchToProps(dispatch) {
//  return {
//      onIncrement: () => {
//          dispatch({type: 'INCREMENT'});
//      },
//      onDecrement: () => {
//          dispatch({type: 'DECREMENT'});
//      }
//  };
// }

export default connect(App, actions, 'counter');