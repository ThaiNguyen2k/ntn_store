import styled from "styled-components";
import IFB from "assets/IFB.png";
import ISW from "assets/ISW.png";
import IIL from "assets/IIL.png";
import IIG from "assets/IIG.png";
const StyleTag = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  .StyleTittle {
    font-family: "AmstelvarAlpha";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    color: #000000;
  }
  .StyleList {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;
const Lisa = styled.div`
  text-align: left;
  width: 392px;
  height: 207px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  .Styleimg {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 208px;
    height: 25px;
    align-items: center;
  }
`;

const FooterMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Tag = () => {
  return (
    <StyleTag>
      <Lisa>
        <h className="StyleTittle">Lisa</h>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="Styleimg">
          <img style={{ width: "20px", height: "20px" }} src={IFB} />
          <img style={{ width: "20px", height: "19px" }} src={ISW} />
          <img style={{ width: "20px", height: "19px" }} src={IIL} />
          <img style={{ width: "20px", height: "19px" }} src={IIG} />
        </div>
      </Lisa>
      <FooterMenu>
        <h className="StyleTittle">Catalog</h>
        <ol className="StyleList">
          <li>Necklaces</li>
          <li>hoodies</li>
          <li>Jewelry Box</li>
          <li>t-shirt</li>
          <li>jacket</li>
        </ol>
      </FooterMenu>
      <FooterMenu>
        <h className="StyleTittle">About Us</h>
        <ol className="StyleList">
          <li>Our Producers</li>
          <li>Sitemap</li>
          <li>FAQ</li>
          <li>About Us</li>
          <li>Terms & Conditions</li>
        </ol>
      </FooterMenu>
      <FooterMenu>
        <h className="StyleTittle">Customer Services</h>
        <ol className="StyleList">
          <li>Contact Us</li>
          <li>Track Your Order</li>
          <li>Product Care & Repair</li>
          <li>Book an Appointment</li>
          <li>Shipping & Returns</li>
        </ol>
      </FooterMenu>
    </StyleTag>
  );
};

export default Tag;
