import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
    sayHello();
  }

  function sayHello() {
    console.log("Hello! This is a static message.");
  }

  function decrement() {
    setCount(prev => prev - 1);
  }

  function sayWelcome(message) {
    alert("Message: " + message);
  }

  function handleClick(e) {
    alert("I was clicked");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>React Event Examples</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>

      <hr />

      <button onClick={(e) => handleClick(e)}>Synthetic Event - Click</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
