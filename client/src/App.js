import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './componenents/layout/Navbar'
import Alerts from './componenents/layout/Alerts'
import Home from './componenents/pages/Home'
import About from './componenents/pages/About'
import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import Register from './componenents/auth/Register'
import Login from './componenents/auth/Login'
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './componenents/routing/PrivateRoute'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Navbar />
            <div className='container'>
              <Alerts />
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  )
}

export default App
