import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmiResult, setBMIResult] = useState(null)

  // const calculateBMI = () => {
  //   const weightNum = parseFloat(weight)
  //   const heightNum = parseFloat(height)
  //   if (weightNum && heightNum) {
  //     const bmi = weightNum / ((heightNum / 100) * (heightNum / 100))
  //     setBMIResult(bmi.toFixed(1))
  //   }
  //   else {
  //     setBMIResult(null)
  //   }
  // }
  const handleChange=(e)=>{
    setWeight(e.target.value)
    
    //calculateBMI()
    const weightNum = parseFloat(e.target.value)
    const heightNum = parseFloat(height)
    if (weightNum && heightNum) {
      const bmi = weightNum / ((heightNum / 100) * (heightNum / 100))
      setBMIResult(bmi.toFixed(1))
    }
    else {
      setBMIResult(null)
    }
  }
  const handleChange1=(e)=>{
    setHeight(e.target.value)
    
    //calculateBMI()
    const weightNum = parseFloat(weight)
    const heightNum = parseFloat(e.target.value)
    if (weightNum && heightNum) {
      const bmi = weightNum / ((heightNum / 100) * (heightNum / 100))
      setBMIResult(bmi.toFixed(1))
    }
    else {
      setBMIResult(null)
    }
  }

  //(e) => setWeight(e.target.value)
  return (
    <>

      <div className='app-main-div'>
        <div className='app-main-div2'>
          <h1 className='heading'>BMI Calculator</h1>
        <div className='app-sub-div1'>
          <label>
            Weight(kg):{weight}
            <br></br>
            <input type='range' min={1} max={200} value={weight} onChange={handleChange} className='weight-range'></input>
          </label>
          <br></br>
          <label>
            Height(cm):{height}
            <br></br>
            <input type='range' min={1} max={250} value={height} onChange={handleChange1} className='height-range'></input>
          </label><br></br>
          <label>
            {/* <button onClick={calculateBMI}>calculate</button> */}
            <br></br>
            Your BMI is
            <br></br>
            <input value={bmiResult} className='input-box'></input>
          </label>
        </div>
      </div>
</div>
    </>
  )
}

export default App
