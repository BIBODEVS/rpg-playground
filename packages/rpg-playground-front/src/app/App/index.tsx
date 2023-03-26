import React, { FC } from 'react'
import { ConfigProvider } from 'antd'
import { Router } from '../Router'
import { StoresProvider } from '../providers/Stores'

export const App: FC = () => (
  <StoresProvider>
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            colorPrimary: '#00b96b'
          },
          Layout: {
            colorBgBase: 'transparent'
          }
        }
      }}
    >
      <Router />
    </ConfigProvider>
  </StoresProvider>
)
