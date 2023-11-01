import React, { useState } from 'react'
import './Calc.css'


function Calc() {
const [input,setInput]=useState("")
const [result,setResult]=useState("")
const handleClick=(value)=>{
  setInput(input+value)
}

const handleClear=()=>{
  setInput('')
  setResult('')
}

const handleCalculate = () => {
  try {
    const calculatedResult = eval(input);
    console.log('Calculated Result:', calculatedResult);
    setInput(calculatedResult.toString()); 
    setResult(calculatedResult.toString());
  } catch (error) {
    console.error('Error:', error);
    setResult('Error');
  }
};


const removeLast=()=>{
  setInput(input.slice(0, -1));
}



  return (
    
    <div className="container">
        <div className="wrapper">
            <div className="screen" >
           <input className='inputbox' value={input} readon/>
            </div>
            <div onClick={handleClear} className='btn light-gray' >
          AC
        </div>
        <div  onClick={()=>handleClick('%')}  className='btn light-gray' >
          %
        </div>
        <div onClick={()=>handleClick('.')}  className='btn light-gray' >.
        </div>
        <div  onClick={()=>handleClick('/')} className='btn orange'>
          /
        </div>
        <div onClick={()=>handleClick('7')} className='btn' >
          7
        </div>
        <div onClick={()=>handleClick('8')} className='btn' >
          8
        </div>
        <div onClick={()=>handleClick('9')} className='btn' >
          9
        </div>
        <div onClick={()=>handleClick('*')} className='btn orange' >
          X
        </div>
        <div onClick={()=>handleClick('4')} className='btn' >
          4
        </div>
        <div  onClick={()=>handleClick('5')} className='btn'>
          5
        </div>
        <div  onClick={()=>handleClick('6')} className='btn' >
          6
        </div>
        <div  onClick={()=>handleClick('+')} className='btn orange' >
          +
        </div>
        <div onClick={()=>handleClick('1')} className='btn'>
          1
        </div>
        <div  onClick={()=>handleClick('2')} className='btn'>
          2
        </div>
        <div  onClick={()=>handleClick('3')} className='btn'>
          3
        </div>
        <div  onClick={()=>handleClick('-')} className='btn orange' >
          -
        </div>
        <div onClick={removeLast}  className='btn zero' >
        <i class="fa-solid fa-2x fa-delete-left" ></i>

        </div>
        <div  onClick={()=>handleClick('0')} className='btn' >
          0
        </div>
        <div onClick={handleCalculate} className='btn'>
         =
        </div>
        </div>
    </div>
    
  )
}

export default Calc