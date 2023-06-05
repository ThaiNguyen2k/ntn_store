import styled from "styled-components";
import SiderBar from "./SideBar";
const LayoutStyled = styled.div`
  background-color: #caeae6;
  display: flex;
  .right {
    float: right;
  }
`;
const ContentStyled = styled.div`
  margin-top: 10px;
  padding-right: 10px;
`;
const SideBarStyled = styled.div`
  float: left;
`;

const PrimaryLayout = ({ children }) => {
  return <SiderBar></SiderBar>;
};

export default PrimaryLayout;
