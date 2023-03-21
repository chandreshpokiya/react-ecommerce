import styled from "styled-components";
import BannerImg from "../../../assets/banner-img.png";

const BannerStyles = styled.div`
    padding: 40px 0px;
    position: relative;
    background-image: linear-gradient(to right, #8e2de2,#4a00e0);

    .content{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column-reverse;
        max-width: calc(100% - 20px);
        margin: 0px auto;
        position: relative;
    }

    .text-content{
        color: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;

        h1{
            font-size: 80px;
            font-weight: 700px;
            line-height: 1;
            margin-bottom: 20px;
        }
        p{
            max-width: 300px;
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 20px;
        }
        .ctas{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            .banner-cta{
                text-transform: uppercase;
                font-size: 13px;
                font-weight: 500;
                border: 2px solid #fff;
                padding: 10px 20px;
                cursor: pointer;
                transition: all .3s ease-in-out;
                border-radius: 50px;

                &.v2{
                    background-color: #fff;
                    color: #000;
                }
                &:hover{
                    opacity: .8;
                }
            }
        }
    }

    .banner-img{
        position: relative;
        z-index: 9;
        width: 200px;
        margin-bottom: 20px;
    }

    @media only screen and (min-width: 768px){
        height: calc(100vh - 80px);

        .content{
            flex-direction: row;
            max-width: 1200px;
        }

        .text-content{
            position: absolute;
            left: 50px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;

            h1{
                font-size: 180px;
            }
            p{
                max-width: 500px;
                font-size: 18px;
                line-height: 24px;
                margin-bottom: 40px;
            }
        }

        .banner-img{
            width: 500px;
            margin-right: 60px;
            margin-top: 50px;
            margin-bottom: 0px;
        }
    }

    @media only screen and (min-width: 1536px){
        .banner-img{
            width: 600px;
            margin-right: 0px;
            margin-top: 0px;
        }
        .text-content{
            left: 0px;
        }
    }
`;

const Banner = () => {
    return <BannerStyles>
        <div className="content">
            <div className="text-content">
                <h1>SELES</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque dignissimos sapiente officiis possimus sint earum
                    dolorem quidem eligendi pariatur? Consequatur?
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
       </div>
   </BannerStyles>;
};

export default Banner;
