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
import ICard1 from "assets/ICard1.png";
import ICard2 from "assets/ICard2.png";
import ICard3 from "assets/ICard3.png";
import ICard4 from "assets/ICard4.png";
import ICard5 from "assets/ICard5.png";
import ICard6 from "assets/ICard6.png";
import ICard7 from "assets/ICard7.png";
import ICard8 from "assets/ICard8.png";
import BrandBanner from "assets/Brand-banner.png";
import CardProct from "components/Card/CardProct";
import CardBanner from "components/Card/CardBanner";
import BarList from "components/Layout/BarList";
import CardFollow from "components/Card/CardFollow";
import CardFooter from "components/Card/CardFooter";
import Tag from "components/Tag/Tag";
const StyleTop = styled.div`
  width: 100%;
  height: 737px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .CardLeft {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 135px;
  }
`;

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-style: normal;
  .Section {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 12px;
    margin-top: 90px;
  }
  .StyleRotated {
    display: flex;
    flex-direction: row;
  }
  .rotated {
    writing-mode: tb-rl;
    transform: rotate(-180deg);
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
    left: 150px;
    top: 0;
    left: 0;
  }
  .TextSub {
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    text-transform: capitalize;
    margin-top: 140px;
  }
  .TextSub2 {
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    text-transform: capitalize;
    margin-top: 340px;
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
  justify-content: space-evenly;
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
    :hover {
      background-color: #ff6f61;
      border: #ff6f61;
    }
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
  grid-template-columns: auto auto;
  gap: 10px;
`;

const CardProducts = styled.div`
  height: 850px;
  width: 1120px;
  margin-top: 40px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto auto auto;
  margin-bottom: 100px;
`;
const CardSele = styled.div`
  width: 1120px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  grid-template-columns: auto auto auto auto;
  margin-bottom: 100px;
`;

const StyleBannerMid = styled.div`
  background-image: url(${BrandBanner});
  width: 100%;
  background-repeat: no-repeat;
`;
const StyleHover = styled.div`
  position: relative;
  .Hover-content {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: none;
  }
  :hover {
    .Hover-content {
      background-color: rgba(0, 0, 0, 0.6);
      height: 55px;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const Data = [
  {
    id: 1,
    title: "Manto",
    qty: 86,
  },
  {
    id: 2,
    title: "Pants",
    qty: 200,
  },
  {
    id: 3,
    title: "Coat",
    qty: 520,
  },
  {
    id: 4,
    title: "Shirt",
    qty: 320,
  },
  {
    id: 5,
    title: "Jacket",
    qty: 103,
  },
];

const Home = () => {
  return (
    <Body>
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
        <div className="CardLeft">
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
        <div className="StyleRotated">
          <div className="rotated">Explore new and popular styles</div>
          <StyleHover>
            <img src={Iitem1} />
            <div className="Hover-content">
              <p>{Data[0].title}</p>
              <p>{Data[0].qty} Product</p>
            </div>
          </StyleHover>
        </div>
        <ItemLeft>
          <StyleHover>
            <img className="Img" src={Iitem2} />
            <div className="Hover-content">
              <p>{Data[1].title}</p>
              <p>{Data[1].qty} Product</p>
            </div>
          </StyleHover>
          <StyleHover>
            <img className="Img" src={Iitem3} />
            <div className="Hover-content">
              <p>{Data[2].title}</p>
              <p>{Data[2].qty} Product</p>
            </div>
          </StyleHover>
          <StyleHover>
            <img className="Img" src={Iitem4} />
            <div className="Hover-content">
              <p>{Data[3].title}</p>
              <p>{Data[3].qty} Product</p>
            </div>
          </StyleHover>
          <StyleHover>
            <img className="Img" src={Iitem5} />
            <div className="Hover-content">
              <p>{Data[4].title}</p>
              <p>{Data[4].qty} Product</p>
            </div>
          </StyleHover>
        </ItemLeft>
      </section>
      <h1 className="TextSub">Or Subscribe To The Newsletter</h1>
      <BarList></BarList>
      <CardProducts>
        <CardProct
          img={ICard1}
          rice={"63.85"}
          status={0}
          title={"Adicolor Classics Joggers"}
          description={"Dress"}
        />
        <CardProct
          img={ICard2}
          rice={"130.0"}
          status={0}
          title={"Nike Sportswear Futura Luxe"}
          description={"Bag"}
        />
        <CardProct
          img={ICard3}
          rice={"53.0"}
          status={0}
          title={"Geometric print Scarf"}
          description={"scarf"}
        />
        <CardProct
          img={ICard4}
          rice={"155.0"}
          status={1}
          title={"Yellow Reserved Hoodie"}
          description={"Dress"}
        />
        <CardProct
          img={ICard5}
          rice={"236.0"}
          status={0}
          title={"Basic Dress Green"}
          description={"Dress"}
        />
        <CardProct
          img={ICard6}
          rice={"198.0"}
          status={1}
          title={"Nike Air Zoom Pegasus"}
          description={"shoe"}
        />
        <CardProct
          img={ICard7}
          rice={"120.5"}
          status={0}
          title={"Nike Repel Miler"}
          description={"Dress"}
        />
        <CardProct
          img={ICard8}
          rice={"160.0"}
          status={0}
          title={"Nike Sportswear Futura Luxe"}
          description={"Glasses"}
        />
      </CardProducts>
      <StyleBannerMid>
        <img src={BrandBanner} style={{ width: "100%" }} />
        <CardBanner></CardBanner>
      </StyleBannerMid>
      <h1 className="TextSub2">Bes't sellers</h1>
      <BarList></BarList>
      <CardSele>
        <CardProct
          img={ICard5}
          rice={"236.0"}
          status={0}
          title={"Basic Dress Green"}
          description={"Dress"}
        />
        <CardProct
          img={ICard2}
          rice={"130.0"}
          status={0}
          title={"Nike Sportswear Futura Luxe"}
          description={"Bag"}
        />
        <CardProct
          img={ICard4}
          rice={"155.0"}
          status={1}
          title={"Yellow Reserved Hoodie"}
          description={"Dress"}
        />
        <CardProct
          img={ICard6}
          rice={"198.0"}
          status={1}
          title={"Nike Air Zoom Pegasus"}
          description={"shoe"}
        />
      </CardSele>
      <CardFollow></CardFollow>
      <footer style={{ width: "100%" }}>
        <Tag />
        <CardFooter />
      </footer>
    </Body>
  );
};

export default Home;
