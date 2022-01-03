import './App.css';
import Header from './component/Header.js';
import Home from './component/Home.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route to='/' exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
