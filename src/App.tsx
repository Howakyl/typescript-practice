import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './components/textField';
import { Counter } from './components/Counter';
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextField text="hello" person={{firstName: 'Kyle', lastName: 'Howard'}}
        handleChange={e => {
          console.log('changed!')
        }}
        />
        <Counter>
          {({count, setCount}) => (
          <div>
            {count}
            <button onClick={() => {
              setCount(count + 1)
              console.log("count: " , count)
            }}
            >click me!</button>
            </div>
          )}
        </Counter>
      </header>
    </div>
  );
}

export default App;
