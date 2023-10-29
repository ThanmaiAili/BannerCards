// Write your code here.

import './index.css'

const BannerCard = props => {
  const {eachCard} = props
  const {headerText, description, className} = eachCard
  return (
    <li className={className}>
      <div>
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button type="button" className="card-button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCard
