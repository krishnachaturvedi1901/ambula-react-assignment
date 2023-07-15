import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCartFunction,
  getAllProductsFromCartFunction,
} from "../Redux/CartState/action";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "../Styles/Cart.module.css";
import Toster from "../Components/TosterAlertCompo/Toster";
import { AlertContext } from "../Context/AlertContext";

const Cart = () => {
  const dispatch = useDispatch();
  const {alert,alertMessage,AlertFunction}=useContext(AlertContext)
  const { getAllCartLoading, getAllCartSuccess, getAllCartError } = useSelector(
    (state) => state.getAllCartProductsState
  );

  useEffect(() => {
    dispatch(getAllProductsFromCartFunction());
  }, []);

  const findTotalQuantities = () => {
    const totalQuantity = getAllCartSuccess.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    console.log("totalQuant------->", totalQuantity);
    return totalQuantity;
  };

  const findCartTotal = () => {
    return getAllCartSuccess.reduce((acc, item) => {
      return acc + item.totalPrice;
    }, 0);
  };

  const handleRemoveFromCart = ({ cartId, userId }) => {
    dispatch(deleteFromCartFunction({ cartId, userId }));
    AlertFunction('Product removed from cart')
  };

  return (
    <div className={styles.cartMainDiv}>
      <div>
        <div className={styles.quantityDiv}>
          <p>
            Item types:<strong>{getAllCartSuccess.length || 0}</strong>
          </p>
          <p>
            Total items:<strong>{findTotalQuantities() || 0}</strong>
          </p>
        </div>
        <div className={styles.allCartProdDiv}>
          {getAllCartSuccess ? (
            getAllCartSuccess.map((prod) => {
              return (
                <div className={styles.oneCartProdDiv}>
                  <img id={styles.cartImgId} src={prod.image} />
                  <div className={styles.oneProdSubAndDeleteBtnDiv}>
                    <div className={styles.oneProdSubDiv}>
                      <p>{prod.category}</p>
                      <h3>{prod.title}</h3>
                      <h5>
                        M.R.P.<del> &#8377;{prod.price}</del>
                      </h5>
                      <h4>
                        Offer Price:<strong> &#8377;{prod.price}</strong>
                      </h4>

                      <h4>
                        Quantity:<strong>{prod.quantity}</strong>
                      </h4>
                      <h4>
                        Total price:<strong> &#8377;{prod.totalPrice}</strong>
                      </h4>
                    </div>
                    <div className={styles.cartDeleteAndCartBtn}>
                      <button
                        className={styles.cartDeleteBtn}
                        onClick={() =>
                          handleRemoveFromCart({
                            cartId: prod.id,
                            userId: prod.userId,
                          })
                        }
                      >
                        <AiOutlineDelete size={20} color="white" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>Cart Empty!</h3>
          )}
        </div>
        <div className={styles.cartTotalAndCheckoutDiv}>
            <div className={styles.cartTotalDiv}>
              <p>
                Cart total:<strong> &#8377;{findCartTotal() || 0}</strong>
              </p>
            </div>
            <button
              className={styles.checkoutBtn}
            >
              Checkout("Not part of assignment")
            </button>
            {alert?<Toster message={alertMessage} />:null}
          </div>

      </div>
    </div>
  );
};

export default Cart;
