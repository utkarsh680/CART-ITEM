import Cart from "./Cart";
import React from "react";
import Navbar from "./Navbar";
import firebase from "firebase/compat/app";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
      db: firebase.firestore(),
    };
  }

  componentDidMount() {
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {
    //    snapshot.docs.map((doc) => {
    //           console.log(doc.data())
    //      });
    //     const products = snapshot.docs.map((doc) => {
    //         const data = doc.data();
    //         data['id'] = doc.id;
    //         return data;
    //     });
    //     this.setState({
    //         products,
    //         loading: false
    //     })

    // }
    // )
    this.state.db
    .collection("products")
    .onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({
        products,
        loading: false,
      });
    }
    );

  
  }

  handleIncreaseQuantity = (product) => {
    console.log("Hey please inc the qty of", product);
    const { products, db } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products,
    // });

    const docRef = db
    .collection('products')
    .doc(products[index].id);
    docRef
    .update({
      qty: products[index].qty + 1
    })
  };
  handleDecreaseQuantity = (product) => {
    console.log("Hey please dec the qty of", product);
    const { products, db } = this.state;
    const index = products.indexOf(product);
     if (products[index].qty === 0) {
       return;
     }
    // products[index].qty -= 1;
    // this.setState({
    //   products,
    // });
    const docRef = db
    .collection('products')
    .doc(products[index].id);
    docRef
    .update({ 
      qty: products[index].qty - 1
    })
  };
  handleDeleteProduct = (id) => {
    const { products, db } = this.state;
    const items = products.filter((item) => item.id !== id);
    // console.log(id);

    // this.setState({
    //   products: items,
    // });

    const docRef = db
    .collection('products')
    .doc(id); 
    docRef
    .delete()
    .then(() => {
      console.log('Deleted Successfully');
    }
    )
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  };

  addProduct = () => {
    firebase
    .firestore()
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty: 3,
      title: 'washing machine'
    })
    .then((docRef) => {
      console.log('Product has been added', docRef);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  };
  render() {
    const { products, loading } = this.state;
    return (
      <h1 className="cart">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>add a product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={styles.cartTotal}>TOTAL:{this.getCartTotal()}</div>
      </h1>
    );
  }
}

const styles = {
  cartTotal: {
    fontSize: 25,
    marginLeft: 30,
    marginTop: 20,
  },
};
export default App;
