import styled from "styled-components";
import IFilter from "assets/IFilter.png";

const BarList = () => {
  return (
    <ListMenu>
      <BarListM>
        <li className="SelectView">All Products</li>
        <li className="ListMenu">T-Shirt</li>
        <li className="ListMenu">Hoodies</li>
        <li className="ListMenu">Jacket</li>
      </BarListM>
      <button className="BtnFilter">
        <img className="IFilter" src={IFilter} />
        Filter
      </button>
    </ListMenu>
  );
};

export default BarList;

const ListMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 1120px;
  margin-top: 40px;
  .BtnFilter {
    width: 93px;
    height: 32px;
    background: #1e2832;
    display: flex;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
  }
  .IFilter {
    margin-right: 4px;
  }
`;
const BarListM = styled.ol`
  display: flex;
  flex-direction: row;
  .ListMenu {
    margin-left: 40px;
  }
  .SelectView {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    color: #000000;
  }
`;
