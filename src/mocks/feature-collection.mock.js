const generateRandomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min

const setStatus = () => {
  const random = generateRandomValue(0, 3)

  switch (random) {
    case 0:
      return 'success'
    case 1:
      return 'warning'
    case 2:
      return 'fail'
    default:
      return 'success'
  }
}

export class Feature {
  featureName = ''
  featureStatus = ''
  metrics = []

  constructor () {
    this.featureName = 'Slot'
    this.featureStatus = setStatus()
    this.metrics = [
      ...Array(generateRandomValue(60, 300))
    ].map((_, i) => new Metric())
  }
}

class Metric {
  labelMetric
  dev
  devOutTotal
  status

  constructor () {
    this.labelMetric = this.setLabelMetric()
    this.dev = generateRandomValue(0, 11)
    this.devOutTotal = generateRandomValue(0, 11)
    this.status = setStatus()
  }

  setLabelMetric () {
    const random = generateRandomValue(0, 6)

    switch (random) {
      case 0:
        return 'X'
      case 1:
        return 'Y'
      case 2:
        return 'Z'
      case 3:
        return 'Diameter'
      case 4:
        return 'Length'
      case 5:
        return 'Weight'
      default:
        return 'X'
    }
  }
}
