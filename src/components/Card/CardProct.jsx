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
  .Tag {
    top: 0;
    position: absolute;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #ffffff;
    width: 52px;
    height: 24px;
    text-align: center;
    margin-top: 22px;
  }
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
      margin-bottom: 5px;
    }
  }
`;

const CardProct = ({ title, description, img, rice, status, tag }) => (
  <Card
    hoverable
    style={{
      width: 260,
      height: 410,
    }}
    cover={
      <ImgStyled>
        <img alt="example" src={img} />
        <div className="Tag">
          {tag == 1 ? (
            <div style={{ backgroundColor: "Red" }}>Hot</div>
          ) : tag == 2 ? (
            <div style={{ backgroundColor: "black" }}>Sale</div>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
        </div>
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
