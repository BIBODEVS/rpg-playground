import React, { FC } from 'react'
import { Card } from 'antd'
import { HealthMark } from '../HealthMark'

type UserCardProps = {
  name: string
  health?: number
  maxHealth?: number
  onClick?: () => void
}

export const EntityCard: FC<UserCardProps> = ({ name, health, maxHealth, onClick }) => (
  <Card title={name} style={{ width: 300, cursor: 'pointer' }} onClick={onClick}>
    {health && maxHealth && <HealthMark value={health} maxValue={maxHealth} />}
  </Card>
)
