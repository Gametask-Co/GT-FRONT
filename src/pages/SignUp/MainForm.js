import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Success from './Success';

class MainForm extends Component {
  state = {
    step: 1,
    email: '',
    password: '',
    avatar: '',
    name: '',
    gender: '',
    birthday: '',
    teacher: false,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      email,
      password,
      avatar,
      name,
      gender,
      birthday,
      teacher,
    } = this.state;
    const values = { email, password, avatar, name, gender, birthday, teacher };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <Success />;
    }
  }
}

export default MainForm;
