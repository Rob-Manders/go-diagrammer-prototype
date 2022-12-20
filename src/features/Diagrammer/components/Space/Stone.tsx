import styled from 'styled-components'

export const Stone = styled.span`
  &.stone {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;

    &.black {
      background-color: #000;
    }

    &.white {
      background-color: #fff;
    }
  }
`
