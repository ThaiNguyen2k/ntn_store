import PrimarySearchAppBar from "components/Search/Search";
import styled from "styled-components";
import Search from "assets/search.png";
import IShoping from "assets/Shoping.png";
import IAccount from "assets/Account.png";
import ImageHeader from "assets/ImageHeader.png";
import Img1 from "assets/brand-1.png";
import Img2 from "assets/brand-5.png";
import Img3 from "assets/brand-3.png";
import Img4 from "assets/brand-4.png";
import Img5 from "assets/brand-2.png";
import Iitem1 from "assets/Iitem1.png";
import Iitem2 from "assets/Iitem2.png";
import Iitem3 from "assets/Iitem3.png";
import Iitem4 from "assets/Iitem4.png";
import Iitem5 from "assets/Iitem5.png";

import IShop from "assets/IShop.png";
const StyleTop = styled.div`
  width: 100%;
  height: 737px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .CardRight {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 135px;
  }
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  .Section {
    flex-direction: row;
    display: flex;
    width: 648px;
    height: 648px;
    justify-content: center;
  }
`;

const StyleHeader = styled.header`
  width: 1120px;
  height: 59px;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border: 2px solid beige;
  border-radius: 25px;
  .TextLogo {
    font-family: "AmstelvarAlpha";
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;
  }
`;

const StyI = styled.div`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  height: 20px;
  gap: 10px;
`;
const Card = styled.div`
  width: 686px;
  height: 364px;
  align-items: left;
  display: flex;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  .Text1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 74px;
    line-height: 55px;
  }
  .Text2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
  }
  .BtnShop {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 19px 26px;
    gap: 8px;
    width: 223px;
    height: 72px;
    background: #1e2832;
    color: White;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 34px;
  }
`;
const Brand = styled.div`
  width: 1120px;
  height: 70px;
  justify-content: space-between;
  display: flex;
  margin-top: 90px;
`;

const ItemLeft = styled.div`
  display: grid;
  align-items: center;
  .Img {
    width: 312px;
    height: 312px;
    padding: 12px;
  }
`;
const Home = () => {
  return (
    <Div>
      <StyleTop>
        <StyleHeader>
          <img className="Search" src={Search}></img>
          <h1 className="TextLogo">Lisa Store</h1>
          <StyI>
            <img src={IAccount} />
            <p>Account</p>
            <img src={IShoping} />
            <p>Shopping</p>
          </StyI>
        </StyleHeader>
        <div className="CardRight">
          <Card>
            <p className="Text1">Collections</p>
            <p className="Text2">
              You Can Explore Ans Shop Many Differnt Collection From Various
              Barands Here.
            </p>
            <button className="BtnShop">
              <img src={IShop} />
              Shop Now
            </button>
          </Card>
          <img src={ImageHeader} />
        </div>
      </StyleTop>
      <Brand>
        <img src={Img1} />
        <img src={Img2} />
        <img src={Img3} />
        <img src={Img4} />
        <img src={Img5} />
      </Brand>
      <section className="Section">
        <img src={Iitem1} />
        <ItemLeft>
          <img className="Img" src={Iitem2} />
          <img className="Img" src={Iitem3} />
          <img className="Img" src={Iitem4} />
          <img className="Img" src={Iitem5} />
        </ItemLeft>
      </section>
    </Div>
  );
};

export default Home;
