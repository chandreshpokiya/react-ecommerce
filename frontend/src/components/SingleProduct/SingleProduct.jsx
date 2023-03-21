import styled from "styled-components";
import { FaCartPlus, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";

const SingleProductStyles = styled.div`
   margin: 20px 0;

   .layout {
      max-width: calc(100% - 20px);
      margin: 0 auto;

      .single-product-page {
         display: flex;
         flex-direction: column;

         .left {
            width: 100%;
            background-color: rgb(0 0 0 /0.05);
            flex-shrink: 0;
            img {
               width: 100%;
               display: block;
               height: 100%;
               object-fit: contain;
            }
         }
         .right {
            display: flex;
            flex-direction: column;
            padding-top: 20px;

            .name {
               font-size: 20px;
               line-height: 28px;
               margin-bottom: 20px;
            }
            .price {
               font-size: 24px;
               line-height: 32px;
               margin-bottom: 20px;
            }
            .desc {
               font-size: 14px;
               line-height: 20px;
               margin-bottom: 20px;
               color: #6b6b6b;
            }

            .cart-buttons {
               display: flex;
               .quantity-buttons {
                  width: fit-content;
                  display: flex;
                  border: 2px solid rgb(0 0 0 /0.2);
                  margin-right: 10px;
                  height: 50px;
                  user-select: none;
                  span {
                     font-size: 18px;
                     width: 40px;
                     display: flex;
                     align-items: center;
                     justify-content: center;
                     cursor: pointer;
                     color: #6b6b6b;
                     &:nth-child(1) {
                        border-right: 2px solid rgb(0 0 0 /0.2);
                     }
                     &:nth-child(2) {
                        width: 60px;
                     }
                     &:nth-child(3) {
                        border-left: 2px solid rgb(0 0 0 /0.2);
                     }
                  }
               }
               .add-to-cart-btn {
                  outline: none;
                  border: none;
                  height: 50px;
                  width: 180px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  font-size: 16px;
                  color: #fff;
                  background-color: #8e2de2;
                  border-bottom: 3px solid #6516aa;
                  flex-grow: 1;
               }
            }

            .divider {
               margin: 20px 0;
               height: 1px;
               width: 100%;
               background-color: rgb(0 0 0 /0.1);
            }

            .info-item {
               .text-bold {
                  font-size: 18px;
                  font-weight: 500;
                  display: block;
                  &:first-child {
                     margin-bottom: 20px;
                  }

                  span {
                     font-size: 16px;
                     font-weight: 400;
                     cursor: pointer;
                     color: #6b6b6b;
                  }
                  svg {
                     margin: 0 5px;
                  }
               }
            }
         }
      }
   }

   @media only screen and (min-width: 768px) {
      margin: 75px 0;

      .layout {
         max-width: 1240px;
         padding: 0 40px;

         .single-product-page {
            flex-direction: row;

            .left {
               width: 600px;
               height: 600px;
            }

            .right {
               padding: 0 35px;

               .name {
                  font-size: 24px;
                  line-height: 32px;
               }
               .desc {
                  font-size: 16px;
                  line-height: 24px;
               }
               .cart-buttons {
                  margin-top: 30px;

                  .add-to-cart-btn {
                     flex-grow: unset;
                  }
               }
            }
         }
      }
   }
`;

const SingleProduct = () => {
   const [quantity, setQuantity] = useState(1);
   const { id } = useParams();
   const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

   const { handleAddtoCart } = useContext(Context);

   if (!data) return;
   const product = data.data[0].attributes;

   const decrement = () => {
      if (quantity == 1) return;
      setQuantity((prev) => prev - 1);
   };
   const increment = () => {
      if (quantity == 10) return;
      setQuantity((prev) => prev + 1);
   };

   return (
      <SingleProductStyles>
         <div className="layout">
            <div className="single-product-page">
               <div className="left">
                  <img src={import.meta.env.VITE_BASE_URL + product.Image?.data[0].attributes.url} alt="" />
               </div>
               <div className="right">
                  <span className="name">{product.title}</span>
                  <span className="price">&#8377; {product.price}</span>
                  <span className="desc">{product.desc}</span>

                  <div className="cart-buttons">
                     <div className="quantity-buttons">
                        <span onClick={decrement}>-</span>
                        <span>{quantity}</span>
                        <span onClick={increment}>+</span>
                     </div>
                     <button
                        className="add-to-cart-btn"
                        onClick={() => {
                           handleAddtoCart(data.data[0], quantity);
                           setQuantity(1)
                        }}
                     >
                        <FaCartPlus size={20} /> Add to cart
                     </button>
                  </div>

                  <span className="divider" />

                  <div className="info-item">
                     <span className="text-bold">
                        Category: <span>{product.categories.data[0].attributes.title}</span>
                     </span>
                     <span className="text-bold">
                        Share:
                        <span className="social-icons">
                           <FaFacebookF size={16} />
                           <FaTwitter size={16} />
                           <FaInstagram size={16} />
                           <FaLinkedinIn size={16} />
                           <FaPinterest size={16} />
                        </span>
                     </span>
                  </div>
               </div>
            </div>
            <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
         </div>
      </SingleProductStyles>
   );
};

export default SingleProduct;
