import './App.css';
import Button from './components/Button';
function App() {

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display-screen'>

        </div>
        <div className='btnsContainer'>
          <Button className='clear' symbol="c">C</Button>
          <Button className='percent' symbol="%">%</Button>
          <Button className='divide' symbol="/">/</Button>
          <Button className='nine' symbol="9">9</Button>
          <Button className='eight' symbol="8">8</Button>
          <Button className='seven'symbol="7">7</Button>
          <Button className='six' symbol="6">6</Button>
          <Button className='five' symbol="5">5</Button>
          <Button className='four' symbol="4">4</Button>
          <Button className='three' symbol="3">3</Button>
          <Button className='two' symbol="2">2</Button>
          <Button className='one' symbol="1">1</Button>
          <Button className='zero' symbol="0">0</Button>
          <Button className='mult' symbol="*">X</Button>
          <Button className='minus' symbol="-">-</Button>
          <Button className='add' symbol="+">+</Button>
          <Button className='decimal' symbol=".">.</Button>
          <Button className='equal' symbol="=">=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
