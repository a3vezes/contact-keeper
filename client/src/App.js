import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './componenents/layout/Navbar'
import Home from './componenents/pages/Home'
import About from './componenents/pages/About'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
