import React from "react";
import logo from "../../assets/favicon-32x32.png";
import edit from "../../assets/edit-pencil.svg";
import masterCard from "../../assets/master-card.svg";
import badge from "../../assets/badge.svg";
import "./form.scss";

const Form = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" className="rounded-full" />
          <h1>
            AceCoin<span>Pay</span>
          </h1>
        </div>
        <div className="time">
          <span className="box">0</span>
          <span className="box">1</span>
          <span className="time-divider">:</span>
          <span className="box">1</span>
          <span className="box">9</span>
        </div>
      </header>

      <section>
        <form>
          <div className="flex justify-between line-1">
            <div className="field">
              <h2 className="field-title">Card Number</h2>
              <p className="field-text">
                Enter the 16-digit card number on the card
              </p>
            </div>

            <div className="flex items-center gap-2 edit">
              <div className="w-5">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M311.18,78.008L32.23,356.958L0.613,485.716c-1.771,7.209,0.355,14.818,5.604,20.067
		c5.266,5.266,12.88,7.368,20.067,5.604l128.759-31.617l278.95-278.95L311.18,78.008z M40.877,471.123l10.871-44.271l33.4,33.4
		L40.877,471.123z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M502.598,86.818L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-30.825,30.825l122.812,122.812l30.825-30.825
		C515.134,119.679,515.134,99.354,502.598,86.818z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <p className="text-[#0D61D7] font-semibold">Edit</p>
            </div>
          </div>

          <div className="input-controls line-2 py-2 px-3">
            <div className="w-9">
              <img src={masterCard} alt="mastercard" />
            </div>
            <input
              type="text"
              placeholder="2412   -   7512   -   3412   -   3456 "
              className=" w-full bg-[#fcfbfe]"
            />
            <div className="w-6">
              <img src={badge} alt="badge" className="w-full" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between line-3 my-8">
            <div className="field">
              <h2 className="field-title">CVV number</h2>
              <p className="field-text">
                Enter the 3 or 4 digit number on the card
              </p>
            </div>

            <div className="cvv">
              <input type="text" placeholder="327" />
              <div className="w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <title>Keypad</title>
                  <path d="M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 464a56 56 0 1156-56 56.06 56.06 0 01-56 56z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between line-4 my-8 gap-5">
            <div className="field">
              <h2 className="field-title">Expiry Date</h2>
              <p className="field-text">
                Enter the expiration date of the card
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <input
                  type="text"
                  placeholder="09"
                  className="expiry w-full placeholder:text-[#2c2e35] placeholder:font-semibold p-2"
                />
              </div>
              <span>/</span>
              <div>
                <input
                  type="text"
                  placeholder="22"
                  className="w-full placeholder:text-blue placeholder:font-semibold border-2 border-blue rounded-lg bg-[#edf6fe] placeholder:text-center"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between line-5 my-8">
            <div className="field">
              <h2 className="field-title">Password</h2>
              <p className="field-text">Enter your Dynamic password</p>
            </div>
            <div className="pass">
              <input type="password" placeholder="......" className="placeholder:text-4xl" />
              <div className="w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <title>Keypad</title>
                  <path d="M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 464a56 56 0 1156-56 56.06 56.06 0 01-56 56z" />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="bg-[#025efe] text-center w-full text-white rounded-lg p-3 mt-6"
          >
            Pay Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
