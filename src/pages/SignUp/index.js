import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../contents/auth';

import MainForm from './MainForm';

function SignUp() {
  const { signed, loading } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === true) {
        history.push('/signin');
      }
    }
  }, [loading, signed]);

  return <MainForm />;
}

export default SignUp;
