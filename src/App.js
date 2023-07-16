import Cart from './Cart';
import React from 'react';
import Navbar from './Navbar';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products: [
            {
            price: 99,
            title: 'watch ',
            qty: 1,
            img: 'https://freepngimg.com/thumb/watch/22489-9-branded-watch-photos-thumb.png',
            id:1
            },
            {
            price: 999,
            title: 'Mobile Phone',
            qty: 10,
            img: 'https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=626&ext=jpg',
            id:2
            },
            {
            price: 999,
            title: 'camera',
            qty: 4,
            img: 'https://img.freepik.com/premium-photo/camera-with-lens-that-says-word-nikon-it_873925-14650.jpg?size=626&ext=jpg&ga=GA1.1.1223866099.1688312878&semt=ais',
            id:3
            }
        ]
    }
}
handleIncreaseQuantity = (product) => {
    console.log('Hey please inc the qty of', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products
    })
}
handleDecreaseQuantity = (product) => {
    console.log('Hey please dec the qty of', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products
    })
}
handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id
    );
    console.log(id)
    
    this.setState({
        products: items
    })
}

getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
        count += product.qty;
    }
    )
    return count;
}

getCartTotal = () => {
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
  })
  return cartTotal;
}
  render() {
    const {products} = this.state;
  return (
    <h1 className="cart">
      <Navbar count = {this.getCartCount()}/>
      <Cart
       
       products = {products}
       onIncreaseQuantity = {this.handleIncreaseQuantity}
       onDecreaseQuantity = {this.handleDecreaseQuantity}
       onDeleteProduct = {this.handleDeleteProduct} 
      />
      <div style={styles.cartTotal}>TOTAL:{this.getCartTotal()}</div>
      
    </h1>
  );
}
}

const styles = {
  cartTotal:{
    fontSize: 25,
    marginLeft:30,
    marginTop:20
  }
}
export default App;