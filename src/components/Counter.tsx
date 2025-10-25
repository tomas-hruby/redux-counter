import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { incrementAsync, decrementAsync } from "../state/counter/counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div>Counter</div>
      <div>
        <button onClick={() => dispatch(decrementAsync(5))}>Decrement</button>
        <span style={{ margin: "0 20px", fontSize: "24px" }}>{count}</span>
        <button onClick={() => dispatch(incrementAsync(5))}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
