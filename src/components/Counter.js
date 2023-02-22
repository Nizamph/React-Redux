import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
const Counter = () => {
 const dispatch = useDispatch();
 const counter =  useSelector(state => state.counter);
 const [isShow, setIsShow] = useState(false)
const incrementHandler = () => {
  dispatch({ type: "changeCount", amount: 1 })
};

const decrementHandler = () => {
    dispatch({ type: "changeCount", amount: -1})
}
  const toggleCounterHandler = () => {
    setIsShow((prevState) => {
      return !prevState
    })
  };

  const incrementBy5Handler = () => {
    dispatch({ type:"changeCount",amount:5 })
  }

  const decrementBy5Handler = () => {
    dispatch({ type:"changeCount",amount:-5 })
  }
   return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      {!isShow && <button onClick={incrementHandler}>Increment</button>}
       {!isShow && <button onClick={decrementHandler}>Decrement</button>}
       {!isShow && <button onClick={incrementBy5Handler}>IncrementBy5</button>}
       {!isShow && <button onClick={decrementBy5Handler}>DecrementBy5</button>}
       
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
