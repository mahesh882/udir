import {useEffect} from 'react'
import $ from "jquery";
const VendorForm = ()=>{
useEffect(()=>{
    $('input').on('focusin', function () {
      $(this).parent().find('label').addClass('active');
    });

    $('input').on('focusout', function () {
      if (!this.value) {
        $(this).parent().find('label').removeClass('active');
      }
    });            
},[])
return(<div><section className="background-color-1 Privacy-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="vendor-content">
                <h1 className="privacy-title">Vendor Sign Up form</h1>
                <p className="privacy-text">Looking to get in touch for partnership? use this form and we will get back to you</p>
                <div className="wrap">
                  <div>
                    <label htmlFor="fname">Name</label>
                    <input id="fname" type="text" className="cool" />
                  </div>
                  <div>
                    <label htmlFor="lname">Telephone</label>
                    <input id="lname" type="text" className="cool" />
                  </div>
                  <div>
                    <label htmlFor="email">Business address
                    </label>
                    <input id="email" type="text" className="cool" />
                  </div>
                  <div>
                    <label htmlFor="msg">Message
                    </label>
                    <input id="msg" type="text" className="cool" />
                  </div>
                  <div>
                    <button className="btn btn-outline-light my-2 my-sm-0" type="button">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
)}
export default VendorForm