import {Component} from 'react'
import {CustomButton} from './styled/styledcomponents'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]
console.log(languageGreetingsList)
// Replace your code here
class App extends Component {
  state = {
    currentBtn: languageGreetingsList[0],
    currentTab: languageGreetingsList[0].id,
  }

  changeCurrentstete = value => {
    this.setState({currentBtn: value, currentTab: value.id})
  }

  render() {
    const {currentBtn, currentTab} = this.state
    const {imageUrl, imageAltText} = currentBtn

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="button-container">
            {languageGreetingsList.map(e => (
              <li className="list" key={e.id}>
                <CustomButton
                  type="button"
                  onClick={() => {
                    this.changeCurrentstete(e)
                  }}
                  check={e.id === currentTab}
                >
                  {e.buttonText}
                </CustomButton>
              </li>
            ))}
          </ul>

          <img className="image" src={imageUrl} alt={imageAltText} />
        </div>
      </div>
    )
  }
}

export default App
