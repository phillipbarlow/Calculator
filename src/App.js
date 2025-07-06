import './App.css';

function App() {
  return (
    <div className="App">
      <div className='calculator'>
        <div className='display-screen'>

        </div>
        <div className='btnsContainer'>
          <button className='clear'>C</button>
          <button className='percent'>%</button>
          <button className='divide'>/</button>
          <button className='nine'>9</button>
          <button className='eight'>8</button>
          <button className='seven'>7</button>
          <button className='six'>6</button>
          <button className='five'>5</button>
          <button className='four'>4</button>
          <button className='three'>3</button>
          <button className='two'>2</button>
          <button className='one'>1</button>
          <button className='zero'>0</button>
          <button className='mult'>X</button>
          <button className='minus'>-</button>
          <button className='add'>+</button>
          <button className='decimal'>.</button>
          <button className='equal'>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
