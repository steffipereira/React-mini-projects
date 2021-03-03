import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Create from './components/Blog/Create'
import Home from './components/Home'
import TickTack from './components/TickTack'
import TodoList from './components/TodoList'
import BlogDetails from './components/Blog/BlogDetails'
import Projects from './components/Projects'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/ticktack" component={TickTack} />
          <Route exact path="/todolist" component={TodoList} />
          <Route path="/blog/create" component={Create} />
          <Route path="/blog/blogs/:id" component={BlogDetails} />
          <Route path="*">
            <p className="my-2">Cant find what you looking for. </p>
            <Link to="/"><p>Go to Home</p></Link>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
