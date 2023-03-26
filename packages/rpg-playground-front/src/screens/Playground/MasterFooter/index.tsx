import React, { FC } from 'react'
import { Button } from 'antd'
import { useStores } from '../../../shared/hooks/stores'

export const MasterFooter: FC = () => {
  const {
    modals: { openModal },
    playground: { setStage, stage }
  } = useStores()
  const fightPreparingHandler = () => {
    setStage('preparing')
    openModal({
      name: 'Initiative'
    })
  }
  if (stage == 'roleplay') {
    return <Button onClick={fightPreparingHandler}>Приготовиться к бою</Button>
  }
  return null
}
