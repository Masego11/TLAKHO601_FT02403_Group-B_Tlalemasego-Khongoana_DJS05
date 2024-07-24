// Importing the reducer function 
import reducer  from "./reducer.js";

// store class defined to managed the state and hanlde sunbscription and dispatches 
class Store {
    constructor(reducer, initialState) {  
        this.reducer = reducer;
        this.state = initialState;
        this.listeners = [];
    }

    getState() {  // This method returns the current state of the store 
        return this.state;
    }

    dispatch(action) {   // The action object that calls the reducer function, updates the state with the result of the reducer and notifies listerners
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => listener());
    }

    subscribe(listener) { // The listeners function is called whenever the state changes
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener); // Arrow function used as the test function filter, 
        };
    }
}
// Declaring a new instance of the store class with the reducer and initial state of 0
const store = new Store(reducer, { count: 0 });


export default store; 