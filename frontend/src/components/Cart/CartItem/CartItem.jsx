import { MdClose } from "react-icons/md";
import styled from "styled-components";
import cartProdImg from "../../../assets/products/headphone-prod-1.webp";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartProductsStyles = styled.div`
   flex-grow: 1;

   .cart-product {
      padding: 20px 15px;
      display: flex;
      gap: 10px;

      .img-container {
         background: rgb(0 0 0 / 0.05);
         width: 60px;
         height: 60px;
         flex-shrink: 0;
         img {
            width: 100%;
            height: 100%;
            object-fit: contain;
         }
      }
      .prod-details {
         flex-grow: 1;
         overflow: hidden;
         position: relative;
         .name {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: 16px;
            line-height: 1;
            margin-bottom: 10px;
            font-weight: 600;
            display: block;
            padding-right: 25px;
         }
         .text {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 12px;
            font-weight: 600;
            .highlight {
               color: #8e2de2;
            }
         }
         svg {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
         }
         .quantity-buttons {
            width: fit-content;
            display: flex;
            border: 1px solid rgb(0 0 0 /0.2);
            height: 30px;
            margin-bottom: 8px;
            user-select: none;
            span {
               font-size: 14px;
               width: 30px;
               display: flex;
               align-items: center;
               justify-content: center;
               cursor: pointer;
               color: #6b6b6b;
               &:nth-child(1) {
                  font-size: 18px;
                  border-right: 1px solid rgb(0 0 0 /0.2);
               }
               &:nth-child(2) {
                  width: 40px;
               }
               &:nth-child(3) {
                  font-size: 18px;
                  border-left: 1px solid rgb(0 0 0 /0.2);
               }
            }
         }
      }
      &:hover {
         background-color: rgb(0 0 0 / 0.05);
      }
   }
`;

const CartItem = () => {
   const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);

   return (
      <CartProductsStyles>
         {cartItems.map((item) => (
            <div key={item.id} className="cart-product">
               <div className="img-container">
                  <img src={import.meta.env.VITE_BASE_URL + item.attributes.Image.data[0].attributes.url} alt="" />
               </div>
               <div className="prod-details">
                  <span className="name">{item.attributes.title}</span>
                  <MdClose className="close-btn" onClick={()=> {handleRemoveFromCart(item)}} />
                  <div className="quantity-buttons">
                     <span onClick={()=>handleCartProductQuantity('dec',item)}>-</span>
                     <span>{item.attributes.quantity}</span>
                     <span onClick={()=>handleCartProductQuantity('inc',item)}>+</span>
                  </div>
                  <div className="text">
                     <span>{item.attributes.quantity}</span>
                     <span>x</span>
                     <span className="highlight">&#8377; {item.attributes.price }</span>
                  </div>
               </div>
            </div>
         ))}
      </CartProductsStyles>
   );
};

export default CartItem;
