// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, isActive, setActiveFilterId} = props
  const {id, language} = languageFilterDetails
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguageFilter = () => {
    setActiveFilterId(id)
  }

  return (
    <li>
      <button
        type="button"
        className={btnClassName}
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
