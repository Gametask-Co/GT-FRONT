import React, { createContext, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";

// the args is only formats, and not default values!
const AuthContext = createContext({
  signed: false,
  token: "",
  user: {},
  signIn() {},
  signOut() {},
});

const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState({}); // for test
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await localStorage.getItem("@RNAuth:user");
      const storagedToken = await localStorage.getItem("@RNAuth:token");

      if (storagedUser && storagedToken) {
        api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  async function signIn(email, password) {
    // joaozinho - teacher
    // joaozinho01 - student
    await api
      .post("/session", {
        // email: "joaozinho@gametask.com",
        // password: "test123",
        email,
        password,
      })
      .then(function (res) {
        // set header to all requests
        api.defaults.headers["Authorization"] = `Bearer ${res.data.token}`;

        localStorage.setItem("@RNAuth:user", JSON.stringify(res.data));
        localStorage.setItem("@RNAuth:token", res.data.token);
        setUser(res.data);
        setLoading(false);

        history.push("/dashboard");
      })
      .catch(function (error) {
        console.log(error, "Auth user error!");
      });
  }

  function signOut() {
    console.log("signOut");
    // await localStorage.clear().then(() => {
    //   setUser(null);
    //   history.push("/");
    // });

    localStorage.clear();
    setUser(null);
    // history.push("/");
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// hook to send context
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
