import styled from "styled-components";
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import PaymentImg from '../../assets/payments.png'

const FooterStyles = styled.footer`
    width: 100%;

    .footer-content{
        padding: 50px 20px;
        max-width: 1240px;
        margin: 0 auto;
        display: flex;
        flex-flow: wrap;
        gap: 20px;

        .col{
            max-width: 300px;

            .title{
                margin-bottom: 20px;
                font-size: 20px;
            }

            .text{
                color: rgb(0 0 0 / 0.5);
                font-size: 14px;
            }
            .c-item{
                display: flex;
                margin-bottom: 10px;

                svg{
                    flex-shrink: 0;
                    font-size: 14px;
                    margin-right: 10px;
                    margin-top: 4px;
                    color: rgb(0 0 0 / 0.5);
                }
            }

            span{
                &.text{
                    display: block;
                    margin-bottom: 10px;
                    cursor: pointer;
                }
            }

        }
    }

    .bottom-bar{
        border-top: 1px solid rgb(0 0 0 / 0.1);

        .bottom-bar-content{
            padding: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            gap: 10px;
            .text{
                font-size: 12px;
                color: rgb(0 0 0 / 0.5);
            }
        }
    }

    @media only screen and (min-width: 768px){
        .footer-content{
            justify-content: space-between;
            padding: 50px 40px;
        }

    .bottom-bar{

        .bottom-bar-content{
            padding: 0 40px;
            height: 60px;
            max-width: 1240px;
            margin: 0 auto;
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
        }
    }
    }
`;

const Footer = () => {
   return (
      <FooterStyles>
         <div className="footer-content">
            <div className="col">
               <div className="title">About</div>
               <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellat modi facilis ipsam deleniti eius deserunt hic aut ab voluptatum. Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="col">
                   <div className="title">Contact</div>
                   <div className="c-item">
                       <FaLocationArrow />
                       <div className="text">42  B Bharti Shirley Rajan Road Bandra , Mumbai,Surat,400050,India</div>
                   </div>
                   <div className="c-item">
                       <FaMobileAlt />
                       <div className="text">Phone: +91 986 532 7458</div>
                   </div>
                   <div className="c-item">
                       <FaEnvelope />
                       <div className="text">Email: nothing@gmail.com</div>
                   </div>
            </div>
            <div className="col">
                   <div className="title">Categories</div>
                   <span className="text">Headephones</span>
                   <span className="text">Smart Watches</span>
                   <span className="text">Bluetooth Speakers</span>
                   <span className="text">Wireless Earbuds</span>
                   <span className="text">Hone Theatre</span>
                   <span className="text">Projector</span>
            </div>
            <div className="col">
                   <div className="title">Pages</div>
                   <span className="text">Home</span>
                   <span className="text">About</span>
                   <span className="text">Privacy Policy</span>
                   <span className="text">Returns</span>
                   <span className="text">Terms &#38; Conditions</span>
                   <span className="text">Contact Us</span>
            </div>
           </div>
           <div className="bottom-bar">
               <div className="bottom-bar-content">
                   <div className="text">
                       STORE.DEV &copy;2023, CREATED BY CHANDRESH POKIYA.
                   </div>
                   <img src={PaymentImg} alt="" />
               </div>
           </div>
      </FooterStyles>
   );
};

export default Footer;
