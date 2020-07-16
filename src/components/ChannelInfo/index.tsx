import React from 'react'

import { Container, HashtagIcon, Title , Separator, Description } from './styles'

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Chat Livre</Title>
      
      <Separator />

      <Description>Canal aberto para conversas</Description>  
    </Container>
  )
}

export default ChannelInfo