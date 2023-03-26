import React, { FC } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Playground } from '../../screens/Playground'
import { ModalSwitcher } from '../../features/ModalSwitcher'

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/playground/:gameId" element={<Playground />} />
    </Routes>
    <ModalSwitcher />
  </BrowserRouter>
)
