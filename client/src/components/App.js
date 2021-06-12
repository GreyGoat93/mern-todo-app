import './App.scss';
import Header from "./Header/Header"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from '../pages/Main/Main'
import Todos from '../pages/Todos/Todos'
import Footer from './Footer/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {console.log("t0")})

  return (
    <Router>
      <div className={"App"}>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/todos/:id" component={Todos} exact/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
