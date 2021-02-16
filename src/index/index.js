import {useEffect} from 'react'
import { init } from 'ityped';
import appleIcon from "../assets/images/apple-icon.svg"
import googlePay from "../assets/images/google-play.svg"
import homepage_Desktop from "../assets/images/Homepage_Desktop_UI_Comp_01 (1).png"
import homepage_Desktop1 from "../assets/images/Homepage_Desktop_UI_Comp_01__1_.png"
import number1 from "../assets/images/number-01.svg"
import number2 from "../assets/images/number-02.svg"
import number3 from "../assets/images/number-03.svg"
import number4 from "../assets/images/number-4-orange.png"
import wallet_img from "../assets/images/Home_fund_your_wallet.jpg"
import protfoliyo_img from "../assets/images/home_build_your_portfolio.jpg"
import trade_img from "../assets/images/Home_Trade.jpg"
import intrest_img from "../assets/images/Home_Interest.jpg"


import CurrencyCal from "./currencyCal" 

const IndexPage = ()=>{

   

  useEffect(()=>{
   
            init('.typed',{
              strings: ["anyone", "anytime", "anywhere"],
              // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
              stringsElement: null,
              // typing speed
              typeSpeed: 50,
              // time before typing starts
              startDelay: 1200,
              // backspacing speed
              backSpeed: 20,
              // time before backspacing
              backDelay: 500,
              // loop
              loop: true,
              // false = infinite
              loopCount: '100',
              // show cursor
              showCursor: false,
              // character for cursor
              cursorChar: "|",
              // attribute to type (null == text)
              attr: null,
              // either html or text
              contentType: 'html',
              // call when done callback function
              callback: function () { },
              // starting callback function before each string
              preStringTyped: function () { },
              //callback for every typed string
              onStringTyped: function () { },
              // callback for reset
              resetCallback: function () { }
            });
          
  },[])
    return (<div>
        <section className="banner background-color">
          <div className="container sec-1">
            <div className="row">
              <div className="col-md-6 banner-left">
                <h1>Best way to send &amp; receive money to : <span className="typed" /></h1>
                <div className="download-btn">
                  <button className="btn my-2 my-sm-0" type="button"><img src={appleIcon} alt="" width />Downlaod for iOS</button>
                  <button className="btn my-2 my-sm-0" type="button"><img src={googlePay} alt="" /> Downlaod for Android</button>
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
        </section>
        <section id="how-it-works">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h2 className="text-center-xs">How it works</h2>
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active">
                    <a href="#fund" aria-controls="fund" role="tab" data-toggle="tab" className="row">
                      <div className="col-3 icon-container text-center">
                        <img src={number1} width="80px" height="72px"  />
                      </div>
                      <div className="col-9">
                        <h3>Add funds to your wallet</h3>
                        <p>Easily deposit cryptocurrencies, connect a MasterCard or Visa, or set up bank transfers (where supported) to fund your wallet.</p>
                      </div>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#build" aria-controls="build" role="tab" data-toggle="tab" className="row">
                      <div className="col-md-3 icon-container small text-center">
                        <img src={number2} width="80px" height="72px" />
                      </div>
                      <div className="col-md-9">
                        <h3>Select recipient</h3>
                        <p>Choose from hundreds of cryptocurrencies and start building a portfolio that suits your goals.</p>
                      </div>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#move" aria-controls="move" role="tab" data-toggle="tab" className="row">
                      <div className="col-md-3 icon-container small text-center">
                        <img src={number3} width="80px" height="72px" />
                      </div>
                      <div className="col-md-9">
                        <h3>Choose payment delivery option</h3>
                        <p>Exchange between 100+ cryptocurrencies, or withdraw to a supported external wallet, instantly.</p>
                      </div>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#earn" aria-controls="earn" role="tab" data-toggle="tab" className="row">
                      <div className="col-md-3 icon-container small text-center">
                        <img src={number4} width="80px" height="72px" />
                      </div>
                      <div className="col-md-9">
                        <h3>Select amount &amp; send</h3>
                        <p>Simply hold your assets in the Abra Interest account and earn interest on crypto and US dollar stablecoins with daily compounding.</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-6 tab-content text-center">
                <div role="tabpanel" className="tab-pane active" id="fund">
                  <img src={wallet_img} /> 
                </div>
                <div role="tabpanel" className="tab-pane" id="build">
                  <img src={protfoliyo_img} /> 
                </div>
                <div role="tabpanel" className="tab-pane" id="move">
                  <img src={trade_img} /> 
                </div>
                <div role="tabpanel" className="tab-pane" id="earn">
                  <img src={intrest_img} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="why-udir" className="background-color-1">
          <div className="container">
            <h2 className="text-center-xs">Why Udir</h2>
            <div className="row">
              <div className="col-md-4 main-box">
                <div className="why-box">
                  <h4>Simple</h4>
                  <p>
                    Just fund your wallet , enter your recipient's details and select payment info. That's it
                    really !
                  </p>
                </div>
              </div>
              <div className="col-md-4 main-box">
                <div className="why-box">
                  <h4>Smart</h4>
                  <p>
                    Send money on the go or while asleep with pre-defned actions! Our fees are straighforward, transparent and extremely competitive. Multiplepayment delivery method
                  </p>
                </div>
              </div>
              <div className="col-md-4 main-box">
                <div className="why-box">
                  <h4>Secure</h4>
                  <p>Udir uses encrytion end-to-end, employs stat of the artdefenses and safeguards to protect your information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      <CurrencyCal/>
      </div>)
}
export default IndexPage
