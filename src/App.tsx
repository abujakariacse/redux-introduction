import {
  decrement,
  increment,
  incrementByFive,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex items-center border p-16 bg-gray-200 rounded-md">
        <button
          onClick={() => dispatch(incrementByFive({ value: 5 }))}
          className="px-3 py-2 bg-green-500 text-white rounded-md mr-4"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 bg-green-500 text-white rounded-md"
        >
          Increment
        </button>
        <h1 className="mx-4 text-lg font-medium">Counter: {count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 bg-red-500 text-white rounded-md"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
