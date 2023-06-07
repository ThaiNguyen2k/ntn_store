import { Card } from "antd";
import styled from "styled-components";
import Heart from "assets/Heart.png";
import Search from "assets/Search2.png";
import MarKet from "assets/Market.png";
const { Meta } = Card;
const StyleRice = styled.div`
  position: absolute;
  margin-top: -20px;
  margin-left: 180px;
`;
const StyleRiceSale = styled(StyleRice)`
  color: red;
`;

const ImgStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
  }
  .ImgI {
    height: 20px;
    width: 20px;
    margin-right: 20px;
  }
  .hover-content {
    display: none;
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .BtnShop {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    width: 130px;
    height: 25px;
    background-color: #000000;
    margin-right: -10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-transform: capitalize;
    color: #ffffff;
  }
  :hover {
    .hover-content {
      background-color: black;
      height: 55px;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

const CardProct = ({ title, description, img, rice, status }) => (
  <Card
    hoverable
    style={{
      width: 260,
      height: 410,
    }}
    cover={
      <ImgStyled>
        <img alt="example" src={img} />
        <div className="hover-content">
          <div>
            <img className="ImgI" src={Heart} />
            <img className="ImgI" src={Search} />
          </div>
          <div className="BtnShop">
            <img className="ImgI" src={MarKet} />
            Shop Now
          </div>
        </div>
      </ImgStyled>
    }
  >
    <Meta title={title} description={description}></Meta>
    {status === 0 ? (
      <StyleRice>${rice}</StyleRice>
    ) : (
      <StyleRiceSale>${rice}</StyleRiceSale>
    )}
  </Card>
);
export default CardProct;
