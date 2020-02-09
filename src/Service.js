import React from 'react';

const Service = props => (
  <>
    <header className="hero-banner project-bg">
  		<a className="navbar-brand" href="/">
  			<img src="img/logo.png" alt="" />
  		</a>
      <div className="container">
        <h2 className="section-intro__subtitle">ჩვენი სერვისები</h2>
        <div className="btn-group breadcrumb">
          <a href="#/" className="btn">მთავარი</a>
          <span className="btn btn--rightBorder">სერვისები</span>
        </div>
      </div>
    </header>

    <section class="service section-margin mb-5 pb-5">
  		<div class="container">
  			<div class="section-intro">
  				<h4 class="section-intro__title">ჩვენი სერვისები</h4>
  				<h2 class="section-intro__subtitle bottom-border">რას გთავაზბოთ</h2>
  			</div>

  			<div class="row">
          <div class="col-sm-6 col-lg-4">
            <div class="media service__single">
              <span class="service__singleIcon"><i class="ti-package"></i></span>
              <div class="media-body">
                <h3>ბინები</h3>
                <p>ჩვენ ვაშენებთ მრავალსართულიან ბინებს.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="media service__single">
              <span class="service__singleIcon"><i class="ti-home"></i></span>
              <div class="media-body">
                <h3>ფერმები და სათბურები</h3>
                <p>საღორეები, საძროხებეი, სათბურები და ა.შ.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="media service__single">
              <span class="service__singleIcon"><i class="ti-brush-alt"></i></span>
              <div class="media-body">
                <h3>სამხედრო ობიექტები</h3>
                <p>ბაზები, საველე ბაზები, სამხედრო ობიექტები.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="media service__single">
              <span class="service__singleIcon"><i class="ti-package"></i></span>
              <div class="media-body">
                <h3>სასტუმროები</h3>
                <p>მაღალი სტანდარტების სასტუმროები.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="media service__single">
              <span class="service__singleIcon"><i class="ti-home"></i></span>
              <div class="media-body">
                <h3>კვების ობიექტები</h3>
                <p>რესტორნები, ბარები, ბუნგალოები და ა.შ.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="media service__single">
              <span class="service__singleIcon"><i class="ti-brush-alt"></i></span>
              <div class="media-body">
                <h3>კომერციული ობიექტები</h3>
                <p>გასართობი ცენტრები, მაღაზიები, საოფისე ფართები</p>
              </div>
            </div>
          </div>
  			</div>
  		</div>
    </section>

    <section class="tips tips-bg">
  		<div class="container">
  			<div class="row align-items-center">
  				<div class="col-lg-7 mb-4 mb-lg-0">
  					<h2 class="section-intro__subtitle">როდის მორჩება მშენებლობა?</h2>
  					<p>ჩვენი გამოცდილი გუნდი დაითვლის თუ რა დრო დაჭირდება თქვენთვის სასურველი ობიექტის მშენებლობას</p>
  				</div>
  				<div class="col-lg-5 text-center text-lg-right">
  					<a class="btn btn-dark btn--leftBorder btn--rightBorder" href="#/">გაგება</a>
  				</div>
  			</div>
  		</div>
  	</section>
  </>
);

export default Service
