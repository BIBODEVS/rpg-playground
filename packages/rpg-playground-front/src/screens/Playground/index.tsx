import React, { FC, useEffect } from 'react'
import { Button, Layout, Space } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { observer } from 'mobx-react-lite'
import * as El from './styles'
import { EntityCard } from '../../shared/components/CharacterCard'
import { useStores } from '../../shared/hooks/stores'

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea'
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'transparent',
  height: '100%'
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea'
}

export const Playground: FC = observer(() => {
  const {
    modals: { openModal },
    playground: { loading, setData, masterCharacters, playersCharacters, setStage },
    user: { role }
  } = useStores()

  useEffect(() => {
    setData()
  }, [])

  const handleEntityClick = () => {
    openModal({
      name: 'CharacterInfo'
    })
  }

  const fightPreparingHandler = () => {
    setStage('preparing')
    openModal({
      name: 'Initiative'
    })
  }

  const isMaster = role === 'master'

  if (loading) return <div>Loading</div>

  return (
    <El.PlaygroundWrapper direction="vertical" style={{ width: '100%', minHeight: '100vh' }}>
      <Layout style={{ height: '100vh' }}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Content style={contentStyle}>
            <El.Playfield isInvert={isMaster}>
              <Space>
                {masterCharacters.map((masterChar) => (
                  <EntityCard
                    key={masterChar.id}
                    name={masterChar.name}
                    onClick={handleEntityClick}
                    health={masterChar.health}
                    maxHealth={masterChar.maxHealth}
                  />
                ))}
              </Space>
              <Space>
                {playersCharacters.map((playerChar) => (
                  <EntityCard
                    key={playerChar.id}
                    name={playerChar.name}
                    onClick={handleEntityClick}
                    health={playerChar.health}
                    maxHealth={playerChar.maxHealth}
                  />
                ))}
              </Space>
            </El.Playfield>
          </Content>
        </Layout>
        <Footer style={footerStyle}>
          <Button onClick={fightPreparingHandler}>Приготовиться к бою</Button>
        </Footer>
      </Layout>
    </El.PlaygroundWrapper>
  )
})
