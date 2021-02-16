import homepage_Desktop from "../assets/images/sc2.jpg"
import homepage_Desktop1 from "../assets/images/Sc1.jpg"

import group3 from "../assets/images/Blue-3.png"
import group1 from "../assets/images/Blue-1.png"
import group2 from "../assets/images/Blue-2.png"
import rightPerson from "../assets/images/Always-pay-the-right-person.webp"
import tipsDesktop from "../assets/images/Tips_and_Trips_Desktop_UI_Comp_03.webp"


const whoWeAre = ()=>{
    return(<div>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <section className="banner background-color">
              <div className="container sec-1">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6 banner-left">
                      <h1>Fund your UdiR wallet</h1>
                      <p>Simply click Add to deposit money in your UdiR wallet using 2 easy methods.</p>
                    </div>
                    <div className="col-md-6 banner-right">
                      <div className="mobile-img">
                        <div className="mobile1 custom-image"><img  src={homepage_Desktop} alt="img" /></div>
                        <div className="mobile2 custom-image"><img src={homepage_Desktop} alt="img" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6 banner-left">
                      <h1>Click Send and choose a method that suits your recipient ! <span className="typed" /></h1>
                      <div className="more-button-wrapper">
                        <a href="#" className="more-button">
                          <span className="more-textContainer">
                            <span>Learn More</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 banner-right">
                      <div className="mobile-img">
                           <div className="mobile1 custom-image" ><img src={homepage_Desktop1} alt="img" /></div>
                        <div className="mobile2 custom-image"><img src={homepage_Desktop1}  alt="img" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
          </ul>
        </div>
       <section id="why-udir" className="background-color-1">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 main-box">
              <div className="sub-content">
                <img src={group1} alt="img" />
                <h4 className="sub-title">App to App</h4>
                <p className="privacy-text">Send money instantly across the globe with app to app transfer.</p>
                <p className="privacy-text">All you need is UdiR installed !</p>
                <p />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 main-box">
              <div className="sub-content">
                <img src={group2} alt="img" />
                <h4 className="sub-title">App to Bank</h4>
                <p className="privacy-text"> Deposit money directly to a recipient's bank account with few clicks !
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 main-box">
              <div className="sub-content">
                <img src={group3} alt="img" />
                <h4 className="sub-title">App to Vendor</h4>
                <p className="privacy-text">Sending money to a remote place where app is not available ? No problem.</p>
                <p className="privacy-text">Cash pick up is available !</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center manage-section">
            <div className="col-md-5 col-sm-12">
              <div className="manage-img">
                <img src={rightPerson} alt="img" />
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="manage-content">
                <h1 className="privacy-title">Manage your UdiR wallet</h1>
                <p className="privacy-text">Have access to your money anywhere in the world . Withdraw and request money and much more</p>
                <p className="privacy-text">Get the UdiR app now !</p>
                <button className="btn btn-outline-light my-2 my-sm-0" type="button">Get Udir</button>
                <p />
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center manage-section p-0">
            <div className="col-md-5 col-sm-12">
              <div className="manage-content">
                <h1 className="privacy-title">More cool features coming soon !</h1>
                <p className="privacy-text">Watch out for some new ways to send &amp; receive money</p>
                <p />
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="manage-img">
                <img src={tipsDesktop} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
        <div className="feed-back">
          <button>Feeback</button>
        </div>
      </div>
)}
export default whoWeAre