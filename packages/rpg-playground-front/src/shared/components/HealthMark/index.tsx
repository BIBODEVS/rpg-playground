import React, { FC } from 'react'
import * as El from './styles'

type HealthMarkProps = {
  value: number
  maxValue: number
}

export const HealthMark: FC<HealthMarkProps> = ({ value, maxValue }) => (
  <El.HealthMark value={value} maxValue={maxValue}>
    {value}/{maxValue}
  </El.HealthMark>
)
