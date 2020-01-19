// Common
import { interval, of } from 'rxjs'
import { map, startWith } from 'rxjs/operators'

// Mock
import { Feature } from '../mocks/feature-collection.mock'

export const getFeature = (featureId) => {
  // TODO: call fetch with real api endpoint
  return interval(10000).pipe(
    startWith(of(new Feature())),
    map(() => new Feature())
  )
}
