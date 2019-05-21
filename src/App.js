import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button/Button';

function App() {
  return (
    <div className="App">
      hi
      <Button
        size="lg"
        text="hi"
        color="cream"
        background="lightblue"
        onSubmit={() => {
          console.log('submit');
        }}
        padding="5px 20px"
      />
    </div>
  );
}

export default App;
