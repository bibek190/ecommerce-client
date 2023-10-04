import React from "react";
import { LuFastForward } from "react-icons/lu";

const Hero = () => {
  return (
    <>
      <section className="hero p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="hero-details d-flex flex-row gap-4 justify-content-center">
              <div class="card" style={{ width: "10rem" }}>
                <img
                  class="card-img-top"
                  src="https://media.istockphoto.com/id/859526476/photo/plane-trucks-are-flying-towards-the-destination-with-the-brightest.jpg?s=1024x1024&w=is&k=20&c=ZXrWGiCDYbG9LmpRFWJZTPX1BQJXEe1Sc6yNu8ks_pM="
                  alt="Card image cap"
                  height={"100px"}
                />
                <div class="card-body">
                  <p class="card-text text-center">Quick shipping</p>
                </div>
              </div>
              <div class="card" style={{ width: "10rem" }}>
                <img
                  class="card-img-top"
                  src="https://cloudlibrariandownunder.files.wordpress.com/2016/09/fast-acting.jpg"
                  alt="Card image cap"
                  height={"100px"}
                />
                <div class="card-body">
                  <p class="card-text text-center">Fast Order</p>
                </div>
              </div>
              <div class="card" style={{ width: "10rem" }}>
                <img
                  class="card-img-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUylo-MgxkSxTQkdJhV7B83p9hL2V-qWInpQ&usqp=CAU"
                  alt="Card image cap"
                  height={"100px"}
                />
                <div class="card-body">
                  <p class="card-text text-center">Save</p>
                </div>
              </div>
              <div class="card" style={{ width: "10rem" }}>
                <img
                  class="card-img-top"
                  src="https://c8.alamy.com/comp/2DE4T9N/24-7-service-concept-24-7-open-support-service-icon-vector-stock-illustration-2DE4T9N.jpg"
                  alt="Card image cap"
                  height={"100px"}
                />
                <div class="card-body">
                  <p class="card-text text-center">24/7 support</p>
                </div>
              </div>
              <div class="card" style={{ width: "10rem" }}>
                <img
                  class="card-img-top"
                  src="https://miro.medium.com/v2/resize:fit:1018/1*iAu65xDmvpVdBJgps6EDEw.png"
                  alt="Card image cap"
                  height={"100px"}
                />
                <div class="card-body">
                  <p class="card-text text-center">Online order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
