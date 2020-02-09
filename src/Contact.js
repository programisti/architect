import React from 'react';

const Contact = props => (
  <>
  <header className="hero-banner project-bg">
    <a className="navbar-brand" href="/">
			<img src="img/logo.png" alt="" />
		</a>
    <div className="container">
      <h2 className="section-intro__subtitle">კონტაქტი</h2>
      <div className="btn-group breadcrumb">
        <a href="/" className="btn">მთავარი</a>
        <span className="btn btn--rightBorder">კონტაქტი</span>
      </div>
    </div>
  </header>


  <section className="section-margin">
    <div className="container">
      <div className="d-none d-sm-block mb-5 pb-4">
        <div id="map" style={{height: 420}}></div>
      </div>


      <div className="row align-items-center">
        <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="lnr lnr-home"></i></span>
            <div className="media-body">
              <h3>California United States</h3>
              <p>Santa monica bullevard</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="lnr lnr-phone-handset"></i></span>
            <div className="media-body">
              <h3><a href="tel:454545654">00 (440) 9865 562</a></h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="lnr lnr-envelope"></i></span>
            <div className="media-body">
              <h3><a href="mailto:support@colorlib.com">support@colorlib.com</a></h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-9">
          <form action="#/" className="form-contact">
            <div className="row">
              <div className="col-lg-5">
                <div className="form-group">
                  <input className="form-control" name="name" type="text" placeholder="სახელი" required />
                </div>
                <div className="form-group">
                  <input className="form-control" name="email" type="email" placeholder="ელ ფოსტა" required />
                </div>
                <div className="form-group">
                  <input className="form-control" name="subject" type="text" placeholder="სათაური" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-group">
                    <textarea className="form-control different-control w-100" name="textarea" id="textarea" cols="30" rows="6" placeholder="შეიყვანეთ შეტყობინება"></textarea>
                </div>
              </div>
            </div>
            <div className="form-group text-center text-md-right">
              <button type="submit" className="btn active btn--leftBorder">გაგზავნა</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>
);

export default Contact
