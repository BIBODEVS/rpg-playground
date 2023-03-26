import React, { FC } from 'react'
import { Button } from 'antd'
import { useStores } from '../../../shared/hooks/stores'
import * as El from './styles'

export const MasterFooter: FC = () => {
  const {
    modals: { openModal },
    playground: { setStage, stage, nextCharacter, previousCharacter }
  } = useStores()

  const fightPreparingHandler = () => {
    setStage('preparing')
    openModal({
      name: 'Initiative'
    })
  }

  const finishFight = () => {
    setStage('roleplay')
  }

  if (stage === 'roleplay') {
    return <Button onClick={fightPreparingHandler}>Приготовиться к бою</Button>
  }
  if (stage === 'fight') {
    return (
      <El.ButtonsWrapper>
        <Button onClick={previousCharacter}>Предыдущий ход</Button>
        <Button onClick={nextCharacter}>Следующий ход</Button>
        <Button onClick={finishFight} danger>
          Закончить бой
        </Button>
      </El.ButtonsWrapper>
    )
  }
  return null
}
