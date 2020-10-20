import React, { createContext, useState, useEffect, useContext } from "react";

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
  const [user, setUser] = useState({}); // for test
  // const [user, setUser] = useState(null);

  useEffect(() => {
    function loadStoragedData() {
      const storagedUser = localStorage.getItem("@RNAuth:user");
      const storagedToken = localStorage.getItem("@RNAuth:token");

      // const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
      // const storagedToken = await AsyncStorage.getItem("@RNAuth:token");
      console.log("storagedUser ===", storagedUser);

      if (storagedUser && storagedToken) {
        api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
      }
    }
    console.log("loadStoragedData");

    loadStoragedData();
  }, []);

  async function signIn() {
    // joaozinho - teacher
    // joaozinho01 - student
    await api
      .post("/session", {
        email: "joaozinho@gametask.com",
        password: "test123",
      })
      .then(function (res) {
        // set header to all requests
        api.defaults.headers["Authorization"] = `Bearer ${res.data.token}`;

        localStorage.setItem("@RNAuth:user", JSON.stringify(res.data));
        localStorage.setItem("@RNAuth:token", res.data.token);
        setUser(res.data);
      })
      .catch(function (error) {
        console.log(error, "Auth user error!");
      });
  }

  async function signOut() {
    // AsyncStorage.clear().then(() => {
    await localStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
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
