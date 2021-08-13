import LoginPage from "./Auth/Login_Page";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SignUp from "./Auth/Signup_Page";
import HomePage from "./Pages/Homepage";
import NavBar from "./Components/Navbar";
import AddNotes from "./Pages/AddNotes";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          {localStorage.getItem("auth") ?  <Redirect exact from="/home" to="/" /> : <Redirect to="/login" />}
        </Switch>
        <Switch>
        <Route exact path="/" component={HomePage} />
        </Switch>
        <Switch>
        <Route exact path="/login" component={LoginPage} />
        </Switch>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
        </Switch>
        <Switch>
       { localStorage.getItem("auth") ? <Route exact path="/add" component={AddNotes} /> : <Redirect to="/login" />}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
