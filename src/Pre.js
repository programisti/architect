import React from 'react';
import $ from "jquery"

function Pre() {
  return (
    <>
  	<div className="side_menu">
  		<ul className="list menu_right">
  			<li>
  				<a href="/">მთავარი</a>
  			</li>
  			<li>
  				<a href="projects">პორტფოლიო</a>
  			</li>
  			<li>
  				<a href="service">სერვისები</a>
  			</li>
  			<li>
  				<a href="blog">ბლოგი</a>
  			</li>
  			<li>
  				<a href="contact">კონტაქტი</a>
  			</li>
  		</ul>
  	</div>

  	<div className="canvus_menu">
  		<div className="container">
  			<div className="float-right">
  				<div className="toggle_icon" title="მენიუ" onClick={ () => {
            $('#root').toggleClass("open");
          }}>
  					<span></span>
  				</div>
  			</div>
  		</div>
  	</div>
  </>
  );
}

export default Pre;
