import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counter-slice'

const Counter = () => {

 const dispatch = useDispatch();
 const counter =  useSelector(state => state.counter.counter);
 const show = useSelector(state => state.counter.showCounter);
 
 console.log('counter:', counter);

 
const incrementHandler = () => {
  dispatch(counterActions.changeCount(1))
  
};

const decrementHandler = () => {
    dispatch(counterActions.changeCount(-1))
}
  const toggleCounterHandler = () => {
   dispatch(counterActions.toggleCounter())
  };

  const incrementBy5Handler = () => {
    dispatch(counterActions.changeCount(5))
  }

  const decrementBy5Handler = () => {
    dispatch(counterActions.changeCount(-5))
  }
   return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
       <button onClick={incrementHandler}>Increment</button>
       <button onClick={decrementHandler}>Decrement</button>
       <button onClick={incrementBy5Handler}>IncrementBy5</button>
        <button onClick={decrementBy5Handler}>DecrementBy5</button>
       
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
