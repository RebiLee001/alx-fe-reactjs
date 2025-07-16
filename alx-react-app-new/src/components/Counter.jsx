import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
        Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      </div>
  );
}

export default Counter;