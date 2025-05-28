import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  RegisterContainer,
  RegisterImg,
  Form,
  RegisterHeading,
  InputContainer,
  Label,
  Input,
  Select,
  RegisterButton,
  ErrorMsg,
} from './styledComponents'

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        topicsList,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          registerName()
          const {history} = props
          history.replace('/')
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        const dummy = event.target.value

        changeTopic(event.target.value)
      }

      return (
        <div>
          <Header />
          <div>
            <RegisterContainer>
              <RegisterImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <Form onSubmit={submitRegistration}>
                <RegisterHeading>Let us join</RegisterHeading>
                <InputContainer>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    id="name"
                    value={name}
                    type="text"
                    onChange={onChangeName}
                    placeholder="Your name"
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="topic">Topics</Label>
                  <Select id="topic" value={topic} onChange={onChangeTopic}>
                    {topicsList.map(each => (
                      <option value={each.id} key={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </Select>
                </InputContainer>
                <RegisterButton type="submit">Register Now</RegisterButton>
                {showError === true ? (
                  <ErrorMsg>Please enter your name</ErrorMsg>
                ) : (
                  ''
                )}
              </Form>
            </RegisterContainer>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
