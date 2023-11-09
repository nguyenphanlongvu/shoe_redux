import React, { Component } from "react";
import CardShoe from "./CardShoe";
import DetailShoe from "./DetailShoe";
import ListShoe from "./ListShoe";
import { shoeArr } from "./data";
export default class Ex_shoe extends Component {
  state = {
    shoeArr: shoeArr,
    detail: shoeArr[0],
    card: [],
  };
  handleViewDetail = (shoe) => {
    this.setState({
      detail: shoe,
    });
  };
  handleRemove = (idShoe) => {
    // idshoe là id của item được click btn delete
    let newCard = this.state.card.filter((item) => {
      return item.id !== idShoe;
    });
    this.setState({ card: newCard });
  };
  handleCard = (shoe) => {
    console.log("😃 - shoe:", shoe);
    //const newCard = [...this.state.card, shoe]
    const newCard = this.state.card;
    // kiem tratrong card da ton tai san pham hay chua
    const index = newCard.findIndex((value) => value.id == shoe.id);

    console.log({ index });
    if (index !== -1) {
      // san pham da co trong card
      newCard[index].cardQuantity += 1;
    } else {
      newCard.push({ ...shoe, cardQuantity: 1 });
    }

    this.setState({
      cart: newCard,
    });
  };
  // quantity +1 | -1
  handleCardQuantity = (shoeId, Quantity) => {
    console.log("😃 - Quantity:", Quantity);
    console.log("😃 - shoeId:", shoeId);
    const newCard = [...this.state.card];
    const index = newCard.findIndex((value) => value.id == shoeId);
    if (index !== -1) {
      newCard[index].cardQuantity = newCard[index].cardQuantity + Quantity || 1;

      // FALSY:0,"",UNDEFINED,NaN ,NULL => FALSE;
      // truthy = > true
      //A||B ;
      //0 || 1 => 1
      // 1 :: 2 =>1
    }
    this.setState({
      card: newCard,
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <CardShoe
            handleCardQuantity={this.handleCardQuantity}
            handleRemove={this.handleRemove}
            card={this.state.card}
          />
        </div>
        <div className="col-6">
          <ListShoe
            handleViewDetail={this.handleViewDetail}
            list={this.state.shoeArr}
            handleCard={this.handleCard}
          />
        </div>
        <div className="col-12">
          <DetailShoe detail={this.state.detail} />
        </div>
      </div>
    );
  }
}
