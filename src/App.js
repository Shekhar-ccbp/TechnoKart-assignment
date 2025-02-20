import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App
