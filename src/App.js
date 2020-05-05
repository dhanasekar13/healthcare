import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/flex-slider.css'
import './css/lightbox.css'
import './css/tooplate-style.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
    <div id="page-wraper">
      <div class="responsive-nav">
        <i class="fa fa-bars" id="menu-toggle"></i>
        <div id="menu" class="menu">
          <i class="fa fa-times" id="menu-close"></i>
          <div class="container">
            <div class="image">
              <a href="#"><img src="images/logo-image.jpg" alt="Blugoon by Tooplate" /></a>
            </div>
            <div class="author-content">
              <h4>Blugoon</h4>
              <span>Free Bootstrap Theme</span>
            </div>
            <nav class="main-nav" role="navigation">
              <ul class="main-menu">
                <li><a href="#section1">Intro</a></li>
                <li><a href="#section2">Features</a></li>
                <li><a href="#section3">Gallery</a></li>
                <li><a href="#section4">Contact</a></li>
              </ul>
            </nav>
            <div class="social-network">
              <ul class="soial-icons">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-rss"></i></a>
                </li>
              </ul>
            </div>
            <div class="copyright-text">
              <p>Copyright 2020 Blugoon<br/>
              Design: Tooplate</p>
            </div>
          </div>
        </div>
      </div>

      <section class="section about-me" id="section1">
        <div class="container">
        <div class="top-header">
        	<img src="images/aerobic-girls.jpg" alt="aerobic girls" />
        </div>
          <div class="section-heading">
          
            <h2>Introducing Blugoon</h2>
            <div class="line-dec"></div>
            <span>Blugoon is free HTML template for everyone. This is a Bootstrap v4.3.1 layout which you can fully customize for your websites. Please tell your friends about Tooplate. Thank you.</span>
          </div>
          <div class="right-image-post">
            <div class="row">
 
              <div class="col-md-8">
                <div class="left-text">
                  <h4>Modern Web Design</h4>
                  <p>You are allowed to use this template for commercial or personal websites. You are NOT allowed to redistribute this on template collection website. You can feature this template on your blog post.</p>
                  <p>All photos in this template are from <a rel="nofollow" href="https://www.pexels.com">Pexels</a> website. Blugoon HTML Template is provided by Tooplate. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                  <div class="white-button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="right-image">
                  <img src="images/mountain-reflection.jpg" alt="Mountain Reflection" />
                </div>
              </div>
              
            </div>
          </div>
          <div class="left-image-post">
            <div class="row">
            
              <div class="col-md-4">
                <div class="left-image">
                  <img src="images/girl-nature.jpg" alt="Nature Girl" />
                </div>
              </div>
              
              <div class="col-md-8">
                <div class="right-text">
                  <h4>Best Template for you!</h4>
                  <p>Quisque feugiat nisl at lacus condimentum, eu suscipit odio fringilla. Mauris eu est vitae erat condimentum pellentesque. Fusce vehicula nunc at augue sagittis tristique.</p>
                  <p>Ut imperdiet massa at enim tempus volutpat. Nullam gravida augue quis facilisis commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                  <div class="white-button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section class="section my-services" data-section="section2" id="section2" key="section2">
        <div class="container">
          <div class="section-heading">
            <h2>Greatest Features</h2>
            <div class="line-dec"></div>
            <span>Praesent posuere fringilla elit, non maximus tellus posuere nec. Nunc eu sapien nec est elementum sodales.</span>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="service-item">
                <i class="fa fa-area-chart"></i>
                <h4>Top Performance</h4>
                <p>Donec sit amet tempor quam. Maecenas nec aliquam leo, sed tincidunt urna.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-item">
                <i class="fa fa-check-square-o"></i>
                <h4>Trusted Service</h4>
                <p>Etiam at porta nulla, et euismod enim. Nullam semper ipsum et dui scelerisque.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-item">
                <i class="fa fa-question-circle"></i>
                <h4>Need Help?</h4>
                <p>Phasellus orci leo, elementum ac risus id, euismod porta lorem. Quisque feugiat.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-item">
                <i class="fa fa-support"></i>
                <h4>Quick Support</h4>
                <p>Mauris eu est vitae erat condimentum pellentesque. Fusce vehicula nunc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section my-work" id="section3">
        <div class="container">
          <div class="section-heading">
            <h2>Gallery</h2>
            <div class="line-dec"></div>
            <span>Donec sit amet enim tempor nisl fermentum aliquam. In consectetur sapien eu nisi venenatis lobortis. Sed ullamcorper tristique elit nec facilisis.</span>
          </div>
          <div class="row">
            <div class="isotope-wrapper">
              <form class="isotope-toolbar">
                <label><input type="radio" data-type="*" checked="" name="isotope-filter" />
                  <span>all</span></label>
                <label><input type="radio" data-type="pretty" name="isotope-filter" />
                  <span>pretty</span></label>
                <label><input type="radio" data-type="sexy" name="isotope-filter" />
                  <span>sexy</span></label>
                <label><input type="radio" data-type="beach" name="isotope-filter" />
                  <span>beach</span></label
                >
              </form>
              <div class="isotope-box">
                <div class="isotope-item" data-type="beach">
                  <figure class="snip1321">
                    <img src="images/woman-beach.jpg" alt="woman at the beach" />
                    <figcaption>
                      <a href="images/woman-beach.jpg"
                        data-lightbox="image-1"
                        data-title="Caption"><i class="fa fa-search"></i></a>
                      <h4>Girl One</h4>
                      <span>woman at the beach</span>
                    </figcaption>
                  </figure>
                </div>

                <div class="isotope-item" data-type="sexy">
                  <figure class="snip1321">
                    <img src="images/woman-chair-sunshine.jpg" alt="sq-sample26" />
                    <figcaption>
                      <a href="images/woman-chair-sunshine.jpg"
                        data-lightbox="image-1"
                        data-title="Sunshine Woman"><i class="fa fa-search"></i></a>
                      <h4>Sexy Lady</h4>
                      <span>there you go sexy girl</span>
                    </figcaption>
                  </figure>
                </div>

                <div class="isotope-item" data-type="pretty">
                  <figure class="snip1321">
                    <img src="images/woman-pretty.jpg" alt="Pretty Girl" />
                    <figcaption>
                      <a href="images/woman-pretty.jpg"
                        data-lightbox="image-1"
                        data-title="Pretty Girl"><i class="fa fa-search"></i></a>
                      <h4>Pretty Girl</h4>
                      <span>red flowers white girl</span>
                    </figcaption>
                  </figure>
                </div>

                <div class="isotope-item" data-type="pretty">
                  <figure class="snip1321">
                    <img src="images/escalator-blue.jpg" alt="Escalator Blue" />
                    <figcaption>
                      <a href="images/escalator-blue.jpg"
                        data-lightbox="image-1"
                        data-title="Escalator Blue"><i class="fa fa-search"></i></a>
                      <h4>Escalator Up</h4>
                      <span>Blue architecture building</span>
                    </figcaption>
                  </figure>
                </div>

                <div class="isotope-item" data-type="beach">
                  <figure class="snip1321">
                    <img src="images/woman-feeling.jpg" alt="woman feeling" />
                    <figcaption>
                      <a href="images/woman-feeling.jpg"
                        data-lightbox="image-1"
                        data-title="Her Feeling"><i class="fa fa-search"></i></a>
                      <h4>Her Feeling</h4>
                      <span>Ut sollicitudin risus</span>
                    </figcaption>
                  </figure>
                </div>

                <div class="isotope-item" data-type="sexy">
                  <figure class="snip1321">
                    <img src="images/woman-bikini.jpg" alt="Bikini Girl" />
                    <figcaption>
                      <a href="images/woman-bikini.jpg" 
                      data-lightbox="image-1" data-title="Sexy Bikini">
                      <i class="fa fa-search"></i></a>
                      <h4>Bikini Girl</h4>
                      <span>Donec eget massa ante</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section contact-me" id="section4">
        <div class="container">
          <div class="section-heading">
            <h2>Contact</h2>
            <div class="line-dec"></div>
            <span>Aenean a consectetur mi, sit amet consequat velit. Mauris vitae nunc viverra, mattis arcu quis, vestibulum eros. </span>
          </div>
          <div class="row">
            <div class="right-content">
              <div class="container">
                <form id="contact" action="" method="post">
                  <div class="row">
                    <div class="col-md-6">
                      <fieldset>
                        <input name="name" type="text" class="form-control"
                          id="name" placeholder="Your name..." required="" />
                      </fieldset>
                    </div>
                    <div class="col-md-6">
                      <fieldset>
                        <input name="email" type="text" class="form-control"
                          id="email" placeholder="Your email..." required=""  />
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <input name="subject" type="text" class="form-control" 
                          id="subject" placeholder="Subject..." required="" />
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <textarea name="message" rows="6" class="form-control"
                          id="message" placeholder="Your message..." required="" ></textarea>
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit" class="button">
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default App;
