import { useState } from "react";
import { MdClose } from "react-icons/md";
import styled, { keyframes } from "styled-components";
import cartProdImg from "../../../assets/products/headphone-prod-1.webp";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const SearchModalAnim = keyframes`
    to{
        transform: translateY(0);
    }
`;

const SearchStyles = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   z-index: 999;
   top: 0;
   left: 0;
   background-color: #fff;
   transform: translateY(100%);
   animation: ${SearchModalAnim} 0.5s ease forwards;

   .form-field {
      display: flex;
      justify-content: center;
      padding: 10px 15px;
      border-bottom: 1px solid rgb(0 0 0 / 0.1);
      position: relative;

      input {
         width: 100%;
         max-width: 1200px;
         height: 50px;
         text-align: center;
         font-size: 20px;
         font-weight: 600;
         color: #212121;
         outline: none;
         border: none;
         text-transform: uppercase;
         &::placeholder {
            color: rgb(0 0 0 / 0.3);
         }
      }
      .close-btn {
         position: absolute;
         top: 50%;
         right: 20px;
         font-size: 25px;
         transform: translateY(-50%);
         cursor: pointer;
      }
   }

   .search-result-content {
      max-width: calc(100% - 20px);
      margin: 0 auto;
      .search-results {
         height: calc(100vh - 110px);
         overflow: auto;
         margin: 20px 0;

         .search-result-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 0px;
            border-bottom: 1px solid rgb(0 0 0 / 0.1);
            cursor: pointer;
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
               .name {
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  font-size: 16px;
                  line-height: 1;
                  margin-bottom: 10px;
                  font-weight: 600;
                  display: block;
               }
               .desc {
                  font-size: 14px;
                  line-height: 1;
                  display: block;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  color: rgb(0 0 0 / 0.5);
               }
            }
         }
      }
   }

   @media only screen and (min-width: 768px) {
      .form-field {
         padding: 20px;
         input {
            font-size: 48px;
            height: 80px;
         }
         .close-btn {
            right: 40px;
            font-size: 50px;
         }
      }

      .search-result-content {
         max-width: 840px;
         padding: 0 20px;
         .search-results {
            height: calc(100vh - 160px);
         }
      }
   }
`;

const Search = ({ setShowSearch }) => {
   const [query, setQuery] = useState("");
   const navigate = useNavigate();

   const makeSearch = (e) => {
      setQuery(e.target.value);
   };

   let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);

   if (!query?.length) {
      data = null;
   }

   return (
      <SearchStyles>
         <div className="form-field">
            <input type="text" autoFocus placeholder="Search Products" value={query} onChange={makeSearch} />
            <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
         </div>

         <div className="search-result-content">
            <div className="search-results">
               {data?.data?.map((item) => (
                  <div
                     key={item.id}
                     className="search-result-item"
                     onClick={() => {
                        navigate(`/product/${item.id}`);
                        setShowSearch(false);
                     }}
                  >
                     <div className="img-container">
                        <img src={import.meta.env.VITE_BASE_URL + item.attributes.Image.data[0].attributes.url} alt="" />
                     </div>
                     <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <span className="desc">{item.attributes.desc}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </SearchStyles>
   );
};

export default Search;
