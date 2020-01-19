import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  background-color: ${
    ({ status }) => {
      switch (status) {
        case 'success':
          return 'green'
        case 'warning':
          return '#ffc107'
        case 'fail':
          return 'red'
        default:
          return 'green'
      }
    }
  };
  color: white;
`

export const Title = styled.div`
  color: white;
  width: 100%;
  padding: 0 30px;
  text-align: left;

  @media (max-width: 1000px) {
    text-align: center;
  }
`
