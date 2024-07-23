// Importing action types 

import { ADD_TO_TALLY,SUBTRACT_FROM_TALLY, RESET_TALLY  } from "./actions";

// Defining initial state of the Tally app, the state a single object "count" which is initalized to 0
const initialState = {
    count: 0
}; 
// The reducer function with two arguments, state which is the current state of the application and action which is the action being dispatched 
const reducer = (state = initialState, action) => {
    switch (action.type) {   // The reducer uses a switch statement to handle actions based on its type 
        case ADD_TO_TALLY:   // If the action type is add_to_tally the reducer function returns a new state object with the count increased by 1
            return {...state, count: state.count + 1 };

        case SUBTRACT_FROM_TALLY:  // If the action type is subtract_from_tally the reducer function returns a new state object with the count decreased by 1
            return {...state, count: state.count - 1 };
        
        case RESET_TALLY:  // If the action type is reset_tally the reducer function returns a new state object with the count set to initalState
            return {...state, count: 0 };
            default:
                return state;

    }
};
// Exports the reducer function 
export default reducer; 