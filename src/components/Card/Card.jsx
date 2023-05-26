import React from "react";
import chip from "../../assets/chip.png";
import wifi from "../../assets/wifi.png";
import card from "../../assets/mastercard-2.svg";
import apple from "../../assets/apple-13.svg";
import docket from "../../assets/docket.png";
import "./card.scss";

const Card = () => {
  return (
    <div className="checkout_container">
      <span className="blu"></span>

      <div className="credit-card">
        <div className="flex justify-between items-center">
          <img src={chip} alt="chip" className="w-5" />
          <img src={wifi} alt="" className="w-5" />
        </div>
        <div className="credit-card__body">
          <span className="holder">jonathan micheal</span>
          <div className="card-numbers">
            <div className="hidden-numbers">
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
            <span className="visible-numbers">3456</span>
          </div>
          <div className="credit-card__footer">
            <span className="expiry">09/22</span>
            <img src={card} alt="mastercard" className="w-10" />
          </div>

          <div class="card__design">
            <span class="inner"></span>
          </div>
          <div class="card__design2">
            <span class="inner"></span>
          </div>
        </div>
      </div>

      <div className="checkout-details">
        <div className="purchase-data">
          <div className="data">
            <span className="title">company</span>
            <span className="value">
              <img src={apple} alt="apple" />
              <span className="inner-text">apple</span>
            </span>
          </div>
          <div className="data">
            <span className="title">order number</span>
            <span className="value">
              <span className="inner-text">1266201</span>
            </span>
          </div>
          <div className="data">
            <span className="title">product</span>
            <span className="value">
              <span className="inner-text">macbook air</span>
            </span>
          </div>
          <div className="data">
            <span className="title">VAT (20%)</span>
            <span className="value">
              <span className="inner-text">$100.00</span>
            </span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="purchase-total">
          <div className="total">
            <span className="desc">You have to Pay</span>
            <div className="t-amount">
              <h1 className="amount">
                549<span>.99</span>
              </h1>
              <span className="symbol">USD</span>
            </div>
          </div>
          <img src={docket} alt="docket" className="w-5" />
        </div>
      </div>
    </div>
  );
};

export default Card;
