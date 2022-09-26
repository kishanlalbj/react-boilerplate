import React, { useState } from 'react';
import Header from './components/Header';

const App = () => {
  const [a] = useState([]);

  console.log('error');

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
