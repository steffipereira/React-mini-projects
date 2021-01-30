import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
