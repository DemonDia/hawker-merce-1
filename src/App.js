import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from "./components/navbar"
import Home from "./pages/home"
import Menu from "./pages/menu"
import Cart from "./pages/cart"
import Checkout from "./pages/checkout"
import Receipt from "./pages/receipt"
function App() {
  return (
    <div className="App">

      <Router>
      <Navbar/>
        <Switch>
         
          <Route exact path = "/hawker-merce-1/"><Home/></Route>
          <Route exact path = "/hawker-merce-1/menu"><Menu/></Route>
          <Route exact path = "/hawker-merce-1/cart"><Cart/></Route>
          <Route exact path = "/hawker-merce-1/checkout"><Checkout/></Route>
          <Route exact path = "/hawker-merce-1/receipt"><Receipt/></Route>
          {/* // <Route exact path = "/error"></Route> */}
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
