import styled from "styled-components";
import IFollow1 from "assets/IFollow1.png";
import IFollow2 from "assets/IFollow2.png";
import IFollow3 from "assets/IFollow3.png";
import IFollow4 from "assets/IFollow4.png";
import IFollow5 from "assets/IFollow5.png";
import IFollow6 from "assets/IFollow6.png";
import Camera from "assets/Camera.png";
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
  width: 1920px;
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
    :hover {
    }
  }
`;

const ImgStyled = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  .hover-content {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
  }
  :hover {
    .hover-content {
      width: 180px;
      height: 180px;
      display: flex;
      justify-content: space-around;
      background-color: rgba(0, 0, 0, 0.5);
      background-size: cover;
      inset: 0;
      margin: auto;
      /* filter: opacity(50%); */
    }
  }
  .ImgCamera {
    width: 50px;
    height: 50px;
    display: flex;
    inset: 0;
    margin: auto;
  }
`;
const CardFollow = () => {
  return (
    <StyleBody>
      <StyleFollowText>
        Follow Products And Discounts On Instagram
      </StyleFollowText>
      <StyleImg>
        <ImgStyled>
          <img className="ImgF" src={IFollow1} />
          <div className="hover-content">
            {" "}
            <img className="ImgCamera" src={Camera} />
          </div>
        </ImgStyled>
        <ImgStyled>
          <img className="ImgF" src={IFollow2} />
          <div className="hover-content">
            {" "}
            <img className="ImgCamera" src={Camera} />
          </div>
        </ImgStyled>
        <ImgStyled>
          <img className="ImgF" src={IFollow3} />
          <div className="hover-content">
            {" "}
            <img className="ImgCamera" src={Camera} />
          </div>
        </ImgStyled>
        <ImgStyled>
          <img className="ImgF" src={IFollow4} />
          <div className="hover-content">
            {" "}
            <img className="ImgCamera" src={Camera} />
          </div>
        </ImgStyled>
        <ImgStyled>
          <img className="ImgF" src={IFollow5} />
          <div className="hover-content">
            {" "}
            <img className="ImgCamera" src={Camera} />
          </div>
        </ImgStyled>
        <ImgStyled>
          <img className="ImgF" src={IFollow6} />
          <div className="hover-content">
            <img className="ImgCamera" src={Camera} />
          </div>
        </ImgStyled>
      </StyleImg>
      <StyleTag>@lisa.official</StyleTag>
    </StyleBody>
  );
};

export default CardFollow;
