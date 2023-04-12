// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  clickOnEmoji = () => {
    this.setState({isFeedback: true})
  }

  renderFeedbackQue = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="question-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="unorder-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                onClick={this.clickOnEmoji}
                type="button"
                className="emoji-btn"
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img className="love-image" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thank-heading">Thank You!</h1>
        <p className="para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isFeedback ? this.renderThankyou() : this.renderFeedbackQue()}
        </div>
      </div>
    )
  }
}

export default Feedback
