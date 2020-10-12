import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  AsyncStorage,
} from "react";

import api from "../services/api";

// the args is only formats, and not default values!
const AuthContext = createContext({
  signed: true,
  token: "",
  user: {},
  signIn() {},
  signOut() {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({}); // for test
  //   const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await localStorage.getItem("@RNAuth:user");
      const storagedToken = await localStorage.getItem("@RNAuth:token");

      if (storagedUser && storagedToken) {
        api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
      }
    }
  }, []);

  async function signIn() {
    const response = await api
      .post("/user", {
        email: "",
        password: "",
      })
      .then(function (res) {
        console.log("Auth user ok!", res);

        // set header to all request
        api.defaults.headers["Authorization"] = `Bearer ${response.token}`;

        localStorage.setItem("@RNAuth:user", JSON.stringify(response.user));
        localStorage.setItem("@RNAuth:token", response.token);
      })
      .catch(function (error) {
        console.log(error, "Auth user error!");
      });
  }

  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, token: "token123", user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// export default AuthContext;

// hook to send context
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
