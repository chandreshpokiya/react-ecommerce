import styled from "styled-components";
import Product from "./Product/Product";

const ProductsStyles = styled.div`
   margin: 50px 0;
   .sec-heading {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;

      &::after {
         content: "";
         display: block;
         margin-top: 5px;
         width: 50px;
         height: 3px;
         background-color: #8e2de2;
      }
   }

   .products {
      display: flex;
      flex-flow: wrap;
      gap: 10px;
   }

   @media only screen and (min-width: 768px) {
      margin: 75px 0;

      .sec-heading {
         margin-bottom: 35px;
         font-size: 24px;
         &::after {
            margin-top: 10px;
         }
      }

      .products {
         gap: 20px;
      }
   }
`;

const Products = ({ innerPage, productsContainer, headingText, products }) => {
   console.log(products)
   return (
      <ProductsStyles className={productsContainer && "products-container"}>
         {!innerPage && <div className="sec-heading"> {headingText}</div>}
         <div className="products">
            {products?.data?.map((item) => (
               <Product key={item.id} id={item.id} productInfo={item.attributes}  />
            ))}
         </div>
      </ProductsStyles>
   );
};

export default Products;
