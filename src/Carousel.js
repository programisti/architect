
import React from 'react';

const Carousel = props => (
  <header>
    <div className="hero">
      <a className="navbar-brand" href="/">
        <img src="img/logo.png" alt=""/>
      </a>
      <div className="owl-carousel owl-theme heroCarousel owl-loaded owl-drag">

      <div className="owl-stage-outer">
        <div className="owl-stage carousel-outer">
          <div className="owl-item cloned carousel-item">
            <div className="item">
              <div className="hero__slide">
                <img src="img/hero-3.png" alt=""/>
                <div className="hero__slideContent text-center">
                  <h1>ოცნების ქალაქი</h1>
                  <p>იცხოვრე ოცნების ქალაქში, ბინები შეზღდულია იჩქარეთ.</p>
    							<a className="btn btn--leftBorder btn--rightBorder" href="#/">დეტალურათ</a>
    							<span className="hero__slideContent--right"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-item cloned carousel-item">
            <div className="item">
              <div className="hero__slide">
                <img src="img/hero-3.png" alt=""/>
                <div className="hero__slideContent text-center">
                  <h1>ოცნების ქალაქი</h1>
                  <p>იცხოვრე ოცნების ქალაქში, ბინები შეზღდულია იჩქარეთ.</p>
    							<a className="btn btn--leftBorder btn--rightBorder" href="#/">დეტალურათ</a>
    							<span className="hero__slideContent--right"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-item carousel-item">
            <div className="item">
              <div className="hero__slide">
                <img src="img/hero-2.png" alt=""/>
                <div className="hero__slideContent text-center">
                  <h1>ოცნების ქალაქი</h1>
                  <p>იცხოვრე ოცნების ქალაქში, ბინები შეზღდულია იჩქარეთ.</p>
    							<a className="btn btn--leftBorder btn--rightBorder" href="#/">დეტალურათ</a>
    							<span className="hero__slideContent--right"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-item active carousel-item">
            <div className="item">
              <div className="hero__slide">
                <img src="img/hero-1.png" alt=""/>
                <div className="hero__slideContent text-center">
                  <h1>ოცნების ქალაქი</h1>
                  <p>იცხოვრე ოცნების ქალაქში, ბინები შეზღდულია იჩქარეთ.</p>
    							<a className="btn btn--leftBorder btn--rightBorder" href="#/">დეტალურათ</a>
    							<span className="hero__slideContent--right"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-item carousel-item">
            <div className="item">
              <div className="hero__slide">
                <img src="img/hero-3.png" alt=""/>
                <div className="hero__slideContent text-center">
                  <h1>ოცნების ქალაქი</h1>
                  <p>იცხოვრე ოცნების ქალაქში, ბინები შეზღდულია იჩქარეთ.</p>
    							<a className="btn btn--leftBorder btn--rightBorder" href="#/">დეტალურათ</a>
    							<span className="hero__slideContent--right"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-item cloned carousel-item">
            <div className="item">
              <div className="hero__slide">
                <img src="img/hero-2.png" alt=""/>
                <div className="hero__slideContent text-center">
                  <h1>ოცნების ქალაქი</h1>
                  <p>იცხოვრე ოცნების ქალაქში, ბინები შეზღდულია იჩქარეთ.</p>
    							<a className="btn btn--leftBorder btn--rightBorder" href="#/">დეტალურათ</a>
    							<span className="hero__slideContent--right"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-item cloned carousel-item">
            <div className="item">
              <div className="hero__slide">
                <img src="img/hero-1.png" alt=""/>
                <div className="hero__slideContent text-center">
                  <h1>ოცნების ქალაქი</h1>
                  <p>იცხოვრე ოცნების ქალაქში, ბინები შეზღდულია იჩქარეთ.</p>
    							<a className="btn btn--leftBorder btn--rightBorder" href="#/">დეტალურათ</a>
    							<span className="hero__slideContent--right"></span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="owl-nav disabled">
      <button type="button" role="presentation" className="owl-prev">
        <span aria-label="Previous">‹</span>
      </button>
      <button type="button" role="presentation" className="owl-next">
        <span aria-label="Next">›</span>
      </button>
    </div>
    <div className="owl-dots">
      <button role="button" className="owl-dot"><span></span></button>
      <button role="button" className="owl-dot active"><span></span></button>
      <button role="button" className="owl-dot"><span></span></button>
    </div>
  </div>
</div>
  </header>
);

export default Carousel
