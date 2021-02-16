import IndexPage from "./index/index"
import PrivecyPolicy from "./privecy-policy"
import WhoWeAre from "./who-we-are"
import VendorForm from "./vendor-form"
import NoPageFound from "./components/noPageFound"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/footer"
function App() {
  return (
    <div className="App">
     <Router>
    <Header/>

    <div>
      <Switch>
        <Route exact path="/" ><IndexPage/></Route>
        <Route exact path="/privecy-policy" ><PrivecyPolicy/></Route>
        <Route exact path="/vendor-form" ><VendorForm/></Route>
         <Route exact path="/who-we-are" ><WhoWeAre/></Route>
        <Route exact path='*' ><NoPageFound/></Route>
      </Switch>
    </div>
      <Footer/>
  </Router>
    </div>
  );
}

export default App;
