import Cart from './Cart';
import React from 'react';
import Navbar from './Navbar';
import firebase from "firebase/compat/app";
class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products: []
    }   
}

componentDidMount(){
    firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot) => {
       snapshot.docs.map((doc) => {
              console.log(doc.data())
         });
        const products = snapshot.docs.map((doc) => {
            const data = doc.data();
            data['id'] = doc.id;
            return data;
        });
        this.setState({
            products
        })

    }
    )
    
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