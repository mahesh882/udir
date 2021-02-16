import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
const header = ()=>{
       return(<div> 
        <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            
            <Link className="navbar-brand" to="/">
             <img src={logo} style={{maxHeight:"350px"}}/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">How It works</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/who-we-are">Who we are</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/vendor-form">Vendor SignUp</Link>
                </li>
              </ul>
              <button className="btn btn-outline-light my-2 my-sm-0" type="button">Download UdiR</button>
            </div>
          </nav>
        </div>
      </header>
      
    </div>

)}
export default header