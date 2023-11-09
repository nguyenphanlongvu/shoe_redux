import React, { Component } from "react";

export default class CardShoe extends Component {
  render() {
    let { card, handleRemove, handleCardQuantity } = this.props;
    console.log("😃 - render - card:", card);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>

            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {card.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <img style={{ width: 50 }} src={item.image} alt="" />
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleCardQuantity(item.id, 1);
                    }}
                    className="btn btn-success"
                  >
                    +
                  </button>
                  <span className="mx-3">{item.cardQuantity}</span>
                  <button
                    onClick={() => {
                      handleCardQuantity(item.id, -1);
                    }}
                    className="btn btn-danger"
                  >
                    -
                  </button>
                </td>
                <td>{item.price}</td>

                <td>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
