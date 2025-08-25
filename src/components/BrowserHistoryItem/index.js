import './index.css'

import {Component} from 'react'

class BrowserHistoryItem extends Component {
  render() {
    const {eachHistory, deleteHistory} = this.props

    const {timeAccessed, logoUrl, title, domainUrl, id} = eachHistory

    const onDelete = () => {
      deleteHistory(id)
    }

    return (
      <li className="list-containers">
        <div className="items-container">
          <p className="time">{timeAccessed}</p>
          <div className="min-headers">
            <img src={logoUrl} className="domain-logo" alt="domain logo" />
            <div>
              <p className="title">{title}</p>
              <p className="domainUrl">{domainUrl}</p>
            </div>
          </div>
        </div>
        <div>
          <button className="btn" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default BrowserHistoryItem
