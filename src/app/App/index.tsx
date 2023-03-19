import { FC } from "react";
import { Router } from "../Router";
import { ConfigProvider } from "antd";
import { StoresProvider } from "../providers/Stores";

export const App: FC = () => {
  return (
    <StoresProvider>
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
    </StoresProvider>
  );
};
