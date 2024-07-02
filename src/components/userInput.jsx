

export default function UserInput({onChange, userInput}) {
    
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input type="number" required value={userInput.initialInvestment} onChange={(e)=>onChange('initialInvestment', e.target.value)}/>
        </p>
        <p>
          <label htmlFor="initial-investment">Annual Investment</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(e)=>onChange('annualInvestment', e.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(e)=>onChange('expectedReturn', e.target.value)}/>
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" required value={userInput.duration} onChange={(e)=>onChange('duration', e.target.value)}/>
        </p>
      </div>
    </div>
  );
}
