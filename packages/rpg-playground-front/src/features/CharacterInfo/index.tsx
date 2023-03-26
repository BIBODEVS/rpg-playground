import React, { FC } from 'react'
import { useStores } from '../../shared/hooks/stores'
import { ModalData } from '../../app/stores/modals'
import * as El from './styles'

export type CharacterInfoProps = {
  characterId: string
}
export const CharacterInfo: FC<ModalData<CharacterInfoProps>> = ({ data }) => {
  const {
    playground: { getCharacterById }
  } = useStores()

  const character = getCharacterById(data.characterId)

  if (!character) {
    return <div>Not found</div>
  }
  return (
    <El.ModalList>
      <El.ModalRow>
        <El.ModalSubtitle>Имя</El.ModalSubtitle>
        <div>{character.name}</div>
      </El.ModalRow>
      <El.ModalRow>
        <El.ModalSubtitle>Здоровье</El.ModalSubtitle>
        <div>{character.maxHealth}</div>
      </El.ModalRow>
      <El.ModalRow>
        <El.ModalList>
          <El.ModalSubtitle>Инвентарь</El.ModalSubtitle>
          <El.ModalList>
            {character.inventory.map((item, index) => (
              <El.ModalRow key={index}>
                <El.ModalList>
                  <div>{item.name}</div>
                  <div>{item.description}</div>
                </El.ModalList>

                <div>{item.amount}</div>
              </El.ModalRow>
            ))}
          </El.ModalList>
        </El.ModalList>
      </El.ModalRow>
    </El.ModalList>
  )
}
