import React from 'react';
import Carousel from './Carousel'

const Home = props => (
  <>
    <Carousel />

  	<section className="about section-margin mb-5">
  		<div className="container">
  			<div className="row align-items-center">
  				<div className="col-md-5">
  					<div className="about__img text-center text-md-left mb-5 mb-md-0">
  						<img className="img-fluid" src="img/about.png" alt="" />
  						<a href="#/" className="about__img__date text-center">
  							<h3>11</h3>
  							<p>წელი <br /> თქვენს სამსახურში</p>
  						</a>
  					</div>
  				</div>
  				<div className="col-md-7 pl-xl-5">
  					<div className="section-intro">
  						<h4 className="section-intro__title">ჩვენი კომპანიის შესახებ</h4>
  						<h2 className="section-intro__subtitle">კომპანია დაარსდა <br /> 1992 წელს</h2>
  					</div>
  					<p>აქ დიდი ტექსტები რაღაცეებზე, აქ დიდი ტექსტები რაღაცეებზე, აქ დიდი ტექსტები რაღაცეებზე</p>
  					<p>აქ დიდი ტექსტები რაღაცეებზე, აქ დიდი ტექსტები რაღაცეებზე, აქ დიდი ტექსტები რაღაცეებზე</p>
  					<a className="btn btn--rightBorder mt-4" href="#/">დეტალურათ</a>
  				</div>
  			</div>
  		</div>
  	</section>

  	<section className="overview">
  		<div className="container">
  			<div className="row">
  				<div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
  					<div className="media align-items-center overview__single">
  						<span className="overview__single__icon"><i className="ti-crown"></i></span>
  						<div className="media-body">
  							<h3>286+</h3>
  							<p>ბენზინგასამართი სადგური</p>
  						</div>
  					</div>
  				</div>

  				<div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
  					<div className="media align-items-center overview__single">
  						<span className="overview__single__icon"><i className="ti-face-smile"></i></span>
  						<div className="media-body">
  							<h3>942+</h3>
  							<p>კმაყოფილი კლიენტი</p>
  						</div>
  					</div>
  				</div>

  				<div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
  					<div className="media align-items-center overview__single">
  						<span className="overview__single__icon"><i className="ti-user"></i></span>
  						<div className="media-body">
  							<h3>263+</h3>
  							<p>პროფესიონალი გუნდში</p>
  						</div>
  					</div>
  				</div>

  				<div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
  					<div className="media align-items-center overview__single">
  						<span className="overview__single__icon"><i className="ti-gift"></i></span>
  						<div className="media-body">
  							<h3>2000+</h3>
  							<p>აშენებული კერძო ობიექტი</p>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  	</section>


  	<section className="tips tips-bg">
  		<div className="container">
  			<div className="row align-items-center">
  				<div className="col-lg-7 mb-4 mb-lg-0">
  					<h2 className="section-intro__subtitle">რა ვადებში აშენდება?</h2>
  					<p>გაიგე თუ რა დრო დაჭირდება მშენებლობას, ჩვენი პროფესიონალები ზუსტად დაიანგარიშებენ ზუსტ დროს</p>
  				</div>
  				<div className="col-lg-5 text-center text-lg-right">
  					<a className="btn btn-dark btn--leftBorder btn--rightBorder" href="#/">დააჭირეთ აქ</a>
  				</div>
  			</div>
  		</div>
  	</section>

  </>
);

export default Home;
