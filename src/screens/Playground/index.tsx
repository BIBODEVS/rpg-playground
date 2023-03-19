import { FC } from "react";
import * as El from "./styles";
import { Button, Layout, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { EntityCard } from "../../shared/components/EntityCard";
import { useStores } from "../../shared/hooks/stores";
import { observer } from "mobx-react-lite";

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

export const Playground: FC = observer(() => {
  const {
    modals: { openModal },
  } = useStores();
  const handleEntityClick = () => {
    openModal({
      name: "UserInfo",
    });
  };

  const fightPreparingHandler = () => {
    openModal({
      name: "Initiative",
    });
  };
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
                <EntityCard name={"Виверна"} onClick={handleEntityClick} />
              </Space>
              <Space>
                <EntityCard
                  name={"Бутер Светоносный"}
                  onClick={handleEntityClick}
                  health={12}
                  maxHealth={24}
                />
                <EntityCard
                  name={"Эльф Извращенец"}
                  onClick={handleEntityClick}
                  health={20}
                  maxHealth={30}
                />
                <EntityCard
                  name={"Великолепный Бард"}
                  onClick={handleEntityClick}
                  health={2}
                  maxHealth={18}
                />
              </Space>
            </Space>
          </Content>
        </Layout>
        <Footer style={footerStyle}>
          <Button onClick={fightPreparingHandler}>Приготовиться к бою</Button>
        </Footer>
      </Layout>
    </El.PlaygroundWrapper>
  );
});
