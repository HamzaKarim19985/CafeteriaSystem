import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class Profile extends Component {
  render() {
    const company = localStorage.getItem("company");
    const email = localStorage.getItem("user");
    const password = localStorage.getItem("password");
    return (
      <div class="emp-profile">
        <ProductConsumer>
          {value => {
            const { cart, CartTotals, payrollDeduction, totalPayments } = value;
            const monthlyPayroll = 2000;
            return (
              <form method="post">
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-img">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="profile-head">
                      <h5>Full Name</h5>
                      <h6>{email}</h6>
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            About
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="profile-tab"
                            data-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Payment History
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <label>Company Id</label>
                          </div>
                          <div class="col-md-6">
                            <p>{company}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>User Name</label>
                          </div>
                          <div class="col-md-6">
                            <p>{email}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Email</label>
                          </div>
                          <div class="col-md-6">
                            <p>{email}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Phone</label>
                          </div>
                          <div class="col-md-6">
                            <p>123 456 7890</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Password</label>
                          </div>
                          <div class="col-md-6">
                            <p>{password}</p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <label>Monthly Payroll</label>
                          </div>
                          <div class="col-md-6">
                            <p>${monthlyPayroll}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>
                              Payroll Deductions/Payments made via Payroll
                            </label>
                          </div>
                          <div class="col-md-6">
                            <p>-${payrollDeduction} </p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <label>Total Monthly payments</label>
                          </div>
                          <div class="col-md-6">
                            <p>-${totalPayments}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Final Monthly Payroll</label>
                          </div>
                          <div class="col-md-6">
                            <p>${monthlyPayroll - payrollDeduction}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <label>Your Payemnt Status Has been updated</label>
                            <br />
                            <p> </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
