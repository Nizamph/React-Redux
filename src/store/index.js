import {createStore} from 'redux'

const counterReducer = (state = {counter:0}, action) => {

 if(action.type === "changeCount") {
  return {
    counter: state.counter + action.amount
  }
}
 return state;
}



const store =  createStore(counterReducer)

console.log(store.getState())//initial state

export default store