// Common
import React from 'react'

// Global styles
import { GlobalStyles } from './styles/GlobalStyles'

// Pages
import { FeaturesPage } from './pages/Features'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <FeaturesPage />
    </>
  )
}
