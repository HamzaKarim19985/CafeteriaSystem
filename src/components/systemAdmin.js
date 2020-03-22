import firebase from "../config/Fire";
import React, { Component, useState, useEffect } from "react";
import { FirestoreProvider, FirestoreCollection } from "react-firestore";
import { ProductConsumer } from "../context";
import { render } from "@testing-library/react";

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

  render() {
    return (
      <div>
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
                        <td scope="col">March31st</td>
                        <td scope="col">{story.price}</td>
                        <td scope="col">Placed</td>
                        <td scope="col">{story.size}</td>
                        <td>
                          <button class=" btn-success mr-2">Picked Up</button>
                          <button class="btn-danger">Sold at Half</button>
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
