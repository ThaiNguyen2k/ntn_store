import styled from "styled-components";
import IFollow1 from "assets/IFollow1.png";
import IFollow2 from "assets/IFollow2.png";
import IFollow3 from "assets/IFollow3.png";
import IFollow4 from "assets/IFollow4.png";
import IFollow5 from "assets/IFollow5.png";
import IFollow6 from "assets/IFollow6.png";

const StyleFollowText = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 59px;
  text-align: center;
  text-transform: capitalize;
  color: #000000;
`;
const StyleBody = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 653px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const StyleTag = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  text-transform: capitalize;
  color: #ff6f61;
`;
const StyleImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1120px;
  .ImgF {
    width: 180px;
    height: 180px;
  }
`;

const CardFollow = () => {
  return (
    <StyleBody>
      <StyleFollowText>
        Follow Products And Discounts On Instagram
      </StyleFollowText>
      <StyleImg>
        <img className="ImgF" src={IFollow1} />
        <img className="ImgF" src={IFollow2} />
        <img className="ImgF" src={IFollow3} />
        <img className="ImgF" src={IFollow4} />
        <img className="ImgF" src={IFollow5} />
        <img className="ImgF" src={IFollow6} />
      </StyleImg>
      <StyleTag>@lisa.official</StyleTag>
    </StyleBody>
  );
};

export default CardFollow;
