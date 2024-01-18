import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Cтільчик сірий",
          img: "grey_chair.webp",
          desc: "Неймовірно зручний стільчик для родини!",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стіл червоний",
          img: "red_table.jpeg",
          desc: "Неймовірно зручний стіл для холостяків!",
          category: "tables",
          price: "30.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "Sofa.jpeg",
          desc: "Неймовірно зручний диван, для проведення часу, із сім`єю!",
          category: "sofas",
          price: "59.99",
        },
        {
          id: 4,
          title: "Лампа",
          img: "lampa.jpeg",
          desc: "Неймовірно зручна лампа, для читання книг та слугує як декорація дому",
          category: "lampe",
          price: "19.99",
        },
        {
          id: 5,
          title: "Ліжко",
          img: "bed.jpeg",
          desc: "Неймовірно зручне ліжко",
          category: "Beds",
          price: "56.99",
        },
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);


  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory ={this.chooseCategory}/>
        <Items onShowItem ={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onShowItem ={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item});
    this.setState({showFullItem: !this.state.showFullItem});
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items});
      return;
    }
    this.setState( {
      currentItems: this.state.items.filter(el => el.category === category),
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id)});
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState(prevState => ({
        orders: [...prevState.orders, item]
      }), () => {
        localStorage.setItem('order', JSON.stringify(this.state.orders));
      });
    }
  }
}

export default App;
