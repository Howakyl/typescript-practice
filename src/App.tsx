import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './components/textField';

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
      </header>
    </div>
  );
}

export default App;
