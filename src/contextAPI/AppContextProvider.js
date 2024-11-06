const { createContext, useState } = require("react");

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(
    sessionStorage.getItem("isLoggedIn") === "true"
  );
  return (
    <AppContext.Provider value={{ isLogin, setLogin }}>
      {children}
    </AppContext.Provider>
  );
};
