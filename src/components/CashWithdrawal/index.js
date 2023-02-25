// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {total: 2000}

  onDeduct = value => {
    this.setState(prevState => {
      const currentValue = prevState.total - value
      if (currentValue < 0) {
        return {total: prevState.total}
      }
      return {total: currentValue}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {total} = this.state
    return (
      <div className="main-container">
        <div className="card">
          <div className="name-tab">
            <p>S</p>
            <h1>Sarah Williams</h1>
          </div>
          <div className="amount-tab">
            <p>Your Balance</p>
            <div className="amount">
              <p className="total">{total}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-tab">
            {denominationsList.map(denomination => (
              <DenominationItem
                value={denomination.value}
                key={denomination.id}
                onDeduct={this.onDeduct}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
