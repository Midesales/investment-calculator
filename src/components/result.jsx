import {calculateInvestmentResults, formatter} from '../util/investment'

export default function Result({ input }) {
    const resultData = calculateInvestmentResults(input)
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment
    
    return (
        <table id='result'>
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {resultData.map((result) => {
                    const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment 
                    const totalAmountInvested = result.valueEndOfYear - totalInterest
                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}