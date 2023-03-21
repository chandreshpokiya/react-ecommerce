import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CategoryStyles = styled.div`
   margin: 25px 0;

   .categories {
      display: flex;
      flex-flow: wrap;
      gap: 10px;

      .category {
         background-color: #000;
         width: calc(50% - 5px);
         cursor: pointer;
         overflow: hidden;

         img {
            width: 100%;
            display: block;
            transition: all ease 0.3s;
         }
         &:hover {
            img {
               scale: 1.2;
            }
         }
      }
   }

   @media only screen and (min-width: 768px) {
      margin: 50px 0;

      .categories {
         .category {
            width: calc(25% - 10px);
         }
      }
   }
`;

const Category = ({ categories }) => {
   const navigate = useNavigate();

   return (
      <CategoryStyles>
         <div className="categories">
            {categories?.data?.map((item) => (
               <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                  <img src={import.meta.env.VITE_BASE_URL + item.attributes.image.data.attributes.url} alt="" />
               </div>
            ))}
         </div>
      </CategoryStyles>
   );
};

export default Category;
