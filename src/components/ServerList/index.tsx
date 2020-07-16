import React from 'react'


import ServerButton from '../ServerButton'
import { Container, Separator } from './styles'

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>
      
      <Separator/>

      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton mentions={3}/>
      <ServerButton hasNotifications/>
      <ServerButton mentions={23}/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />

    </Container>
  )
}

export default ServerList