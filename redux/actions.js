// Creation of constants for action types to identify the type of actions that will be dispatched.  

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

// Action creator functions that return action objects  
export const increment = () => ({
    type: INCREMENT,
    payload: 2,  // Set my increment amount to 2 
});

export const decrement  = () => ({
    type: DECREMENT,
    payload: 1, // Set my decremenet to 1 
}); 

export const reset = () => ({
    type: RESET,
});