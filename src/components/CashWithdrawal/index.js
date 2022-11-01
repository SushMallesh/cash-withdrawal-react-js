import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {denomination: 2000}

  onClickDenomination = value => {
    this.setState(prevState => ({denomination: prevState.denomination - value}))
  }

  render() {
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    const {denomination} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="withdrawal-container">
          <div className="name-container">
            <p className="name-icon">{initial}</p>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div>
              <p className="amount">{denomination}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="choose-amount-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="values-container">
              {denominationsList.map(eachValue => (
                <DenominationItem
                  onClickDenomination={this.onClickDenomination}
                  eachValue={eachValue}
                  key={eachValue.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
