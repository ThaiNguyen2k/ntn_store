import { Card } from "antd";
import styled from "styled-components";
const { Meta } = Card;
const StyleRice = styled.div`
  position: absolute;
  margin-top: -20px;
  margin-left: 180px;
`;
const StyleRiceSale = styled(StyleRice)`
  color: red;
`

const CardProct = ({ title, description, img, rice, status }) => (
  <Card
    hoverable
    style={{
      width: 260,
      height: 410,
    }}
    cover={<img alt="example" src={img} />}
  >
    <Meta title={title} description={description}></Meta>
    {status===0?<StyleRice>${rice}</StyleRice>:<StyleRiceSale>${rice}</StyleRiceSale>}
  </Card>
);
export default CardProct;
