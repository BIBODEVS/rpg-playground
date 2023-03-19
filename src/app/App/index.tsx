import { FC } from "react";
import { Router } from "../Router";
import { ConfigProvider } from "antd";

export const App: FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            colorPrimary: "#00b96b",
          },
          Layout: {
            colorBgBase: "transparent",
          },
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
};
