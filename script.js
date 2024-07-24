import store from "./redux/store.js";  // Imports store instance 

import {increment, decrement, reset} from "./redux/actions.js"; // Imports action creator functions  

// Registers a listener function that is called when the state changes. The listener function logs the current state to the console. 
store.subscribe(() => {
    console.log("State", store.getState());  
});


// Logs the initial state of the store 
console.log("Initial state:", store.getState());

// Dispatch actions 
store.dispatch(increment()); 
store.dispatch(decrement()); 
store.dispatch(reset()); 

 
