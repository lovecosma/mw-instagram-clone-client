import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import UploadPosts from "./components/UploadPosts"
import Posts from "./containers/Posts"
import SignUp from "./components/SignUp"
import NavContainer from "./containers/NavContainer"

function App() {
  
    return (
      <div>
        <Router>
          <NavContainer />
          <Switch>
            <Route exact path="/posts" component={Posts}></Route>
            <Route exact path="/upload" component={UploadPosts} ></Route>
            <Route exact path="/signup"><SignUp/></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;
