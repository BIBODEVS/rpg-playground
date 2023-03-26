import { useContext } from 'react'
import { StoresContext } from '../../app/providers/Stores/context'

export const useStores = () => useContext(StoresContext)
