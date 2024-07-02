import UserInput from "./components/userInput"
import { useState } from "react"
import Result from "./components/result"
import logo from '../src/assets/investment-calculator-logo.png'
function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})
function handleChange(inputIdentifier, newValue) {
    setuserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        }
    })
}
  

  const isInputValid = userInput.duration >= 1
  
  return (
    <div>
      <header id="header">
        <img src={logo} alt="logo" />
        <h1>Investment calculator</h1>
      </header>
      <UserInput onChange={handleChange} userInput={userInput} />
      {isInputValid ? <Result input={userInput} /> : <p className="center">Duration must not be less than 1</p>}
    </div>
  )
}

export default App
