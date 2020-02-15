import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Login from './LoginPage/Login'
import Posts from './PostsPage/Posts'
import Context from './Context'
import Account from './AccountPage/Account'
import Profile from './Profile/Profile'

const contextDefault = {
  username: '',
  password: ''
}

function App() {
  return (
    <Context.Provider value={contextDefault}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;