import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topicsList,
    topic: topicsList[0].id,
    displayTopic: topicsList[0].displayText,
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
    const requiredTopic = topicsList.filter(eachTopic => eachTopic.id === topic)
    this.setState({displayTopic: requiredTopic[0].displayText})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegistered, showError, displayTopic} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          displayTopic,
          topicsList,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
