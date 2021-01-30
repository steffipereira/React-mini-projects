import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Create from './components/Create'
import Home from './components/Home'
import BlogDetails from './components/BlogDetails'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/blogs/:id" component={BlogDetails} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
