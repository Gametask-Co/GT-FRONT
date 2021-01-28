import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Success from './Success';

const steps = [{ id: 'user' }, { id: 'personal' }, { id: 'success' }];

const defaultData = {
  email: '',
  password: '',
  terms: false,
  avatar: '',
  name: '',
  gender: false,
  birthday: '',
  teacher: false,
};

const MainForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case 'user':
      return <UserDetails {...props} />;
    case 'personal':
      return <PersonalDetails {...props} />;
    case 'success':
      return <Success />;
    default:
      return;
  }
};

export default MainForm;
