import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex items-center border p-16 bg-gray-200 rounded-md">
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
