import { FC } from "react";
import * as El from "./styles";
import { Layout, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { EntityCard } from "../../shared/components/EntityCard";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "transparent",
  height: "100%",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export const Playground: FC = () => {
  return (
    <El.PlaygroundWrapper
      direction="vertical"
      style={{ width: "100%", minHeight: "100vh" }}
    >
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Content style={contentStyle}>
            <Space direction="vertical">
              <Space>
                <EntityCard name={"Виверна"} />
              </Space>
              <Space>
                <EntityCard
                  name={"Бутер Светоносный"}
                  health={12}
                  maxHealth={24}
                />
                <EntityCard
                  name={"Эльф Извращенец"}
                  health={20}
                  maxHealth={30}
                />
                <EntityCard
                  name={"Великолепный Бард"}
                  health={2}
                  maxHealth={18}
                />
              </Space>
            </Space>
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </El.PlaygroundWrapper>
  );
};
