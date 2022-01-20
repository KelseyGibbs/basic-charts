import React from 'react';
import './App.css';
import BasicLineChart from './components/BasicLineChart/BasicLineChart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicLineChart
          width= {800}
          height= {400}
          top= {10}
          bottom= {100}
          left= {50}
          right= {50}
          fill= {'red'} />
      </header>
    </div>
  );
}

export default App;
