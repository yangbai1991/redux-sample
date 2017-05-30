// export const increment = () => {
// 	return dispatch => {
// 		dispatch({type: 'INCREMENT'});
// 	}
// };

export const increment = () => {
	return {type: 'INCREMENT'};
};

export const decrement = () => {
	return dispatch => {
		dispatch({type: 'DECREMENT'});
	}
};

export const ajax = () => {
	return dispatch => {
		dispatch({type: 'AJAX_START'});
		setTimeout(() => {
			dispatch({type: 'AJAX_END'});
		}, 2000);
	};
};