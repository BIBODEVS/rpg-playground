import { useContext, useState } from 'react'
import { StoresContext } from '../../app/providers/Stores/context'

type Constructable<T = any> = { new (...args: any[]): T }

export const useStores = () => useContext(StoresContext)

export function useLocalClassStore<T>(Store: Constructable<T>, ...args: any[]): T {
  const [store] = useState(() => new Store(...args))
  return store
}
