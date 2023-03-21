import styled, { keyframes } from "styled-components";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";

const revealCartAnim = keyframes`
    to{
        transform: translateX(0);
    }
`;

const CartPannelStyles = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: flex-end;
   z-index: 99;

   .opac-layer {
      background-color: rgb(0 0 0 / 0.5);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
   }
   .cart-content {
      width: 100%;
      height: 100%;
      background-color: #fff;
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      animation: ${revealCartAnim} 0.3s ease forwards;

      .cart-header {
         display: flex;
         align-items: center;
         justify-content: flex-end;
         padding: 20px 15px;
         border-bottom: 1px solid rgb(0 0 0 / 0.1);

         .heading {
            flex-grow: 1;
            margin-bottom: 0px;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
         }
         .close-btn {
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;

            svg {
               font-size: 18px;
            }
            .text {
               text-transform: uppercase;
               font-size: 14px;
            }
            &:hover {
               opacity: 0.5;
            }
         }
      }

      .empty-cart {
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 20px;
         margin-top: 100px;
         svg {
            font-size: 120px;
            opacity: 0.1;
         }
         .return-btn {
            outline: none;
            border: none;
            height: 40px;
            width: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 13px;
            text-transform: uppercase;
            color: #fff;
            background: #8e2de2;
            border-bottom: 3px solid #6516aa;
            flex-grow: 1;
         }
      }

      .cart-footer {
         border-top: 1px solid rgb(0 0 0 / 0.1);
         .subtotal {
            padding: 20px 15px;
            border-bottom: 1px solid rgb(0 0 0 / 0.1);
            display: flex;
            justify-content: space-between;

            .text {
               margin-bottom: 0px;
               font-size: 20px;
               font-weight: 700;
               text-transform: uppercase;
               &.total {
                  color: #8e2de2;
               }
            }
         }
         .button {
            padding: 20px 15px;
            .checkout-cta {
               outline: none;
               border: none;
               height: 50px;
               width: 100%;
               display: flex;
               align-items: center;
               justify-content: center;
               cursor: pointer;
               font-size: 16px;
               color: #fff;
               background: #8e2de2;
               border-bottom: 3px solid #6516aa;
               flex-grow: 1;
            }
         }
      }
   }

   @media only screen and (min-width: 768px) {
      .cart-content {
         width: 340px;
      }
   }
`;

const Cart = ({ setShowCart }) => {
   const { cartSubTotal, cartItems } = useContext(Context);
   const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

   const handlePayment = async () => {
      try {
         const stripe = await stripePromise;
         const res = await makePaymentRequest.post("/api/orders", {
            products: cartItems,
         });
   
         await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id
         })
      } catch (err) {
         console.log(err)
      }
      
   };

   return (
      <CartPannelStyles>
         <div className="opac-layer" onClick={() => setShowCart(false)} />
         <div className="cart-content">
            <div className="cart-header">
               <span className="heading">Shopping Cart</span>
               <span className="close-btn" onClick={() => setShowCart(false)}>
                  <MdClose />
                  <span className="text">close</span>
               </span>
            </div>

            {!cartItems.length && (
               <div className="empty-cart">
                  <BsCartX />
                  <span> No Products in the Cart</span>
                  <button className="return-btn">Return to shop</button>
               </div>
            )}

            {!!cartItems.length && (
               <>
                  <CartItem />
                  <div className="cart-footer">
                     <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text total">&#8377; {cartSubTotal}</span>
                     </div>
                     <div className="button">
                        <button className="checkout-cta" onClick={handlePayment}>
                           Check out
                        </button>
                     </div>
                  </div>
               </>
            )}
         </div>
      </CartPannelStyles>
   );
};

export default Cart;
