import React from 'react';

function Home() {
  return (
    <>
      <header>
        <div className="hero">
          <a className="navbar-brand" href="/">
            <img src="img/logo.png" alt="" />
          </a>

          <div className="owl-carousel owl-theme heroCarousel">
            <div className="item">
              <div className="hero__slide">
                <img src="img/hero-2.png" alt=""/>
                <div className="hero__slideContent text-center">
                  <h1>ოცნების ქალაქი</h1>
                  <p>გსუურთ იცხოვროთ ოცნების ქალაქში, იჩქარეთ ფართები შეზღუდულია.</p>
    							<a className="btn btn--leftBorder btn--rightBorder" href="#/">დეტალურად</a>
    							<span className="hero__slideContent--right"></span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="hero__slide">
                <img src="img/hero-1.png" alt=""/>
                <div className="hero__slideContent text-center">
                  <h1>კარგი ქალაქი</h1>
                  <p>გსუურთ იცხოვროთ ოცნების ქალაქში, იჩქარეთ ფართები შეზღუდულია.</p>
    							<a className="btn btn--leftBorder btn--rightBorder" href="#/">დეტალურად</a>
    							<span className="hero__slideContent--right"></span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="hero__slide">
                <img src="img/hero-3.png" alt=""/>
                <div className="hero__slideContent text-center">
                  <h1>მწვანე ქალაქი</h1>
                  <p>იცხოვრე მწვანე ქალაქში.</p>
    							<a className="btn btn--leftBorder btn--rightBorder" href="#/">დეტალურად</a>
    							<span className="hero__slideContent--right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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
    							<p>კერძო ობიექტი</p>
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

    	<section className="testimonial section-margin">
    		<div className="container">
    			<div className="section-intro">
    				<h4 className="section-intro__title">ჩვენზე</h4>
    				<h2 className="section-intro__subtitle bottom-border">რას ამბობს ხალხი ჩვენზე</h2>
    			</div>

    			<div className="owl-carousel owl-theme testimonialCarousel">
    				<div className="item">
    					<div className="media testimonial__slide">
    						<img className="img-fluid mr-4" src="img/testimonial.png" width="120" height="125" alt=""/>
    						<div className="media-body">
    							<blockquote>
    								“კომპანიამ უმოკლეს ვადებში შეძლო ხუთი ბენზინგასამართი სადგურის აშენება.”
    							</blockquote>
    							<h3>დავით ვინცხაშვილი</h3>
    							<p>Soccar</p>
    						</div>
    					</div>
    				</div>
    				<div className="item">
    					<div className="media testimonial__slide">
    						<img className="img-fluid mr-4" src="img/testimonial.png" width="120" height="125" alt=""/>
    						<div className="media-body">
    							<blockquote>
    								“ყიზილბაშებივით შეესივნენ მშენებლობას.”
    							</blockquote>
    							<h3>კოჭოია</h3>
    							<p>პრემიერ მინისტრი</p>
    						</div>
    					</div>
            </div>
            <div className="item">
    					<div className="media testimonial__slide">
    						<img className="img-fluid mr-4" src="img/testimonial.png" width="120" height="125" alt=""/>
    						<div className="media-body">
    							<blockquote>
    								“მაგენი მაგარი ბიჭები არიან.”
    							</blockquote>
    							<h3>რაჟძენა</h3>
    							<p>ნახალოვკელი</p>
    						</div>
    					</div>
            </div>
            <div className="item">
    					<div className="media testimonial__slide">
    						<img className="img-fluid mr-4" src="img/testimonial.png" width="120" height="125" alt=""/>
    						<div className="media-body">
    							<blockquote>
    								“If you are looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt amet.”
    							</blockquote>
    							<h3>Falcon Astle</h3>
    							<p>Google Android</p>
    						</div>
    					</div>
            </div>
            <div className="item">
    					<div className="media testimonial__slide">
    						<img className="img-fluid mr-4" src="img/testimonial.png" width="120" height="125" alt="" />
    						<div className="media-body">
    							<blockquote>
    								“If you are looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt amet.”
    							</blockquote>
    							<h3>Falcon Astle</h3>
    							<p>Google Android</p>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
    </>
  );
}

export default Home;
