import React from "react";
import "./About.css";
import trainer1 from "../Images/10.jpg";
import what from "../Images/12.jpg";

function About() {
  return (
    <div className="about">
      <div class="card">
        <h1 class="card-header text-warning">About Us</h1>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>

      <div className="what">
        <div class="card mb-3" style={{ width: "78rem" }}>
          <h1 className="h1_what">What we do</h1>
          <p className="p_what">We are passionate</p>
          <hr />

          <div class="row row-cols-1 row-cols-md-3 g-1">
            <div class="col">
              <div class="card">
                <img src={what} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-warning">Cross Fit</h5>
                  <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={what} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-warning">Boot Camp</h5>
                  <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={what} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-warning">Aerobi Capacity</h5>
                  <p class="card-text ">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col" >
              <div class="card" >
                <img src={what} class="card-img-top" alt="..." />
                <div class="card-body" >
                  <h5 class="card-title text-warning">12 Week Challenge</h5>
                  <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col" >
              <div class="card" >
                <img src={what} class="card-img-top" alt="..." />
                <div class="card-body" >
                  <h5 class="card-title text-warning">Personal Training</h5>
                  <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col" >
              <div class="card" >
                <img src={what} class="card-img-top" alt="..." />
                <div class="card-body" >
                  <h5 class="card-title text-warning">Group Classes</h5>
                  <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trainer">
        <div class="card" style={{ width: "22rem" }}>
          <img class="card-img-top" src={trainer1} alt="Card image cap" />
          <h3 class="card-header text-warning">Our trainer</h3>
          <h5 class="card-header text-warning">Mrs. XYZ</h5>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              itaque. Molestias distinctio, sit libero amet quaerat qui dolores
              blanditiis reiciendis?
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "22rem" }}>
          <img class="card-img-top" src={trainer1} alt="Card image cap" />
          <h3 class="card-header text-warning">Our trainer</h3>
          <h5 class="card-header text-warning">Mrs. XYZ</h5>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              itaque. Molestias distinctio, sit libero amet quaerat qui dolores
              blanditiis reiciendis?
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "22rem" }}>
          <img class="card-img-top" src={trainer1} alt="Card image cap" />
          <h3 class="card-header text-warning">Our trainer</h3>
          <h5 class="card-header text-warning">Mrs. XYZ</h5>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              itaque. Molestias distinctio, sit libero amet quaerat qui dolores
              blanditiis reiciendis?
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "22rem" }}>
          <img class="card-img-top" src={trainer1} alt="Card image cap" />
          <h3 class="card-header text-warning">Our trainer</h3>
          <h5 class="card-header text-warning">Mrs. XYZ</h5>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              itaque. Molestias distinctio, sit libero amet quaerat qui dolores
              blanditiis reiciendis?
            </p>
          </div>
        </div>

        {/* <div class="card" style={{ width: "20rem" }}>
          <img class="card-img-top" src={trainer1} alt="Card image cap" />
          <h3 class="card-header text-warning">Our trainer</h3>
          <h5 class="card-header text-warning">Mrs. XYZ</h5>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              itaque. Molestias distinctio, sit libero amet quaerat qui dolores
              blanditiis reiciendis?
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "20rem" }}>
          <img class="card-img-top" src={trainer1} alt="Card image cap" />
          <h3 class="card-header text-warning">Our trainer</h3>
          <h5 class="card-header text-warning">Mrs. XYZ</h5>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              itaque. Molestias distinctio, sit libero amet quaerat qui dolores
              blanditiis reiciendis?
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About;
