import styled from 'styled-components'

export const Label = styled.span`
  position: absolute;
  inset: 20%;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 400;
  background-color: #7e531b;
  z-index: 10;

  &.hasStone {
    background: none;
  }

  &.whiteLabel {
    color: white;
  }
`
