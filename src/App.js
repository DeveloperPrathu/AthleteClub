import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Diets from "./components/Diets";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact-us";
import SignUp from "./components/Signup";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import Reset from "./components/Reset"
import Cards from "./components/Card";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Switch>

            <Route path="/reset">
              <Header />
              <Reset />
              <Footer />
            </Route>

            <Route path="/register">
              <Header />
              <SignIn />
              <Footer />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/premium">
              <Header />
              <SignUp />
              <Footer />
            </Route>

            <Route path="/contact">
              <Header />
              <Contact />
              <Footer />
            </Route>

            <Route path="/gallery">
              <Header />
              <Gallery />
              <Footer />
            </Route>

            <Route path="/services">
              <Header />
              <Services />
              <Footer />
            </Route>

            <Route path="/dites">
              <Header />
              <Diets />
            </Route>

            <Route path="/about">
              <Header />
              <Cards />
              {/* <About /> */}
              <Footer />
            </Route>

            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
