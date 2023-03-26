import React, { FC } from 'react'
import * as El from './styles'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../../shared/hooks/stores'

export const PlaygroundHeader: FC = observer(() => {
  const {
    playground: { stage, name }
  } = useStores()
  return (
    <El.Root>
      <div>
        {name}:{stage}
      </div>
    </El.Root>
  )
})
