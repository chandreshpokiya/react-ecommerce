import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";

const CategoryStyle = styled.div`
   margin: 30px 0;

   .layout {
      max-width: calc(100% - 20px);
      margin: 0 auto;
   }

   .category-title {
      font-size: 24px;
   }

   .products-container {
      margin: 20px 0;
   }

   @media only screen and (min-width: 768px) {
      margin: 75px 0;

      .layout {
         max-width: 1240px;
         padding: 0 40px;
      }
      .category-title {
         font-size: 34px;
      }

      .products-container {
         margin: 50px 0;
      }
   }
`;

const Category = () => {
   const { id } = useParams();

   const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

    console.log("🚀 ~ file: Category.jsx:44 ~ Category ~ data:", data)
    

   return (
      <CategoryStyle>
         <div className="layout">
               <div className="category-title">{data?.data[0]?.attributes?.categories?.data[0]?.attributes?.title}</div>
            <Products innerPage productsContainer products={data} />
         </div>
      </CategoryStyle>
   );
};

export default Category;
