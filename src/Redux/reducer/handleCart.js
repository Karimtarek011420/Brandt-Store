const initialCart = JSON.parse(localStorage.getItem("cart")) || []; 

const handleCart = (state = initialCart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM": {
      const existingProduct = state.find((item) => item.id === product.id);
      let updatedCart;

      if (existingProduct) {
        updatedCart = state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        updatedCart = [...state, { ...product, qty: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }

    case "DELITEM": {
      const existingProduct = state.find((item) => item.id === product.id);
      let updatedCart;

      if (existingProduct && existingProduct.qty === 1) {
        updatedCart = state.filter((item) => item.id !== product.id);
      } else if (existingProduct) {
        updatedCart = state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      } else {
        updatedCart = state;
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }

    default:
      return state;
  }
};

export default handleCart;
