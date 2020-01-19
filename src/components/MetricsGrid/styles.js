// Common
import styled from 'styled-components'

export const Title = styled.div`
  font-weight: bold;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  color: #7a7a7a;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`
