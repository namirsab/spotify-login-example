import "./App.css";

import { Switch, Route } from "react-router-dom";
import useToken from "./hooks/useToken";
import Authorized from "./components/Authorized";
import Playlists from "./pages/Playlists";

function App() {
  const [, , clearToken] = useToken();
  return (
    <div className="App">
      <Switch>
        <Route path="/playlists">
          <Authorized>
            <Playlists />
          </Authorized>
        </Route>
        <Route path="/public">This path is public</Route>
        <Route path="/">
          <Authorized>
            You are logged in
            <button onClick={() => clearToken()}>Log Out</button>
          </Authorized>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
