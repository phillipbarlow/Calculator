import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { create, all } from 'mathjs'

function App() {
  const [text,setText] = useState(['0']);
  const [result,setResult] = useState("");
  const [isValid,setIsValid] = useState(true);
  const [isvalidResult, setIsvalidResult] = useState(true)
  const config = { }
  const math = create(all, config)

  function validation(nextVal = null){
    const number = [...text,nextVal].filter((num)=> num !== " ");
    const first = number[0];
    const last = number[number.length -1]
    const secondLast = number[number.length -2];

    // checks first button + updates UI error message
    if(/[+\-*/%]/.test(first)){
      setIsvalidResult(false)
      return false;
    }
     // checks secondLast and last button + updates UI error message
    if(/[+\-*/%]/.test(secondLast) && /[+\-*/%]/.test(last)){
      setIsvalidResult(false)
      return false
    }
    // removes error message when input is correct
    setIsvalidResult(true)
    return true
  }
  function handleClear(){
    setText(['0'])
    setResult("")
  }

  // removes initial 0 when user starts inputting
  function handleAddToTxt(val){
    const isVal = validation(val)
    if(isVal){
      setText((curr) =>{
        if(curr.length === 1 && curr[0] === '0' && /^[0-9]$/.test(val)){
          return [val]
        }
        return [...curr,val,' ']
      })
      setIsValid(true)
    }
  }

  function handleEvaluation(){
    const num = text.filter((n)=> n !== " ").join("");
      setResult(math.evaluate(num))
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display-screen'>
          <div className='numberOutput'>
            {isValid?text: "invalid"}
          </div>
          <div className='resultOutput'>
            {isvalidResult?result: "invalid"}
          </div>
        </div>
        <div className='btnsContainer'>
          <Button className='clear' handleClick = {handleClear}>C</Button>
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
          <Button className='equal' handleClick={handleEvaluation}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
