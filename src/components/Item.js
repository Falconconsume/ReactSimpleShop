import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img src={"/img/" + this.props.item.img} alt="Photos"/>
        <h2>{this.props.item.title}</h2>
        <h2>{this.props.item.desc}</h2>
        <b>{this.props.item.price}$</b>
        <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    );
  }
}

export default Item;