const initialState = {
	value: 0, 
	loading: false
};

export const counterReducer = (state = initialState, action) => {
	let value = state.value;
	switch (action.type) {
		case 'INCREMENT': 
			return {value: value+1, loading: false};
    	case 'DECREMENT': 
    		return {value: value-1, loading: false};
    	case 'AJAX_START':
    		return {loading: true, value: value};
    	case 'AJAX_END':
    		return {loading: false, value: value};
		default:
			return state;
	}
}