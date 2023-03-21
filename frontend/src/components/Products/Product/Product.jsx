import styled from "styled-components";
import { useNavigate} from 'react-router-dom'

const ProductStyle = styled.div`
    width: calc(50% - 5px);
    margin-bottom: 20px;
    cursor: pointer;

    .thumbnail{
        width: 100%;
        height: 180px;
        background-color: rgb(0 0 0 / .05);
        margin-bottom: 10px;
        padding: 25px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        img{
            transition: all .3s ease;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .product-details {
        .name {
            font-size: 14px;
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .price{
            font-size: 18px;
        }
    }

    &:hover{
        .thumbnail{
            img{
                scale: 1.2;
            }
        }
    }

    
    @media only screen and (min-width: 768px){
        width: calc(33.333% - 15px);
    }

    @media only screen and (min-width: 992px){
        width: calc(25% - 15px);


        .thumbnail{
             height: 350px;
        }
        .product-details {
            .name {
                font-size: 16px;
                margin-bottom: 10px;
            }
            .price{
                font-size: 24px;
            }
        }
    }
`;

const Product = ({ id, productInfo }) => {
    const navigate = useNavigate()
   return (
      <ProductStyle onClick={()=>navigate('/product/'+id)}>
         <div className="thumbnail">
            <img src={import.meta.env.VITE_BASE_URL + productInfo?.Image?.data[0]?.attributes?.url} alt="" />
         </div>
         <div className="product-details">
            <span className="name">{productInfo.title}</span>
            <span className="price">&#8377; {productInfo.price}</span>
         </div>
      </ProductStyle>
   );
};

export default Product;
