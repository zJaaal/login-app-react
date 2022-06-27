import AppRouter from "./AppRouter";
import "./App.css";
import { UserContext } from "./UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ id: 1, name: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
