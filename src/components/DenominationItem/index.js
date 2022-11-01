import './index.css'

const DenominationItem = props => {
  const {eachValue, onClickDenomination} = props
  const {value} = eachValue

  const onClickValue = () => {
    onClickDenomination(value)
  }

  return (
    <li className="value-item">
      <button onClick={onClickValue} type="button" className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
