// Common
import React from 'react'

// Styled Components
import { MetricItem, IconContainer, MetricRow } from './styles'

// Components
import { SemaphoreIcon } from '../../components/SemaphoreIcon'

// Custom Hooks
import { useNearScreen } from '../../hooks/useNearScreen'

export const Metric = ({ labelMetric = 'X', dev = 0, devOutTotal = 0, status = 'status' }) => {
  const [show, ref] = useNearScreen()

  return (
    <MetricRow ref={ref}>
      {show && (
        <>
          <MetricItem> {labelMetric} </MetricItem>
          <MetricItem> {dev} </MetricItem>
          <MetricItem> {devOutTotal} </MetricItem>
          <IconContainer>
            <SemaphoreIcon size='24px' status={status} />
          </IconContainer>
        </>
      )}
    </MetricRow>
  )
}
