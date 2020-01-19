// Common
import React from 'react'

// Styled Components
import { Grid, Title, ContentGrid } from './styles'

// Components
import { Metric } from '../../components/Metric'

export const MetricsGrid = ({ width, metrics }) => {
  return (
    <>
      <Grid>
        <Title> Control </Title>
        <Title> Dev </Title>
        <Title> Dev out Tol </Title>
        {
          width >= 1000 && (
            <>
              <Title> Control </Title>
              <Title> Dev </Title>
              <Title> Dev out Tol </Title>
            </>
          )
        }
      </Grid>
      <ContentGrid>
        {
          // TODO: change key={i} for metricId
          metrics.map((metric, i) => <Metric key={i} {...metric} />)
        }
      </ContentGrid>
    </>
  )
}
