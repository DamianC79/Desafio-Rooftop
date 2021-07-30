import './App.css';
import Home from './components/Home';
import Catalogo from './components/Catalogo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  
 
  
  return (
    <>
        <Router>

          <Switch>

            <Route exact path="/" home={Home}/>
            <Route exact path="/items" home={Catalogo}/>

          </Switch>

        </Router>
      </>
  );
}

export default App;
