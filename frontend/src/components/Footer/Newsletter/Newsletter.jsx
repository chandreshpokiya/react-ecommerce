import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import NewsletterBanner from '../../../assets/newsletter-bg.jpeg'

const NewsletterStyles = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    background: #f9f9f9 url(${NewsletterBanner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .newsletter-content{
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto ;
        text-align: center;
    }
    .small-text{
        margin-bottom: 15px;
        text-transform: uppercase;
        color: rgb(0 0 0 / .5);
    }
    .big-text{
        margin-bottom: 20px;
        font-size: 22px;
        line-height: 30px;
        font-weight: 500;
        text-transform: uppercase;
        padding: 0 30px;
    }

    .form{
        display: flex;
        gap: 5px;
        margin-bottom: 10px;

        input{
            width: 200px;
            height: 40px;
            border-radius: 0;
            border: 1px solid rgb(0 0 0 / .2);
            padding: 0 12px ;
            font-size: 16px;
            outline: none;
        }
        button{
            outline: none;
            border: none;
            height: 40px;
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 16px;
            color: #fff;
            background: #8e2de2;
            border-bottom: 3px solid #8e2de2;
            border-right: 3px solid #8e2de2;
            transition: all .3s ease-in-out;
            &:hover{
                border-color: #6516aa;
            }
        }
    }

    .text{
        margin-bottom: 20px;
        font-size: 14px;
        color: rgb(0 0 0 / .5);
    }

    .social-icons{
        display: flex;
        gap: 20px;

        .icon{
            width: 30px;
            height: 30px;
            background-color: rgb(0 0 0 / .8);
            border-radius: 50%;
            color: #fff;
            display: grid;
            place-content: center;
            transition: all .3s ease-in-out;
            cursor: pointer;

            &:hover{
                background: rgb(0 0 0 / .7);
            }
        }
    }

    @media only screen and (min-width: 768px){
        .big-text{
            font-size: 28px;
        }
        .form{
            input{
                width: 300px;
            }
            button{
                width: 120px;
            }
        }
    }
`;

const Newsletter = () => {
    return <NewsletterStyles>
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign up for latest updates and offers</span>
            <div className="form">
                <input type="email" placeholder="Email" />
                <button>Subscribe</button>
            </div>
            <div className="text">
                Will be used in accordance with our Privacy Policy
            </div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14} />
                </div>
                <div className="icon">
                    <FaTwitter size={14} />
                </div>
                <div className="icon">
                    <FaInstagram size={14} />
                </div>
                <div className="icon">
                    <FaLinkedinIn size={14} />
                </div>
            </div>
        </div>
    </NewsletterStyles>;
};

export default Newsletter;
