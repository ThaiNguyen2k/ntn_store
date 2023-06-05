import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  ShoppingCartOutlined,
  AppstoreAddOutlined,
  TagOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  ExportOutlined,
  SettingOutlined,
  CreditCardOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { Layout, Menu, theme } from "antd";
import { MAX_VERTICAL_CONTENT_RADIUS } from "antd/es/style/placementArrow";
import Dashboard from "pages/Admin/Dashboard/Dashboard";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;
const SiderBar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 700,
              background: colorBgContainer,
            }}
          >
            <Dashboard></Dashboard>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default SiderBar;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("Products", "2", <AppstoreOutlined />),
  getItem("Customers", "3", <UsergroupAddOutlined />),
  getItem("Oders", "4", <ShoppingCartOutlined />),
  getItem("Shipments", "5", <AppstoreAddOutlined />),
  getItem("Transactions", "6", <CreditCardOutlined />),
  getItem("Settings", "7", <SettingOutlined />),
  getItem("Logout", "8", <ExportOutlined />),
];
