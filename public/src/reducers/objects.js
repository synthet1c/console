import {
	SET_SELECTED
} from '../actions'

import objects from './state.objects'

const initialState = {
	selected: null,
	classes: objects
}

export default (state = initialState, action) => {
	switch (action.type) {

		case SET_SELECTED:
			return {
				...state,
				selected: action.payload
			}

	}
	return state
}