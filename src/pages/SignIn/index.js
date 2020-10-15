import React from "react";

import Layout from "../../components/Layout";

import { useAuth } from "../../contents/auth";

function SignIn() {
  const { signed, signIn } = useAuth();

  console.log("signed", signed);

  // auth is runing on context
  async function handleSignIn() {
    await signIn();
  }

  return (
    <Layout>
      <h1>SignIn</h1>
      <button onClick={handleSignIn}>Sign In</button>
    </Layout>
  );
}

export default SignIn;
