import React from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';
import VMC from './inc/Vmc';
import Service1 from '../images/img1.jpg';

function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolore libero tempora perferendis alias eius laborum maxime
                culpa optio animi doloribus, consectetur laboriosam quod hic aut
                quam dignissimos eveniet quos.
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our vision, mission and values*/}
      <VMC />

      {/* Our Services */}
      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Services 1</h6>
                  <div className="underline">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <Link to="/services" className="btn btn-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Services 1</h6>
                  <div className="underline">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <Link to="/services" className="btn btn-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Services 1</h6>
                  <div className="underline">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <Link to="/services" className="btn btn-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
