import './App.css';
import Button from './components/Button'
function App() {
  return (
    <div className="App">
      <div className='calculator'>
        <div className='display-screen'>

        </div>
        <div className='btnsContainer'>
          <Button className='clear'>C</Button>
          <Button className='percent'>%</Button>
          <Button className='divide'>/</Button>
          <Button className='nine'>9</Button>
          <Button className='eight'>8</Button>
          <Button className='seven'>7</Button>
          <Button className='six'>6</Button>
          <Button className='five'>5</Button>
          <Button className='four'>4</Button>
          <Button className='three'>3</Button>
          <Button className='two'>2</Button>
          <Button className='one'>1</Button>
          <Button className='zero'>0</Button>
          <Button className='mult'>X</Button>
          <Button className='minus'>-</Button>
          <Button className='add'>+</Button>
          <Button className='decimal'>.</Button>
          <Button className='equal'>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
