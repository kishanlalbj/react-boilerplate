import React, { useState } from 'react';
import Header from './components/Header';

const App = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <Header />
      <h1>{count}</h1>
      <button onClick={handleIncrement}> Increment </button>
      <button onClick={handleDecrement}> Decrement </button>
    </div>
  );
};

export default App;
