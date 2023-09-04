// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    imageUrl,
  } = repositoryDetails

  return (
    <li className="repository-items">
      <img src={imageUrl} className="image" alt={name} />
      <h1 className="name">{name}</h1>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="stats-icon"
          alt="stars"
        />
        <p className="text">{starsCount} stars</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="stats-icon"
          alt="forks"
        />
        <p className="text">{forksCount} forks</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="stats-icon"
          alt="open issue"
        />
        <p className="text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
