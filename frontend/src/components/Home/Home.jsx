import { useEffect, useContext } from "react";
import styled from "styled-components";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const HomeContentStyles = styled.div`
   max-width: calc(100% - 20px);
   margin: 0 auto;

   @media only screen and (min-width: 768px) {
      max-width: 1240px;
      padding: 0 40px;
   }
`;

const Home = () => {
   const { categories, setCategories, products, setProducts } = useContext(Context);

   useEffect(() => {
      getCategories();
      getProducts();
   }, []);

   const getCategories = () => {
      fetchDataFromApi("/api/categories?populate=*").then((res) => {
         setCategories(res);
      });
   };
   const getProducts = () => {
      fetchDataFromApi("/api/products?populate=*").then((res) => {
         setProducts(res);
      });
   };

   return (
      <>
         <Banner />
         <HomeContentStyles>
            <div className="layout">
               <Category categories={categories} />
               <Products products={products} headingText="Popular Products" />
            </div>
         </HomeContentStyles>
      </>
   );
};

export default Home;
