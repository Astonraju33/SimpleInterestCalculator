import { TextField,Stack,Button, tablePaginationClasses } from '@mui/material'
import './App.css'
import { useState } from 'react'
function App() {
  //create state to store data
  const [Interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)

  const[principleAmountValid,setPrincipleAmountValid] = useState(true)
  const[rateAmountValid,setRateAmountValid] = useState(true)
  const[yearAmounttValid,setYearAmountValid] = useState(true)

  console.log(principle);


  const handleReset = ()=>{
    //reset all state
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearAmountValid(true)
  }

  
  const handleValidation = (tag)=>{
    console.log("Inside handleValidation");
    const{value,name} = tag 
    console.log(value,name);
    console.log((!!value.match(/^[0-9]*.?[0-9]+$/)));
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      //valid
      if(name=="principle"){
        setPrinciple(value)
        setPrincipleAmountValid(true)
      }else if(name=="rate"){
        setRate(value)
        setRateAmountValid(true)
      }else{
        setYear(value)
        setYearAmountValid(true)
      }
    }else{
      //invalid
      if(name=="principle"){
        setPrinciple(value)
        setPrincipleAmountValid(false)
      }else if(name=="rate"){
        setRate(value)
        setRateAmountValid(false)
      }else{
        setYear(value)
        setYearAmountValid(false)
      }
    }

  }

  const handleCalculate = ()=>{
    if(principle && rate && year){
      setInterest(principle*year*rate/100)
    }else{
      alert("Please fill the form completely")
    }
  }

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
    <div style={{width:'600px'}} className='bg-light p-5 rounded'> 
       <h3>Simple Interest Calculator</h3>
       <p>Calculate you simple Interest easily</p>
       <div className='d-flex justify-content-center align-items-center bg-warning p-5 rounded shadow flex-column text-light'>
        <h1>₹{Interest}</h1>
        <p className='fw-bolder'>Total simple Interest</p>

       </div>

      <form className='mt-5'>
      {/*principle*/}
      <div className='mb-3'>
      <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount " variant="outlined" value={principle || ""} onChange={e=>handleValidation(e.target)} name='principle'/>
      {!principleAmountValid && <div className="text-danger mb-3">*Invalid user input</div>  }
      </div>
      {/*rate*/}
      <div className='mb-3'>
      <TextField className='w-100' id="outlined-basic-rate" label="Rate Of Interest (p.a) % " variant="outlined" value={rate || ""} onChange={e=>handleValidation(e.target)} name='rate' />
      {!rateAmountValid && <div className="text-danger mb-3">*Invalid user input</div> }   
      </div>
      {/*year*/}
      <div className='mb-3'>
      <TextField className='w-100' id="outlined-basic-time" label="Time Period (Yr) " variant="outlined" value={year || ""} onChange={e=>handleValidation(e.target)} name='year' />
      {!yearAmounttValid && <div className="text-danger mb-3">*Invalid user input</div>   } 
      </div>
      {/*btn collection*/}
      <Stack direction="row" spacing={2}>
      <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateAmountValid || !yearAmounttValid} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">CALCULATE</Button>
      <Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">RESET</Button>
      </Stack>

      </form>

       </div>
    </div>
  )
}

export default App
