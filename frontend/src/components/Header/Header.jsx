import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../utils/context";

const stickyHeader = keyframes`
     0%{
        transform: translateY(-100%);
    }
    100%{
        transform: translateY(0);
    }
`;

const HeaderStyles = styled.header`
   width: 100%;
   padding: 0px 20px;
   background-color: #212121;
   color: #fff;
   border-bottom: 1px solid rgb(0 0 0 / 0.1);
   position: relative;
   z-index: 99;

   &.sticky-header {
      position: sticky;
      top: 0;
      animation: ${stickyHeader} 0.3s ease-in-out forwards;
   }

   .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      max-width: 1200px;
      margin: 0px auto;
      .left {
         display: none;
         align-items: center;
         gap: 25px;
         li {
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;
         }
      }
      .center {
         font-size: 22px;
         font-weight: 700;
         cursor: pointer;
      }
      .right {
         display: flex;
         align-items: center;
         gap: 20px;
         svg {
            font-size: 20px;
            cursor: pointer;
         }
         .cart-icon {
            position: relative;

            span {
               min-width: 22px;
               text-align: center;
               background-color: #8e2de2;
               padding: 2.5px;
               position: absolute;
               top: -5px;
               right: -12px;
               font-size: 12px;
               line-height: 1;
               border-radius: 10px;
            }
         }
      }
   }

   @media only screen and (min-width: 768px) {
      padding: 0 40px;

      .header-content {
         height: 80px;
         .left {
            display: flex;
         }
         .center {
            font-size: 34px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
         }
         .right {
            gap: 25px;
            font-size: 24px;
         }
      }
   }
`;

const Header = () => {
   const [headerSticky, setHeaderSticky] = useState(false);
   const [showCart, setShowCart] = useState(false);
   const [showSearch, setShowSearch] = useState(false);

   const { cartCount } = useContext(Context)

   const handleScroll = () => {
      const offset = window.scrollY;
      if (offset >= 100) {
         setHeaderSticky(true);
      } else {
         setHeaderSticky(false);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
   }, []);

   const navigate = useNavigate()

   return ( 
      <>
         <HeaderStyles className={`${headerSticky ? "sticky-header" : ""}`}>
            <div className="header-content">
               <ul className="left">
                  <li  onClick={()=> navigate('/')}>Home</li>
                  <li>About</li>
                  <li>Categories</li>
               </ul>
               <div className="center" onClick={()=> navigate('/')}>STORE.DEV</div>
               <div className="right">
                  <TbSearch onClick={() => setShowSearch(true)} />
                  <AiOutlineHeart />
                  <span className="cart-icon">
                     <CgShoppingCart onClick={() => setShowCart(true)} />
                     {!!cartCount && <span>{cartCount}</span>}
                  </span>
               </div>
            </div>
         </HeaderStyles>
         {showCart && <Cart setShowCart={setShowCart} />}
         {showSearch && <Search setShowSearch={setShowSearch} /> }
      </>
   );
};

export default Header;
