import './App.scss';
import Header from "./Header/Header"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from '../pages/Main/Main'
import Todos from '../pages/Todos/Todos'
import TodosTimeline from '../pages/TodosTimeline/TodosTimeline'
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <div className={"App"}>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/todostimeline/:id?" component={TodosTimeline} exact/>
          <Route path="/todos/:id" component={Todos} exact/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
