import React from 'react'
import './App.css';
import Header from './components/header';
import ItemsList from './components/itemsList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      favs: [],
      items: [],
      cartCount: 0 // добавляем cartCount в state
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteFromOrder = this.deleteFromOrder.bind(this);
    this.addToFav = this.addToFav.bind(this);
    this.deleteFromFav = this.deleteFromFav.bind(this);
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data.products, })
      })
      .catch(error => console.error(error))
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({
        orders: [...this.state.orders, item],
        //
         cartCount: this.state.cartCount + 1 // увеличиваем cartCount на 1
      }, () => {
        console.log(this.state.orders);
console.log(this.state.cartCount)
      });
    }
  }

  deleteFromOrder(id) {
    console.log(id);
    this.setState({
      orders: this.state.orders.filter(el => el.id !== id),
      //
       cartCount: this.state.cartCount - 1 // уменьшаем cartCount на 1
    })
  }

//
  addToFav(item) {
    let isInArray = false;
    this.state.favs.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({ favs: [...this.state.favs, item] }, () => {
        console.log(this.state.favs);
      });
    }
  }
  deleteFromFav(id) {
    console.log(id);
    this.setState({ favs: this.state.favs.filter(el => el.id !== id)})
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} favs={this.state.favs} onDelete={this.deleteFromOrder} onDeleteFav={this.deleteFromFav}/>
        <ItemsList items={this.state.items} onAdd={this.addToOrder} onAddToFav={this.addToFav} onDeleteFav={this.deleteFromFav}/>
      </div>
    );
  }
}

export default App;