import appleIcon from "../assets/images/apple-icon.svg"
import googlePay from "../assets/images/google-play.svg"
import homepage_Desktop from "../assets/images/Homepage_Desktop_UI_Comp_01 (1).png"
import homepage_Desktop1 from "../assets/images/Homepage_Desktop_UI_Comp_01__1_.png"


const footer = ()=>{
       return(<div>
        <section className="footer banner news-latter background-color-light">
          <div className="container sec-1">
            <div className="row">
              <div className="col-md-6 banner-left">
                <h1>Download the app and start sending &amp; receiving money within minutes
                </h1>
                <div className="download-btn">
                  <button className="btn my-2 my-sm-0" type="button"><img src={appleIcon} alt="" width />Downlaod for iOS</button>
                  <button className="btn my-2 my-sm-0" type="button"><img src={googlePay} alt="" /> Downlaod for Android</button>
                </div>
                <div className="news-input">
                  <form className="news-1">
                    <input type="text" placeholder="Email" />
                    <button type="submit" className="btn first news-btn">
                      <img src="https://alikinvv.github.io/subscription-animation/build/mail.svg" alt="" />
                      {/*                         <span class="start">GET A PROMO CODE</span>
                        <span class="done">THANK YOU!</span> */}
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 banner-right">
                <div className="mobile-img">
                  <div className="mobile1"><img src={homepage_Desktop} alt="img" /></div>
                  <div className="mobile2"><img src={homepage_Desktop1} alt="img" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container hr">
            <div className="icon-on">
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <i className="fa fa-user-circle" aria-hidden="true" />
            </div>
            <div className="menu-footer">
              <a href="/privecy-policy">Privacy</a>
              <a href="#">Terms</a>
            </div>
            <p>2018 Cursornt. All Rights Reserved.</p>
          </div>
        </section>
        <div className="feed-back">
          <button>Feeback</button>
        </div>
      </div>)
      }

      export default footer
  