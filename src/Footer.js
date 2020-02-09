import React from 'react';

function Footer() {
  return (
    <>
  	<footer className="footer footer-bg">
  		<div className="container">
  			<div className="row">
  				<div className="col-sm-4 col-lg-2 mb-4 mb-lg-0 text-left">
  					<h3 className="footer__title">რას ვაშენებთ?</h3>
  					<ul className="footer__link">
  						<li><a href="#/">ბენზინგასამართი სადგურები</a></li>
  						<li><a href="#/">ფერმები</a></li>
  						<li><a href="#/">კვების ობიექტები</a></li>
  						<li><a href="#/">სამხედრო ობიექტები</a></li>
  					</ul>
  				</div>
  				<div className="col-sm-4 col-lg-2 mb-4 mb-lg-0 text-left">
  					<h3 className="footer__title">კითხვარი</h3>
  					<ul className="footer__link">
  						<li><a href="#/">ვაკანსიები</a></li>
  						<li><a href="#/">ჩვენი გუნდი</a></li>
  					</ul>
  				</div>
  				<div className="col-sm-4 col-lg-2 mb-4 mb-lg-0 text-left">
  					<h3 className="footer__title">სხვადასხვა</h3>
  					<ul className="footer__link">
  						<li><a href="#/">Jobs</a></li>
  						<li><a href="#/">Brand Assets</a></li>
  						<li><a href="#/">Investor Relations</a></li>
  						<li><a href="#/">Terms of Service</a></li>
  					</ul>
  				</div>
  				<div className="col-sm-8 col-lg-4 mb-4 mb-lg-0 text-left">
  					<h3 className="footer__title">სიახლეები</h3>
  					<p>გამოიწერეთ სიახლეები</p>
  					<form action="" className="form-subscribe">
  						<div className="input-group">
  							<input type="email" className="form-control" placeholder="თქვენი ელ ფოსტა" required />
  							<div className="input-group-append">
  								<button className="btn-append" type="submit"><i className="lnr lnr-arrow-right"></i></button>
  							</div>
  						</div>
  					</form>
  				</div>
  			</div>
  			<div className="d-sm-flex justify-content-between footer__bottom top-border">
  				<p>
          Copyright All rights reserved
          </p>
  				<ul className="social-icons mt-2 mt-sm-0">
  					<li><a href="http://fb.com/kodua/"><i className="fab fa-facebook-f"></i></a></li>
  				</ul>
  			</div>
  		</div>
  	</footer>
  </>
  );
}

export default Footer;
