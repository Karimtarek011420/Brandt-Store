import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../../Redux/actions/index";
import { NavLink } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div
        className="cart-item px-4 my-5 bg-light rounded-3 shadow-sm"
        key={cartItem.id}
      >
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close bg-danger text-danger float-end"
            aria-label="Close"
          ></button>
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                className="img-fluid rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6 col-12">
              <h5 className="cart-item-title">{cartItem.title}</h5>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="empty-cart px-4 my-5 bg-light rounded-3 py-5 text-center">
        <h3>Your Cart is Empty</h3>
        <p>
          It looks like you have not added any items to your cart yet. Start
          shopping now!
        </p>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/Checkout"
            className="btn btn-danger mb-5 w-50 mx-auto checkout-btn"
          >
            Proceed to Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
