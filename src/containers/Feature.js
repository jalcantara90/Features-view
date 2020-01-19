// Common
import React, { useState, useEffect } from 'react'

// Components
import { MetricsGrid } from '../components/MetricsGrid'
import { FeaturesHeader } from '../components/FeaturesHeader'
import { FeaturesContent } from '../components/FeaturesContent'

// Hooks
import { useViewPortDimensions } from '../hooks/useViewPortDimensions'

// Services
import { getFeature } from '../services/feature-metrics'

export const Feature = () => {
  const { width } = useViewPortDimensions()
  const [feature, setFeature] = useState({})

  useEffect(() => {
    const subscription = getFeature(1).subscribe(setFeature)

    return () => subscription.unsubscribe()
  }, [getFeature])

  return (
    !feature || !feature.metrics ? 'loading...' : (
      <>
        <FeaturesHeader featureName={feature.featureName} status={feature.featureStatus} />
        <FeaturesContent>
          <MetricsGrid width={width} metrics={feature.metrics} />
        </FeaturesContent>
      </>
    )
  )
}
