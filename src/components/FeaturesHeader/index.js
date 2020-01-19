// Common
import React from 'react'

// Styled components
import { Header, Title } from './styles'

// Icons
import { FaRegCircle } from 'react-icons/fa'

// Components
import { SemaphoreIcon } from '../SemaphoreIcon'

export const FeaturesHeader = ({ featureName = 'Feature\'s Name', status = 'warning' }) => {
  return (
    <Header status={status}>
      <FaRegCircle size='32px' />
      <Title>
        <h1> {featureName} </h1>
      </Title>
      <SemaphoreIcon status={status} color='white' />
    </Header>
  )
}
