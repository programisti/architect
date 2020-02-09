import React from 'react';

const Project = props => (
  <>
  <header className="hero-banner project-bg">
    <a className="navbar-brand" href="/">
      <img src="img/logo.png" alt="" />
    </a>

    <div className="container">
      <h2 className="section-intro__subtitle">ჩვენი პროექტები</h2>
      <div className="btn-group breadcrumb">
        <a href="/" className="btn">მთავარი</a>
        <span className="btn btn--rightBorder">პორტფოლიო</span>
      </div>
    </div>
  </header>
    <section className="portfolio section-margin">
  		<div className="container">
  			<div className="section-intro">
  				<h4 className="section-intro__title">ჩვენი პროექტები</h4>
  				<h2 className="section-intro__subtitle bottom-border">ბოლოს შესრულებული ობიექტები</h2>
  			</div>

  			<div className="row align-items-end pb-md-5 mb-4">
  				<div className="col-md-7 mb-4 mb-md-0">
  					<div className="portfolio__img">
  						<img className="img-fluid" src="img/portfolio1.png" alt=""/>
  					</div>
  				</div>
  				<div className="col-md-5 mb-5 pl-xl-5">
  					<h4 className="section-intro__title left-border">დეკემბერი, 2018</h4>
  					<h2 className="section-intro__subtitle small">სტუდიოს ტიპის ბინა</h2>
  					<p>თუ თქვენ გსურთ იცხოვროთ თანამედრო სტუდიოს ტიპის ბინაში მაშინ ეს თქვენთვისაა.</p>

  					<a className="btn btn--rightBorder mt-3" href="#/">მეტის წაკითხვა</a>
  				</div>
  			</div>

  			<div className="row align-items-end pb-md-5 mb-4">
  				<div className="col-md-5 mb-5 pr-xl-5 order-2 order-md-1">
  					<h4 className="section-intro__title left-border">ნოემბერი, 2018</h4>
  					<h2 className="section-intro__subtitle small">სახლი ტყეში</h2>
  					<p>გსუურთ იცხოვროთ ეკოლოგიურად სუფთა გარემოში? მაშინ შეიძინეთ სახლი ტყეში.</p>

  					<a className="btn btn--rightBorder mt-3" href="#/">მეტის წაკითხვა</a>
  				</div>
  				<div className="col-md-7 mb-4 mb-md-0 order-1 order-md-2">
  					<div className="portfolio__img">
  						<img className="img-fluid" src="img/portfolio2.png" alt="" />
  					</div>
  				</div>
  			</div>

  			<div className="row align-items-end pb-md-5 mb-4">
  				<div className="col-md-7 mb-4 mb-md-0">
  					<div className="portfolio__img">
  						<img className="img-fluid" src="img/portfolio3.png" alt=""/>
  					</div>
  				</div>

  				<div className="col-md-5 mb-5 pl-xl-5">
  					<h4 className="section-intro__title left-border">იანვარი, 2018</h4>
  					<h2 className="section-intro__subtitle small">ცათამბჯენი</h2>
  					<p>შეიძინე კომერციული ფართები ცათამბჯენში.</p>

  					<a className="btn btn--rightBorder mt-3" href="#/">ცმეტის წაკითხვა</a>
  				</div>
  			</div>

  			<div className="row align-items-end pb-md-5 mb-4">
  				<div className="col-md-5 mb-5 pr-xl-5 order-2 order-md-1">
  					<h4 className="section-intro__title left-border">აპრილი, 2018</h4>
  					<h2 className="section-intro__subtitle small">ფერადი სახლი</h2>
  					<p>გაიფერადე ცხოვრება და იცხოვრე ფერად სახლში.</p>

  					<a className="btn btn--rightBorder mt-3" href="#/">მეტის წაკითხვა</a>
  				</div>

  				<div className="col-md-7 order-1 order-md-2 mb-4 mb-md-0">
  					<div className="portfolio__img">
  						<img className="img-fluid" src="img/portfolio4.png" alt=""/>
  					</div>
  				</div>
  			</div>

  			<div className="text-center pt-2">
  				<button className="btn btn--rightBorder btn--leftBorder">მეტი</button>
  			</div>
  		</div>
  	</section>
  </>
);

export default Project;
