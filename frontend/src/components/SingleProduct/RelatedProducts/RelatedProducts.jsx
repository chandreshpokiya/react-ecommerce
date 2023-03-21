import styled from "styled-components";
import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";

const RelatedProductsStyles = styled.div``;

const RelatedProducts = ({ productId, categoryId }) => {
   const { data } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`);

   return (
      <RelatedProductsStyles>
         <Products headingText="Related Products" products={data} />
      </RelatedProductsStyles>
   );
};

export default RelatedProducts;
