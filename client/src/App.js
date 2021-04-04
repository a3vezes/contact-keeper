import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './componenents/layout/Navbar'
import Home from './componenents/pages/Home'
import About from './componenents/pages/About'
import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import Register from './componenents/auth/Register'
import Login from './componenents/auth/Login'

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
        </Router>
      </ContactState>
    </AuthState>
  )
}

export default App
