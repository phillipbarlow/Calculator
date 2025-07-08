import { useState } from 'react';
import './App.css';
import Button from './components/Button'

function App() {
  const [text,setText] = useState("");
  const [result,setResult] = useState("");
  function handleAddToTxt(val){
    return(

      setText((curr) => [...curr,val," "])
    )
  }
  return (
    <div className="App">
      <div className='calculator'>
        <div className='display-screen'>
          <div className='numberOutput'>
            {text}
          </div>
          <div className='resultOutput'>
            {result}
          </div>
        </div>
        <div className='btnsContainer'>
          <Button className='clear' handleClick = {() =>handleAddToTxt(text)}>C</Button>
          <Button symbol={"%"} className='percent' handleClick={handleAddToTxt}>%</Button>
          <Button symbol={"/"} className='divide' handleClick={handleAddToTxt}>/</Button>
          <Button symbol={"9"} className='nine' handleClick={handleAddToTxt}>9</Button>
          <Button symbol={"8"} className='eight' handleClick = {handleAddToTxt}>8</Button>
          <Button symbol={"7"} className='seven' handleClick={handleAddToTxt}>7</Button>
          <Button symbol={"6"} className='six' handleClick={handleAddToTxt}>6</Button>
          <Button symbol={"5"} className='five' handleClick={handleAddToTxt}>5</Button>
          <Button symbol={"4"} className='four' handleClick={handleAddToTxt}>4</Button>
          <Button symbol={"3"} className='three' handleClick={handleAddToTxt}>3</Button>
          <Button symbol={"2"} className='two' handleClick={handleAddToTxt}>2</Button>
          <Button symbol={"1"} className='one' handleClick={handleAddToTxt}>1</Button>
          <Button symbol={"0"} className='zero' handleClick={handleAddToTxt}>0</Button>
          <Button symbol={"*"} className='mult' handleClick={handleAddToTxt}>X</Button>
          <Button symbol={"-"} className='minus' handleClick={handleAddToTxt}>-</Button>
          <Button symbol={"+"} className='add' handleClick={handleAddToTxt}>+</Button>
          <Button symbol={"."} className='decimal' handleClick={handleAddToTxt}>.</Button>
          <Button className='equal'>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
