import firebase from "../config/Fire";
import React, { Component, useState, useEffect } from "react";
import { FirestoreProvider, FirestoreCollection } from "react-firestore";
import { render } from "@testing-library/react";
import { ProductConsumer, ProductContext } from "../context.js";

/*
const db = fire.firestore();
db.collection("orders")
  .get()
  .then(snapshot => {
    console.log(snapshot.docs);
  });  */

export default class SystemAdmin extends Component {
  constructor() {
    super();
    this.state = {
      objArr: []
    };
    this.deleteOrder = this.deleteOrder.bind(this);
    this.pickedUpStatus = this.pickedUpStatus.bind(this);
    this.soldStatus = this.soldStatus.bind(this);
    this.prepareStatus = this.prepareStatus.bind(this);
  }

  async getMarker() {
    await firebase
      .firestore()
      .doc("orders/Order1")
      .get()
      .then(snapshot => {
        console.log(snapshot.data());
        return snapshot.data();
      });
  }

  pickedUpStatus = id => {
    const db = firebase.firestore();
    db.collection("orders")
      .doc(id)
      .update({
        status: "Picked Up"
      });
  };
  soldStatus = id => {
    const db = firebase.firestore();
    db.collection("orders")
      .doc(id)
      .update({
        status: "Sold at Half"
      });
  };
  prepareStatus = id => {
    const db = firebase.firestore();
    db.collection("orders")
      .doc(id)
      .update({
        status: "Being Made"
      });
  };
  deleteOrder = id => {
    const db = firebase.firestore();
    db.collection("orders")
      .doc(id)
      .delete();
  };

  render() {
    return (
      <div class="container">
        <div class="container">
          <h3 class="text-capitalize font-weight-bold">
            Consult System Orders
          </h3>
          <ProductConsumer>
            {value => {
              return (
                <div>
                  <button
                    class="btn-outline-dark mr-2 mb-3"
                    onClick={() => {
                      value.menuVeggie();
                      localStorage.setItem("menuOpt", "Vegetarian");
                      console.log(localStorage.getItem("menuOpt"));
                    }}
                  >
                    Suggest Veggietarian Menu
                  </button>
                  <button
                    class="btn-outline-dark mr-2 mb-3"
                    onClick={() => {
                      value.menuMeat();
                      localStorage.setItem("menuOpt", "Meat");
                      console.log(localStorage.getItem("menuOpt"));
                    }}
                  >
                    Suggest Meat Menu
                  </button>
                  <button
                    class="btn-outline-dark  mr-2 mb-3"
                    onClick={() => {
                      value.menuAll();
                      localStorage.setItem("menuOpt", "Buffet");
                      console.log(localStorage.getItem("menuOpt"));
                    }}
                  >
                    Suggest Buffet Menu
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">UserID</th>
                <th scope="col">Item</th>
                <th scope="col">Barcode</th>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Customized Order</th>
                <th scope="col-2">Action</th>
              </tr>
            </thead>

            <FirestoreProvider firebase={firebase}>
              <FirestoreCollection
                path="orders"
                render={({ isLoading, data }) => {
                  return isLoading ? (
                    <h2>Loading</h2>
                  ) : (
                    <tbody>
                      {data.map(story => (
                        <tr>
                          <td scope="col">{story.userID}</td>
                          <td scope="col">{story.name}</td>
                          <td scope="col">{story.barcode}</td>
                          <td scope="col">{story.date}</td>
                          <td scope="col">${story.price}</td>
                          <td scope="col">{story.status}</td>
                          <td scope="col">
                            {story.size}-{story.sauce}-{story.flavour}
                          </td>
                          <td scope="col-5">
                            <button
                              class=" btn-success mr-2"
                              onClick={this.pickedUpStatus.bind(this, story.id)}
                            >
                              Picked Up
                            </button>
                            <button
                              class="btn-danger mr-2"
                              onClick={this.soldStatus.bind(this, story.id)}
                            >
                              Sold at 1/2
                            </button>
                            <button
                              class="btn-secondary mr-2"
                              onClick={this.prepareStatus.bind(this, story.id)}
                            >
                              Prepare
                            </button>
                            <button
                              class="btn-danger mt-1"
                              onClick={this.deleteOrder.bind(this, story.id)}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  );
                }}
              />
            </FirestoreProvider>
          </table>
        </div>
      </div>
    );
  }
}
/*orders.map(order => (
         <tr>
            <td scope="col">hamzakarim1998@gmail.com</td>
            <td scope="col">Cheesecake</td>
            <td scope="col">1234</td>
            <td scope="col">April 1, 2020 at 12:00:00 AM UTC-4</td>
            <td scope="col">$15</td>
            <td scope="col">Placed</td>
            <td scope="col">Small, Extra, Mild</td>
            <td>
              <button class=" btn-success mr-2">Picked Up</button>
              <button class="btn-danger">Sold at Half</button>
            </td>
          </tr>
        )) 
        
           
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">UserID</th>
            <th scope="col">Item</th>
            <th scope="col">Barcode</th>
            <th scope="col">Date</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Customized Order</th>
            <th scope="col-2">Action</th>
          </tr>
        </thead>
        <tbody></tbody>
        {orders.map(order => (
          <h1 key={order.userID}>Hello</h1>
        ))}
        <tbody></tbody>
      </table>
        */
