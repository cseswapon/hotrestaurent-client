import React from "react";
import rider from "../../Image/Image/Group 1151.png";
import rider2 from "../../Image/Image/Group 1152.png";
import map from "../../Image/map.png";
const OrderComplet = () => {
  return (
    <div class="container pt-5 my-5">
      <div class="row">
        <div class="col-md-8">
          <img class="img-fluid" src={map} alt="avtor" />
        </div>
        <div class="col-md-4 pl-md-5">
          <div class="bg-light p-3 rounded">
            <img class="w-25 ml-5" src={rider} alt="avtor" />
            <div class="bg-white  rounded p-3 my-3">
              <div>
                <div>
                  <h6>Order Id :</h6>
                  <p>6217de09fd81c3002431ebc1</p>
                </div>
                <h5>Your Location</h5>
                <p>sadf, sdf</p>
              </div>
              <div>
                <h5>Shop Address</h5>
                <p>Star Kabab and Restaura</p>
              </div>
            </div>
            <h1>09:00</h1>
            <p>Estimated Delivery</p>
            <div class="bg-white rounded p-3 d-flex">
              <img class="w-25 mr-2" src={rider2} alt="avtor" />
              <div>
                <h6>Hamim</h6>
                <p>Your Rider</p>
              </div>
            </div>
            <a href="tel:+8801718853209">
              <button class="btn btn-block my-3 btn-danger">Contact</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComplet;
