import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    const { handleCard } = this.props;
    console.log(this.props);
    return (
      <div className="row">
        {this.props.list.map((item, index) => {
          return (
            <ItemShoe
              handleViewDetail={this.props.handleViewDetail}
              handleCard={handleCard}
              key={index}
              data={item}
            />
          );
        })}
      </div>
    );
  }
}
