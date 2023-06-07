import styled from "styled-components";
import ICardPay from "assets/ICardPay.png";
import IconUp from "assets/IconUp.png";
const StyleInc = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: capitalize;
  color: #ffffff;
`;
const StyleCardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #1e2832;
  height: 52px;
  align-items: center;
`;
function Scroll(){
  window.scrollTo({ top: 0, behavior: "smooth" });

}

const CardFooter = () => {
  return (
    <StyleCardFooter>
      <StyleInc>© 2023 LISA , Inc.</StyleInc>
      <img style={{ width: 283, height: 24 }} src={ICardPay} />
      <p
        onClick={Scroll}
        style={{
          backgroundColor: "#000000",
          color: "#ffffff",
        }}
      >
        Scroll To Top
        <img style={{ marginLeft: "6px" }} src={IconUp} />
      </p>
    </StyleCardFooter>
  );
};

export default CardFooter;
