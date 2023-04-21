// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, onSelectSuggestion} = props
  const {suggestion} = details

  const onClick = () => {
    onSelectSuggestion(suggestion)
  }

  return (
    <li className="item_container">
      <p>{suggestion}</p>
      <button type="button" onClick={onClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
