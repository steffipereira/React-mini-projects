import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Create from './components/Create'
import Home from './components/Home'
import TickTack from './components/TickTack'
import BlogDetails from './components/BlogDetails'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Navbar />
        <Switch>
          <Route exact path="/" component={TickTack} />
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/blogs/:id" component={BlogDetails} />
          <Route path="*">
            <p className="my-2">Cant find what you looking for. </p>
            <Link to="/"><p>Go to Home</p></Link>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
