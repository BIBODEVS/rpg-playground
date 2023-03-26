import React, { FC } from 'react'
import { StoresContext } from './context'
import { RootStore } from '../../stores'

interface StoresProviderProps {
  children: React.ReactNode
}

export const StoresProvider: FC<StoresProviderProps> = ({ children }) => {
  return <StoresContext.Provider value={new RootStore()}>{children}</StoresContext.Provider>
}
