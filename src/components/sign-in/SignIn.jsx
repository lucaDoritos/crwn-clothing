import React from 'react'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './signin.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required />
          <FormInput
            name='password'
            handleChange={this.handleChange}
            type="password"
            value={this.state.email}
            label="password"
            required />
          <div className='buttons'>
            <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} value="Submit Form" isGoogleSignIn={signInWithGoogle}>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn