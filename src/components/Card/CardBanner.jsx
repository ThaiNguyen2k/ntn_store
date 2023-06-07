import styled from "styled-components";
import ZaraLogo from "assets/Zara_Logo.png";
const TittleBanner = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 40px;
  text-transform: capitalize;
  color: #ff6f61;
  margin-top: 55px;
  margin-bottom: 55px;
`;
const StyleBanner = styled.div`
  width: 500px;
  height: 300px;
  margin-top: -600px;
  margin-left: 1320px;
`;
const BtnBanner = styled.button`
  width: 237px;
  height: 72px;
  left: 1083px;
  top: 611px;
  background: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 34px;
  text-transform: capitalize;
  :hover {
    background: #ff6f61;
    border: #ff6f61;
  }
`;

const CardBanner = () => {
  return (
    <StyleBanner>
      <img src={ZaraLogo} />
      <TittleBanner>
        Lustrous yet understated. The new evening wear collection exclusively
        offered at the reopened Giorgio Armani boutique in Los Angeles.
      </TittleBanner>
      <BtnBanner>See Collection</BtnBanner>
    </StyleBanner>
  );
};

export default CardBanner;
