// Importing action types 

import { INCREMENT,DECREMENT, RESET  } from "./actions.js";

// Defining initial state of the Tally app, the state a single object "count" which is initalized to 0
const initialState = {
    count: 0,
}; 
// The reducer function with two arguments, state which is the current state of the application and action which is the action being dispatched 
 const reducer = (state = initialState, action) => {
    switch (action.type) {   // The reducer uses a switch statement to handle actions based on its type 
        case INCREMENT:   // If the action type is Increment the reducer function returns a new state object with the count increased by 2
            return {...state, count: state.count + action.payload};

        case DECREMENT:  // If the action type is decrement the reducer function returns a new state object with the count decreased by 1
            return {...state, count: state.count - action.payload};
        
        case RESET:  // If the action type is reset the reducer function returns a new state object with the count set to initalState
            return {...state, count: 0};
            default:
                return state;

    }
};
// Exports the reducer function 
export default reducer; 