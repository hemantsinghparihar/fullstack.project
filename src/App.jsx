import { useState } from 'react'

 
// exercise 1.6-1.7
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClicks=()=>{
    const updatedGood=good+1;
    setGood(updatedGood)
    setTotal(updatedGood+neutral+bad)
    setAverage((updatedGood-bad)/(updatedGood+neutral+bad))
    setPositive((updatedGood /(updatedGood+neutral+bad)) * 100)
  }
  const handleNeutral=()=>{
    const updatedNeutral=neutral+1;
    setNeutral(updatedNeutral)
    setTotal(good+updatedNeutral+bad)
    setAverage((good-bad)/(good+updatedNeutral+bad))
    setPositive((good /(updatedNeutralClicks+good+bad)) * 100)
  }
  const handleBadClicks=()=>{
    const updatedBadClicks=bad+1;
    setBad(updatedBadClicks)
    setTotal(good+neutral+updatedBadClicks)
    setAverage((good-bad)/(good+neutral+updatedBadClicks))
    setPositive((good /(updatedBadClicks+neutral+good)) * 100)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClicks}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBadClicks}>bad</button>
      <h1>statics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  )
}

export default App