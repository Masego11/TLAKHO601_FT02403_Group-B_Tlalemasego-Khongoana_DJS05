// Creation of constants for action types to identify the type of actions that will be dispatched.  

export const ADD_TO_TALLY = "ADD_TO_TALLY";
export const SUBTRACT_FROM_TALLY = "SUBTRACT_FROM_TALLY";
export const RESET_TALLY = "RESET_TALLY";

// Action creator functions that return action objects  
export const addToTally = () => ({
    type: ADD_TO_TALLY,
    payload: item,
});

export const subtractFromTally = () => ({
    type: SUBTRACT_FROM_TALLY,
    payload: item,
}); 

export const resetTally = () => ({
    type: RESET_TALLY,
});