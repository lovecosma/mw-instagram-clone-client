import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import UploadPosts from "./components/UploadPosts"
import PostsContainer from "./containers/PostsContainer"
import SignUp from "./components/SignUp"
import NavContainer from "./containers/NavContainer"
import Login from "./components/Login"
import {useEffect} from "react"
import {useDispatch} from "react-redux"
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    let user = localStorage.getItem("user")
    if(user !== ""){
      let userInfo = JSON.parse(user)
      dispatch({type: "LOGIN", user: {...userInfo}})
    }
  }, [])
  
    return (
      <div>
        <Router>
          <NavContainer />
          <Switch>
            <Route exact path="/posts" component={PostsContainer}></Route>
            <Route exact path="/upload" component={UploadPosts} ></Route>
            <Route exact path="/signup"><SignUp/></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;
