import { useState } from 'react'
import Button from './Button'
import Stastics from './Stastistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [percent, setPercent] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    // Compute updated good and all before setting the state
    const updatedGood = good + 1;
    const updatedAll = all + 1; // Add one since feedback increases by 1
  
    setGood(updatedGood);
    setAll(updatedAll);
  
    // Calculate the total score and average
    const totalScore = updatedGood - bad; // Score: good = +1, bad = -1
    const updateAverage = totalScore / updatedAll; // Calculate average
    const updatedPercent = (updatedGood / updatedAll) * 100; // Positive feedback percentage

    setAverage(updateAverage)
    setPercent(updatedPercent)
  
    // Log values for debugging
    console.log("good:", updatedGood);
    console.log("all:", updatedAll);
    console.log("totalscore:", totalScore);
    console.log("average score:", average);
    console.log("positive feedback percentage:", percent);
  };
  


  const handleBad =()=>{
    const updatedBad = bad + 1;
const updatedAll = all + 1;

setBad(updatedBad)
    setAll(updatedAll)
   

    const totalScore = good - updatedBad
    const updateAverage = totalScore / updatedAll
    const updatedPercent = (good/updatedAll) * 100
    setAverage(updateAverage)
    setPercent(updatedPercent)

   
    console.log(updatedBad)
    
    console.log(percent)
    
    console.log(average)
  }
  const handleNeutral =()=>{
    const updatedNeutral = neutral + 1;
    const updatedAll = all + 1;
    setNeutral(updatedNeutral)
    setAll(updatedAll)

    const totalScore = good - bad
    const updateAverage = totalScore / updatedAll
    const updatedPercent = (good/updatedAll) * 100

    setAverage(updateAverage)
    setPercent(updatedPercent)

    console.log(neutral)
    
    console.log(percent)
    
    console.log(average)


  }

  if (all === 0){
    return(
      <>
            <Button text='good' value={handleGood}/><Button text='neutral' value={handleNeutral}/><Button text='bad' value={handleBad}/>

      <p>no feedbacks given</p>
      </>
    )
  }

  return (
    <div>
<Button text='good' value={handleGood}/><Button text='neutral' value={handleNeutral}/><Button text='bad' value={handleBad}/>
<Stastics text='good' state={good}/>
<Stastics text='bad' state={bad}/>
<Stastics text='neutral' state={neutral}/>
<Stastics text='all' state={all}/>
<Stastics text='average' state={average}/>
<Stastics text='positive' state={percent}/>  
</div>
  )
}

export default App