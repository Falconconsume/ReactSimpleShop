import React, { Component } from "react";
import { RxCross1 } from "react-icons/rx";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item">
        <div>
          <RxCross1
            className="cross"
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <img
            src={"/img/" + this.props.item.img}
            alt="Photos"
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.title}</h2>
          <h2>{this.props.item.desc}</h2>
          <b>{this.props.item.price}$</b>
          <div
            className="add-to-cart"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
