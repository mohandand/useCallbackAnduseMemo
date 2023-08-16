import React, { useState, useCallback } from 'react';
import Child from './Child';
export default function App() {
  const [count, setCount] = useState(0);
  const [val, setValue] = useState('');

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [val]
  );
  return (
    <div>
      I am Parent <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <span>value: {count}</span>
      <input onChange={handleChange} />
      {val}
      <Child count={count} />
    </div>
  );
}
