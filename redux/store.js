// Importing the reducer function 
import reducer  from "./reducer.js";

// This function creates a store with reducer and initialState as its parameters
function myStore(reducer, initialState) {
    let state = initialState;  //The use of let allows the state to be updated 
    const listeners= new Set(); //A Set that will hold functions to be called when the stage changes

    function getState() {
        return state;  // Returns the current state
    }

    function dispatch(action) {
        state = reducer(state, action);  // Dispatches and action and uses the reducer to update the state
        listeners.forEach(listener => listener()); //Subscribed listeners are notified
    }

    function subscribe(listener) { // Adds a listener function to the listeners set 
        listeners.add(listener);
        return() => { //Returns a function that removes listener from the Set when called 
            listeners.delete(listener);
        };
    }
    return{
        getState,
        dispatch,
        subscribe
    };
}

// Declaring a new instance of the store class with the reducer and initial state of 0
const store = myStore(reducer, { count: 0 });


export default store; 