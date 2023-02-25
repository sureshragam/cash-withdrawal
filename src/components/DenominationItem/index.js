// Write your code here
import './index.css'

function DenominationItem(props) {
  const {value, onDeduct} = props
  const deductMoney = () => {
    onDeduct(value)
  }

  return (
    <li>
      <button type="button" onClick={deductMoney}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
