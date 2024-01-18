import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Cтільчик сірий",
          img: "grey_chair.webp",
          desc: "Неймовірно зручний стільчик для родини!",
          catagory: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стіл червоний",
          img: "red_table.jpeg",
          desc: "Неймовірно зручний стіл для холостяків!",
          catagory: "tables",
          price: "30.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "Sofa.jpeg",
          desc: "Неймовірно зручний диван, для проведення часу, із сім`єю!",
          catagory: "sofas",
          price: "59.99",
        },
        {
          id: 4,
          title: "Лампа",
          img: "lampa.jpeg",
          desc: "Неймовірно зручна лампа, для читання книг та слугує як декорація дому",
          catagory: "lampas",
          price: "19.99",
        },
        {
          id: 5,
          title: "Ліжко",
          img: "bed.jpeg",
          desc: "Неймовірно зручне ліжко",
          catagory: "Beds",
          price: "56.99",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.addToOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    console.log(id)
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
